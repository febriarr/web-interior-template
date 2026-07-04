import type { Page } from '@/payload-types'

import { CmsButtons } from '../hero.button'
import { HeroMedia } from '../hero.media'

type Props = {
  hero: Page['hero']
}

// TODO
/**
 * Styling dengan layout refrence ente bang
 * props nya sesuai type yang diatas ini
 */

export function HighImpactHero({ hero }: Props) {
  const { title, subtitle, media, buttons } = hero

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <HeroMedia media={media} priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-white/90 sm:text-xl">{subtitle}</p>}
        <CmsButtons buttons={buttons} className="mt-8 justify-center" />
      </div>
    </section>
  )
}
