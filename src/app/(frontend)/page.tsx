import React from 'react'
import { Banner } from '@/components/shared/banner'
import { ProductShowcase } from '@/components/shared/product-showcase'
import { ServiceSection } from '@/components/shared/service-section'

export default async function HomePage() {
  // In production these values would come from your CMS / API fetch
  return (
    <div className="bg-secondary">
      <Banner
        image="/banner-hero.png"
        title={'Crafted for the\nSoul of the Object'}
        subtitle="Meticulous fusion of Japanese minimalism and Scandinavian functionality. Every piece is an intentional whisper of timeless craftsmanship."
        buttons={[
          { label: 'Explore Collection', href: '/collection', variant: 'primary' },
          { label: 'Our Philosophy', href: '/about', variant: 'ghost' },
        ]}
      />

      {/* Product showcase section — data below will come from your API */}
      <ProductShowcase
        label="CURATION 01"
        title="Signature Forms"
        viewAllLabel="VIEW ALL OBJECTS"
        viewAllHref="/collection"
        className="bg-white"
        products={[
          {
            id: 'komorebi-chair',
            name: 'Komorebi Dining Chair',
            descriptor: 'Solid Ash, Natural Finish',
            price: '$1,850',
            image: '/products/chair-01.webp',
            imageAlt: 'Komorebi Dining Chair — Solid Ash, Natural Finish',
            href: '/products/komorebi-dining-chair',
          },
          {
            id: 'ishikari-table',
            name: 'Ishikari Low Table',
            descriptor: 'Walnut & Honed Basalt',
            price: '$3,200',
            image: '/products/table-1.jpg',
            imageAlt: 'Ishikari Low Table — Walnut & Honed Basalt',
            href: '/products/ishikari-low-table',
          },
          {
            id: 'sora-plinth',
            name: 'Sora Side Plinth',
            descriptor: 'Oak Veneer',
            price: '$1,250',
            image: '/products/plinth-01.webp',
            imageAlt: 'Sora Side Plinth — Oak Veneer',
            href: '/products/sora-side-plinth',
          },
        ]}
      />

      {/* Service section — data below will come from your API */}
      <ServiceSection
        label="INTERIOR SERVICES"
        title={'Curating Spaces\n\nfor Intentional Living'}
        description="Our design studio goes beyond furniture. We collaborate with architects and homeowners to curate environments that breathe. Through a Japanese lens of simplicity and Scandinavian warmth, we transform structures into sanctuaries."
        services={[
          { id: 'bespoke', label: 'Bespoke Furniture Commissions' },
          { id: 'architecture', label: 'Full Interior Architecture Curation' },
          { id: 'material', label: 'Material & Textile Consultations' },
        ]}
        buttons={[{ label: 'BOOK A CONSULTATION', href: '/contact', variant: 'outline' }]}
        image="/service-hero.jpg"
        layout="image-left"
        className="bg-secondary-foreground"
      />
    </div>
  )
}
