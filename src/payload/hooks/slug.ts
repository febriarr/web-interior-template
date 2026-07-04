import { formatSlug } from '@/utilities/generateSlug'
import type { CollectionBeforeValidateHook } from 'payload'

type SlugOptions = {
  source: string
  target?: string
}

/**
 * Membuat slug secara otomatis berdasarkan field tertentu.
 *
 * @param source Field yang dijadikan sumber slug.
 * @param target Field tujuan yang akan diisi hasil slug.
 */
export const withAutoSlug = ({
  source,
  target = 'slug',
}: SlugOptions): CollectionBeforeValidateHook => {
  return ({ data }) => {
    if (!data) return data

    const value = data[source]

    if (typeof value === 'string' && !data[target]) {
      data[target] = formatSlug(value)
    }

    return data
  }
}
