import React from 'react'
import { Banner } from '@/components/shared/banner'
import { MaterialGallery } from '@/components/shared/material-gallery'
import { ProductShowcase } from '@/components/shared/product-showcase'
import { ServiceSection } from '@/components/shared/service-section'
import { ArticlesSection } from '@/components/shared/articles-section'
import { getHomePage } from '@/services/home'
import TestingRender from '@/lib/testingRender'


export default async function HomePage() {
  const page = await getHomePage()
 // Log the fetched data to the console for debugging
  // In production these values would come from your CMS / API fetch
  return (
    <>
    <TestingRender data={page} />
    </>
  )
}
