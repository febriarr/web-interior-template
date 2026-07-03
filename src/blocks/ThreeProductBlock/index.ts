import type { Block } from 'payload'

export const ThreeGridProductsBlock: Block = {
  slug: 'threeGridProducts',
  interfaceName: 'ThreeGridProductsBlock',
  labels: {
    singular: 'Three Grid Products',
    plural: 'Three Grid Products',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'position',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Large Left',
              value: 'largeLeft',
            },
            {
              label: 'Top Right',
              value: 'topRight',
            },
            {
              label: 'Bottom Right',
              value: 'bottomRight',
            },
          ],
        },
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
      ],
    },
  ],
}
