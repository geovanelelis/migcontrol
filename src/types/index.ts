export interface ProductHighlight {
  icon: string
  title: string
  description: string
}

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  slug: string
  name: string
  shortName: string
  description: string
  longDescription: string
  image: string
  icon: string
  category: string[]
  tags: string[]
  features: string[]
  highlights: ProductHighlight[]
  specs: ProductSpec[]
  link: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  contentHtml: string
  image: string
  author: string
  authorAvatar: string
  date: string
  category: string
  readTime: string
  tags: string[]
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Differential {
  icon: string
  title: string
  description: string
}

export interface HeroSlide {
  image: string
  subtitle: string
  title: string
  description: string
  cta: {
    label: string
    href: string
  }
}
