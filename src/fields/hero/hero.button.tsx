import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Page } from '@/payload-types'

type HeroButton = NonNullable<Page['hero']['buttons']>[number]

type CmsButtonProps = {
  button: HeroButton
}

function CmsButton({ button }: CmsButtonProps) {
  const { label, variant, linkType, internalPath, externalUrl, newTab } = button

  const isExternal = linkType === 'external'

  if (isExternal) {
    return (
      <Button asChild variant={variant ?? 'default'}>
        <a
          href={externalUrl ?? '#'}
          target={newTab ? '_blank' : undefined}
          rel={newTab ? 'noopener noreferrer' : undefined}
        >
          {label}
        </a>
      </Button>
    )
  }

  return (
    <Button asChild variant={variant ?? 'default'}>
      <Link href={internalPath ?? '/'} target={newTab ? '_blank' : undefined}>
        {label}
      </Link>
    </Button>
  )
}

type CmsButtonsProps = {
  buttons?: Page['hero']['buttons']
  className?: string
}

export function CmsButtons({ buttons, className }: CmsButtonsProps) {
  if (!buttons || buttons.length === 0) return null

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {buttons.map((button, index) => (
        <CmsButton key={button.id ?? index} button={button} />
      ))}
    </div>
  )
}
