"use client"

import { useEffect, createRef, useRef, useState } from "react"
import { createPluginUI } from "molstar/lib/mol-plugin-ui"
import { renderReact18 } from "molstar/lib/mol-plugin-ui/react18"
import type { PluginUIContext } from "molstar/lib/mol-plugin-ui/context"

import { DefaultPluginUISpec, type PluginUISpec } from "molstar/lib/mol-plugin-ui/spec"

import { Color } from "molstar/lib/mol-util/color"
import { PluginCommands } from "molstar/lib/mol-plugin/commands"

import { Structure, StructureProperties } from "molstar/lib/mol-model/structure"

// Add basic molstar styles inline
const molstarStyles = `
  .msp-plugin {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .msp-canvas-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .msp-canvas {
    width: 100% !important;
    height: 100% !important;
  }
  /* Hide Mol* log overlay */
  .msp-log {
    display: none !important;
  }
  .msp-layout-left, .msp-layout-right, .msp-layout-top, .msp-layout-bottom {
    display: none !important;}
`

const MySpec: PluginUISpec = DefaultPluginUISpec()

export interface HotspotResidue {
  resname: string
  resid: number
  auth_asym_chain: string
}

export interface MolStarWrapperProps {
  showSurface?: boolean
  surfaceType?: "gaussian-surface" | "molecular-surface"
  coloringScheme?: "hydrophobicity" | "uniform"
  selectedResidues?: HotspotResidue[]
  onSelectionChange?: (residues: HotspotResidue[]) => void
  selectionMode?: boolean
  structureUrl?: string
}


export function MolStarWrapper({
  showSurface = true,
  surfaceType = "gaussian-surface",
  coloringScheme = "hydrophobicity",
  selectedResidues = [],
  onSelectionChange,
  selectionMode = true,
  structureUrl = "",
}: MolStarWrapperProps = {}) {
  // Use a key to force remount of the container div when structureUrl changes
  const [containerKey, setContainerKey] = useState(0);
  const parent = useRef<HTMLDivElement>(null);
  const plugin = useRef<PluginUIContext | null>(null);
  const structure = useRef<any>(null);
  const components = useRef<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const surfaceRef = useRef<any>(null);

  // Initial setup - runs only once
  // When structureUrl changes, force a new container by updating the key
  useEffect(() => {
    setContainerKey(k => k + 1);
    // Also reset initialization state
    setIsInitialized(false);
    // Clean up plugin if any
    if (plugin.current) {
      plugin.current.dispose();
      plugin.current = null;
    }
    structure.current = null;
    components.current = null;
    surfaceRef.current = null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [structureUrl]);

  useEffect(() => {
    let spinFrame: number | null = null;
    let cancelled = false;
    async function init() {
      if (!parent.current) return;
      // Always dispose previous plugin before creating a new one
      if (plugin.current) {
        plugin.current.dispose();
        plugin.current = null;
      }
      // No need to clear children, the div is remounted
      const createdPlugin = await createPluginUI({
        target: parent.current,
        spec: MySpec,
        render: renderReact18,
      });
      if (cancelled) return;
      plugin.current = createdPlugin;

      const renderer = plugin.current!.canvas3d!.props.renderer
      PluginCommands.Canvas3D.SetSettings(plugin.current!, {
        settings: {
          renderer: {
            ...renderer,
            backgroundColor: Color(0xf5f9fd),
          },
        },
      })

      // Hide axes helper
      plugin.current!.canvas3d?.setProps({
        camera: {
          ...plugin.current!.canvas3d.props.camera,
          helper: {
            ...plugin.current!.canvas3d.props.camera.helper,
            axes: false,
          },
        },
      })

      let data, trajectory, model;
      try {
        data = await plugin.current!.builders.data.download({ url: structureUrl }, { state: { isGhost: true } })
        if (cancelled) return;
        trajectory = await plugin.current!.builders.structure.parseTrajectory(data, "pdb")
        if (cancelled) return;
        model = await plugin.current!.builders.structure.createModel(trajectory)
        if (cancelled) return;
        structure.current = await plugin.current!.builders.structure.createStructure(model)
        if (cancelled) return;
      } catch (e) {
        if (!cancelled) console.error(e);
        return;
      }

      const colorList = [Color(0x2563eb), Color(0x4f46e5), Color(0x8b5cf6), Color(0xc084fc), Color(0xf472b6)]

      // Add cartoon representation
      await plugin.current!.builders.structure.representation.addRepresentation(structure.current, {
        type: "cartoon",
        color: "sequence-id",
        colorParams: {
          list: {
            kind: "interpolate",
            colors: colorList,
          },
        },
      })
      if (cancelled) return;

      await plugin.current!.builders.structure.representation.addRepresentation(structure.current, {
        type: "molecular-surface",
        typeParams: {
          alpha: 0.1,
        },
        color: "uniform",
        colorParams: {
          value: Color(0xd3d3d3),
        },
      })
      if (cancelled) return;

      // Store components for later use
      components.current = {
        polymer: await plugin.current!.builders.structure.tryCreateComponentStatic(structure.current, "polymer"),
        ligand: await plugin.current!.builders.structure.tryCreateComponentStatic(structure.current, "ligand"),
        water: await plugin.current!.builders.structure.tryCreateComponentStatic(structure.current, "water"),
      }
      if (cancelled) return;

      // Setup selection mode
      plugin.current!.selectionMode = selectionMode

      // Function to sync the current selection state
      const syncSelectionWithParent = () => {
        try {
          const selectedResidues: HotspotResidue[] = []
          const entries = plugin.current!.managers.structure.selection.entries.values()
          for (const { structure } of entries) {
            if (!structure) continue
            Structure.eachAtomicHierarchyElement(structure, {
              residue: (loc) => {
                const resname = StructureProperties.atom.label_comp_id(loc)
                const resid = StructureProperties.residue.auth_seq_id(loc)
                const auth_asym_chain = StructureProperties.chain.auth_asym_id(loc)
                selectedResidues.push({ resname, resid, auth_asym_chain })
              },
            })
          }
          onSelectionChange?.(selectedResidues)
        } catch (error) {
          console.error("Error syncing selection:", error)
        }
      }

      plugin.current!.managers.structure.selection.events.changed.subscribe(() => {
        syncSelectionWithParent()
      })

      // Custom animation loop to spin the molecule
      let spinAngle = 0;
      if (plugin.current && plugin.current.canvas3d) {
        const camera = plugin.current.canvas3d.camera.getSnapshot();
        spinAngle = Math.atan2(
          camera.position[2] - camera.target[2],
          camera.position[0] - camera.target[0]
        );
      }
      const spinSpeed = 0.01; // radians per frame
      const spin = () => {
        if (plugin.current && plugin.current.canvas3d) {
          spinAngle += spinSpeed;
          const camera = plugin.current.canvas3d.camera.getSnapshot();
          const radius = Math.sqrt(
            Math.pow(camera.position[0] - camera.target[0], 2) +
            Math.pow(camera.position[2] - camera.target[2], 2)
          );
          const newX = camera.target[0] + radius * Math.cos(spinAngle);
          const newZ = camera.target[2] + radius * Math.sin(spinAngle);
          plugin.current.canvas3d.camera.setState({
            position: [newX, camera.position[1], newZ] as any
          });
        }
        spinFrame = requestAnimationFrame(spin);
      };
      spinFrame = requestAnimationFrame(spin);

      setIsInitialized(true)
    }

    init()

    return () => {
      cancelled = true;
      if (spinFrame !== null) cancelAnimationFrame(spinFrame)
      if (plugin.current) {
        plugin.current.dispose();
        plugin.current = null;
      }
      structure.current = null;
      components.current = null;
      surfaceRef.current = null;
    }
  }, [containerKey])

  // Surface representation management
  useEffect(() => {
    const updateSurface = async () => {
      if (!isInitialized || !plugin.current || !components.current) return

      // First, check if we need to remove the previous surface representation
      if (surfaceRef.current) {
        try {
          // Use update.delete on the specific representation
          const update = plugin.current.state.data.build()
          update.delete(surfaceRef.current.transform.ref)
          await plugin.current.runTask(plugin.current.state.data.updateTree(update))
          surfaceRef.current = null
        } catch (error) {
          console.error("Error removing previous surface:", error)
        }
      }

      // Add new surface if needed
      if (showSurface && components.current.polymer) {
        try {
          // Configure surface type parameters

          const typeParams = surfaceType === "gaussian-surface" ? { alpha: 1 } : { probeRadius: 1.4, resolution: 0.5 }

          // Create a new representation and store its reference
          let representation
          if (coloringScheme === "hydrophobicity") {
            representation = await plugin.current.builders.structure.representation.addRepresentation(
              components.current.polymer,
              {
                type: surfaceType as "gaussian-surface" | "molecular-surface",
                typeParams,
                color: "hydrophobicity",
                colorParams: { scale: "DGwoct" },
              },
            )
          } else {
            representation = await plugin.current.builders.structure.representation.addRepresentation(
              components.current.polymer,
              {
                type: surfaceType as "gaussian-surface" | "molecular-surface",
                typeParams,
                color: "uniform",
                colorParams: { value: Color(0xd3d3d3) },
              },
            )
          }

          // Store the cell reference for later deletion
          surfaceRef.current = representation?.cell
        } catch (error) {
          console.error("Error adding surface:", error)
        }
      }
    }

    updateSurface()
  }, [showSurface, surfaceType, coloringScheme, isInitialized])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: molstarStyles }} />
      <div
        key={containerKey}
        ref={parent}
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
}
