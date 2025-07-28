"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MapPin, ExternalLink, Navigation } from "lucide-react"

export function VenueModal() {
  const venueInfo = {
    name: "San Diego Convention Center",
    address: "111 W Harbor Dr, San Diego, CA 92101",
    city: "San Diego, California",
    googleMapsUrl: "https://maps.google.com/?q=San+Diego+Convention+Center,111+W+Harbor+Dr,San+Diego,CA+92101",
    appleMapsUrl: "https://maps.apple.com/?q=San+Diego+Convention+Center&address=111+W+Harbor+Dr,San+Diego,CA+92101",
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-white/90 border-blue-200">
          <MapPin className="w-4 h-4 mr-2" />
          How to Get to Venue
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            Venue Information
          </DialogTitle>
          <DialogDescription>Get directions to the MLSB 2025 conference venue</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h4 className="font-semibold text-slate-800 mb-2">{venueInfo.name}</h4>
            <p className="text-slate-600 text-sm mb-1">{venueInfo.address}</p>
            <p className="text-slate-600 text-sm">{venueInfo.city}</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-slate-800">Get Directions</h4>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="justify-start bg-transparent" asChild>
                <a href={venueInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Open in Google Maps
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start bg-transparent" asChild>
                <a href={venueInfo.appleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Open in Apple Maps
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> The venue is located in downtown San Diego, easily accessible by public
              transportation, rideshare, and walking from nearby hotels.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
