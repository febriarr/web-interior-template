import type { Page } from '@/payload-types'

import { CmsButtons } from '../hero.button'
import { HeroMedia } from '../hero.media'

type Props = {
  hero: Page['hero']
}

/**
 *
 * TODO
 * data dari backend ada medianya bang
 * tapi untuk layoutnya berbeda sama type high impact
 * PERBEDAAN:
 *
 * HIGH IMPACT
 * image jadi background dan styling nya sesuai reference
 *
 * MEDIUM IMPACT
 * layout nya flex dimana
 * title dan subtitle nya ada di sebelah kiri
 * sedangkan imagenya ada disebelah kanan
 */

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
