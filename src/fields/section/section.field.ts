import type { Field, GroupField } from 'payload'
import { buttonField } from '../button'
import { ThreeGridProductsBlock } from '@/blocks/ThreeProductBlock'

export const sectionField = (): Field => ({
  name: 'content',
  type: 'array',

  labels: {
    singular: 'Section',
    plural: 'Sections',
  },

  fields: [
    {
      type: 'collapsible',

      label: 'Header',

      fields: [
        {
          name: 'title',
          type: 'text',
        },

        {
          name: 'subtitle',
          type: 'textarea',
        },

        {
          name: 'orientation',
          type: 'radio',
          defaultValue: 'vertical',

          options: [
            {
              label: 'Vertical',
              value: 'vertical',
            },
            {
              label: 'Horizontal',
              value: 'horizontal',
            },
            {
              label: 'Centered',
              value: 'centered',
            },
          ],
        },

        {
          name: 'action',
          label: 'Action',

          type: 'group',

          fields: (buttonField() as GroupField).fields,
        },
      ],
    },

    {
      name: 'blocks',

      type: 'blocks',

      required: true,

      blocks: [
        ThreeGridProductsBlock,

        // nanti
        // GalleryBlock
        // FAQBlock
        // TestimonialsBlock
        // CTA
      ],
    },
  ],
})
