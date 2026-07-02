import { ButtonLink, PayloadButton } from './button.type'

export function mapButton(button: PayloadButton): ButtonLink {
  return {
    label: button.label,
    href: button.linkType === 'internal' ? button.internalPath! : button.externalUrl!,
    variant: button.variant ?? 'default',
    target: button.newTab ? '_blank' : '_self',
  }
}
