import { heroField } from '@/fields/hero/hero.field'
import { sectionField } from '@/fields/section/section.field'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',

  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },

    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [heroField()],
        },
        {
          label: 'Content',
          fields: [sectionField()],
        },
        {
          label: 'SEO',
          fields: [
            // seoField()
          ],
        },
      ],
    },
  ],
}
