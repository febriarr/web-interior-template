'use client'
import { Page } from '@/payload-types'
import {
  Section,
  SectionAction,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/section'
import { Button } from '@/components/ui/button'
import { ThreeGridProducts } from '@/components/blocks/ThreeGridProductBlock'
import Link from 'next/link'
import { cn } from './utils'
import { Hero } from '@/fields/hero/hero'

export default function TestingRender({ data }: { data: Page }) {
  return (
    <div>
      {/* Hero */}
      <div
        className={cn('relative w-full overflow-hidden', 'h-[calc(100vh-3.5rem)] min-h-[520px]')}
      >
        <Hero hero={data.hero} />
      </div>
      <div className="space-y-4">
        {data.content?.map((section) => (
          <Section key={section.id}>
            <SectionContent>
              {(section.title || section.subtitle || section.action) && (
                <SectionHeader type={section.orientation ?? 'vertical'}>
                  <div className="space-y-2">
                    {section.title && <SectionTitle>{section.title}</SectionTitle>}

                    {section.subtitle && (
                      <SectionDescription>{section.subtitle}</SectionDescription>
                    )}
                  </div>

                  {section.action?.label && (
                    <SectionAction>
                      <Button asChild variant={section.action.variant}>
                        <Link
                          href={
                            section.action.linkType === 'internal'
                              ? section.action.internalPath!
                              : section.action.externalUrl!
                          }
                          target={section.action.newTab ? '_blank' : undefined}
                          rel={section.action.newTab ? 'noopener noreferrer' : undefined}
                        >
                          {section.action.label}
                        </Link>
                      </Button>
                    </SectionAction>
                  )}
                </SectionHeader>
              )}

              {section.blocks?.map((block) => {
                switch (block.blockType) {
                  case 'threeGridProducts':
                    return <ThreeGridProducts key={block.id} block={block} />

                  default:
                    return null
                }
              })}
            </SectionContent>
          </Section>
        ))}
      </div>
    </div>
  )
}
