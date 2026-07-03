import { adminOnly } from '@/access/adminOnly'
import { adminOrPublishedStatus } from '@/access/adminOrPublishedStatus'
import { formatSlug } from '@/utilities/generateSlug'
import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    read: adminOrPublishedStatus,
    create: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    beforeValidate: [
      ({ data, req }) => {
        if (data?.title && !data?.slug) {
          data.slug = formatSlug(data.title) // ini logic agar slug auto generate
        }

        if (data?._status === 'published' && !data?.publishedAt) {
          data.publishedAt = new Date().toISOString() // dan generate publishedAt saat publish di trigger
        }

        return data
      },
    ],
  },
  fields: [
    {
      name: 'name',
      label: 'Product Name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      label: 'Category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'auto generated slug from product name.',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'price',
      label: 'Price',
      type: 'number',
      required: true,
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      label: 'Gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
