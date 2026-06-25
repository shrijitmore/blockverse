import { useEffect } from 'react'

const SITE_URL = 'https://blockversetechnologies.ai'
const DEFAULT_IMAGE = `${SITE_URL}/assets/logo.png`

type SeoOptions = {
  title: string
  description: string
  path: string
  image?: string
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** Sets per-route title, description, canonical link, and Open Graph / Twitter tags. */
export function useSeo({ title, description, path, image = DEFAULT_IMAGE }: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    document.title = title

    setMeta('name', 'description', description)
    setLink('canonical', url)

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'Blockverse Technologies')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)
  }, [title, description, path, image])
}
