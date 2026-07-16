import { createContentLoader } from 'vitepress'

interface Post {
  url: string
  frontmatter: {
    title: string
    description?: string
    date?: string
    tags?: string[]
  }
}

declare const data: Post[]
export { data }

export default createContentLoader<Post[]>('blog/*.md', {
  include: ['title', 'description', 'date', 'tags'],
  transform(raw) {
    return raw
      .filter(post => post.url !== '/blog/')
      .filter(post => post.frontmatter.title)
      .sort((a, b) => String(b.frontmatter.date).localeCompare(String(a.frontmatter.date)))
  },
})
