import type { CollectionBeforeValidateHook } from 'payload'

export const withPublishedAt: CollectionBeforeValidateHook = ({ data }) => {
  if (data?._status === 'published' && !data?.publishedAt) {
    data.publishedAt = new Date().toISOString()
  }

  return data
}
