import type { Page } from '@/payload-types'

import { CmsButtons } from '../hero.button'
import { HeroMedia } from '../hero.media'

type Props = {
  hero: Page['hero']
}

export function MediumImpactHero({ hero }: Props) {
  const { title, subtitle, media, buttons } = hero

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
      <div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
        <CmsButtons buttons={buttons} className="mt-6" />
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
        <HeroMedia media={media} />
      </div>
    </section>
  )
}
