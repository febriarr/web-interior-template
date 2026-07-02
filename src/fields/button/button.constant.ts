import { Option } from 'payload'

export const BUTTON_VARIANTS = [
  {
    label: 'Default',
    value: 'default',
  },
  {
    label: 'Secondary',
    value: 'secondary',
  },
  {
    label: 'Outline',
    value: 'outline',
  },
  {
    label: 'Ghost',
    value: 'ghost',
  },
  {
    label: 'Destructive',
    value: 'destructive',
  },
] as const

export const BUTTON_VARIANTS_OPTIONS: Option[] = [...BUTTON_VARIANTS]

export const INTERNAL_ROUTES = [
  {
    label: 'Home',
    value: '/',
  },
  {
    label: 'About',
    value: '/about',
  },
  {
    label: 'Services',
    value: '/services',
  },
  {
    label: 'Products',
    value: '/products',
  },
  {
    label: 'Contact',
    value: '/contact',
  },
] as const

export const INTERNAL_ROUTES_OPTIONS: Option[] = [...INTERNAL_ROUTES]
