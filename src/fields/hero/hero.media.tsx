import Image from 'next/image'

import { cn } from '@/lib/utils'
import type { Media, Page } from '@/payload-types'

type HeroMediaProps = {
  media?: Page['hero']['media']
  className?: string
  priority?: boolean
}

function isPopulatedMedia(media: HeroMediaProps['media']): media is Media {
  return Boolean(media) && typeof media === 'object'
}

export function HeroMedia({ media, className, priority }: HeroMediaProps) {
  if (!isPopulatedMedia(media) || !media.url) return null

  return (
    <Image
      src={media.url}
      alt={media.alt ?? ''}
      fill
      priority={priority}
      sizes="100vw"
      className={cn('object-cover', className)}
    />
  )
}
