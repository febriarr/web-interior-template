import type { Page } from '@/payload-types'

import { CmsButtons } from '../hero.button'

type Props = {
  hero: Page['hero']
}

/**
 * TODO
 * Hero ini gapake image bang
 * layout nya center in semua
 */

export function LowImpactHero({ hero }: Props) {
  const { title, subtitle, buttons } = hero

  return (
    <section className="mx-auto max-w-3xl px-6 py-12 text-center">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
      <CmsButtons buttons={buttons} className="mt-6 justify-center" />
    </section>
  )
}
