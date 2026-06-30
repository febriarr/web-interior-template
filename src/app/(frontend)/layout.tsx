import React from 'react'
import './styles.css'
import { Header } from '@/components/shared/header'

export const metadata = {
  description: 'Lumiere — timeless furniture for your space.',
  title: 'Lumiere | Timeless Furniture',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  // TODO: replace with real API fetch, e.g.:
  // const siteConfig = await fetchSiteConfig()

  return (
    <html lang="en">
      <body>
        <Header logo={{ title: 'Lumiere', href: '/' }} variant="solid" cartCount={2} />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
