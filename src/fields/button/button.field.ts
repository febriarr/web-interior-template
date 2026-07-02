import type { Field } from 'payload'

import { BUTTON_VARIANTS_OPTIONS, INTERNAL_ROUTES_OPTIONS } from './button.constant'

export const buttonField = (): Field => ({
  type: 'group',

  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },

    {
      name: 'variant',
      type: 'select',
      defaultValue: 'default',
      options: BUTTON_VARIANTS_OPTIONS,
    },

    {
      name: 'linkType',
      type: 'radio',
      defaultValue: 'internal',
      options: [
        {
          label: 'Internal',
          value: 'internal',
        },
        {
          label: 'External',
          value: 'external',
        },
      ],
    },

    {
      name: 'internalPath',
      type: 'select',
      options: INTERNAL_ROUTES_OPTIONS,
      admin: {
        condition: (_, siblingData) => siblingData.linkType === 'internal',
      },
    },

    {
      name: 'externalUrl',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData.linkType === 'external',
      },
    },

    {
      name: 'newTab',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        condition: (_, siblingData) => siblingData.linkType === 'external',
      },
    },
  ],
})
