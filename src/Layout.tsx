import { Analytics } from '@vercel/analytics/react'
import './styles/globals.css'

import CustomCursor from './components/ui/custom-cursor'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="antialiased bg-background font-sans">
      <CustomCursor />
      {children}
      {import.meta.env.PROD && <Analytics />}
    </div>
  )
}

