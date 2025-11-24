import fs from 'fs'
import path from 'path'
import type { DefaultTheme } from 'vitepress'

const ROOT_DIR = path.resolve(__dirname, '../..')
const MARKDOWN_FENCE_RE = /^(~~~|```)/
const HEADING_RE = /^(#{2,3})\s+(.+)$/
const CUSTOM_ANCHOR_RE = /\s*{#([^}]+)}\s*$/

const sanitizeHeadingText = (raw: string): { text: string; slugHint?: string } => {
  const anchorMatch = raw.match(CUSTOM_ANCHOR_RE)
  const slugHint = anchorMatch?.[1]
  const withoutAnchor = anchorMatch ? raw.replace(CUSTOM_ANCHOR_RE, '') : raw

  const text = withoutAnchor
    .replace(/!\[[^\]]*]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/~~([^~]+)~~/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim()

  return { text, slugHint }
}

const slugifyHeading = (text: string, slugHint?: string): string => {
  if (slugHint?.trim()) {
    return slugHint.trim()
  }

  const normalized = text
    .trim()
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}\u4e00-\u9fff\-\s]/gu, '')
    .replace(/\s+/g, '-')

  return normalized || encodeURIComponent(text.trim()).replace(/%/g, '').toLowerCase()
}

const buildMarkdownFilePath = (pageLink: string): string => {
  const normalized = pageLink.replace(/^\/+/, '')
  if (!normalized) {
    return path.join(ROOT_DIR, 'index.md')
  }
  const isEndWithSlash = normalized.endsWith('/')
  return isEndWithSlash
    ? path.join(ROOT_DIR, normalized, 'index.md')
    : path.join(ROOT_DIR, `${normalized}.md`)
}

const resolvePageLink = (pageLink: string): string =>
  pageLink.startsWith('/') ? pageLink : `/${pageLink}`

export const getNestedSidebarItems = (pageLink: string): DefaultTheme.SidebarItem[] => {
  const markdownFilePath = buildMarkdownFilePath(pageLink)

  if (!fs.existsSync(markdownFilePath)) {
    console.warn(`[getNestedSidebarItems] markdown file not found: ${markdownFilePath}`)
    return []
  }

  const fileContent = fs.readFileSync(markdownFilePath, 'utf-8')
  const lines = fileContent.split(/\r?\n/)

  const items: DefaultTheme.SidebarItem[] = []
  let currentGroup: DefaultTheme.SidebarItem | null = null
  let insideFence = false

  for (const line of lines) {
    const trimmed = line.trim()

    if (MARKDOWN_FENCE_RE.test(trimmed)) {
      insideFence = !insideFence
      continue
    }

    if (insideFence) continue

    const headingMatch = trimmed.match(HEADING_RE)
    if (!headingMatch) continue

    const level = headingMatch[1].length
    if (level !== 2 && level !== 3) continue

    const { text, slugHint } = sanitizeHeadingText(headingMatch[2])
    if (!text) continue

    const slug = slugifyHeading(text, slugHint)
    const link = `${resolvePageLink(pageLink)}#${slug}`

    if (level === 2) {
      const groupItem: DefaultTheme.SidebarItem = {
        text,
        link,
        collapsed: true
      }
      currentGroup = groupItem
      items.push(groupItem)
      continue
    }

    if (!currentGroup) {
      currentGroup = {
        text,
        link,
        collapsed: true,
        items: []
      }
      items.push(currentGroup)
    }

    if (!currentGroup.items) {
      currentGroup.items = []
    }

    currentGroup.items.push({ text, link })
  }

  return items.map(item => {
    if (item.items && item.items.length === 0) {
      const { items: _empty, ...rest } = item
      return rest
    }
    return item
  })
}
