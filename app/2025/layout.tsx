import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

export const metadata: Metadata = {
  title: 'MLSB 2025 Workshop',
  description: 'Workshop on Machine Learning in Structural Biology co-located with NeurIPS 2025',
}

export default function MLSB2025Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className={GeistSans.className}>{children}</div>
}
