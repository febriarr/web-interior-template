import type { Field } from 'payload'

import { buttonField } from '../button'

export const heroField = (): Field => ({
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      type: 'collapsible',
      label: 'Content',
      fields: [
        {
          name: 'title',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Use a new line (Enter) to create multiple lines.',
          },
        },
        {
          name: 'subtitle',
          type: 'textarea',
        },
      ],
    },

    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },

    {
      type: 'collapsible',
      label: 'Actions',
      fields: [
        {
          name: 'buttons',
          type: 'array',
          maxRows: 2,
          labels: {
            singular: 'Button',
            plural: 'Buttons',
          },
          fields: [buttonField()],
        },
      ],
    },
  ],
})
