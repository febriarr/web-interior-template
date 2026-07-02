import { BUTTON_VARIANTS } from './button.constant'

export interface ButtonLink {
  label: string
  href: string
  variant: (typeof BUTTON_VARIANTS)[number]['value']
  target: '_self' | '_blank'
}

export interface PayloadButton {
  label: string
  variant?: (typeof BUTTON_VARIANTS)[number]['value']
  linkType?: 'internal' | 'external'
  internalPath?: string
  externalUrl?: string
  newTab: boolean
}
