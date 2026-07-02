import type { Field } from 'payload'

import { buttonField } from '../button'

export const heroField = (): Field => ({
  name: 'hero',
  type: 'group',

  fields: [
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
      type: 'collapsible',
      label: 'Background',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'imageAlt',
          type: 'text',
          required: true,
          admin: {
            description: 'Describe the image for accessibility and SEO.',
          },
        },
      ],
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
