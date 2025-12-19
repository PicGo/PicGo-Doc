import type { DefaultTheme } from 'vitepress'
import { getNestedSidebarItems } from './utils/sidebar'

const EDIT_LINK_PATTERN = 'https://github.com/PicGo/PicGo-Doc/edit/master/docs/:path'

const commonNavList = [
  {
    text: 'Download', link: 'https://github.com/Molunerfinn/PicGo/releases',
  },
  {
    text: 'PicGo-Core', link: 'https://github.com/PicGo/PicGo-Core',
  },
  {
    text: 'Awesome-PicGo', link: 'https://github.com/PicGo/Awesome-PicGo'
  }
]

// --- Chinese Config (Now at /zh/) ---

const zhNav = [
  { text: '高级技巧', link: '/zh/guide/advance' },
  ...commonNavList
]

const zhSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '指南',
    items: [
      { text: '应用介绍', link: '/zh/guide/', items: getNestedSidebarItems('/zh/guide/'), collapsed: true },
      { text: '快速开始', link: '/zh/guide/getting-started', items: getNestedSidebarItems('/zh/guide/getting-started'), collapsed: true },
      { text: '配置手册', link: '/zh/guide/config', items: getNestedSidebarItems('/zh/guide/config'), collapsed: true },
      { text: '高级技巧', link: '/zh/guide/advance', items: getNestedSidebarItems('/zh/guide/advance'), collapsed: true }
    ]
  }
]

// --- English Config (Now at Root /) ---

const enNav = [
  { text: 'Advance Usage', link: '/guide/advance' },
  ...commonNavList
]

const enSidebar = [
  {
    text: 'Guidelines',
    items: [
      { text: 'App Overview', link: '/guide/', items: getNestedSidebarItems('/guide/'), collapsed: true },
      { text: 'Getting Started', link: '/guide/getting-started', items: getNestedSidebarItems('/guide/getting-started'), collapsed: true },
      { text: 'Configuration Manual', link: '/guide/config', items: getNestedSidebarItems('/guide/config'), collapsed: true },
      { text: 'Advanced Usage', link: '/guide/advance', items: getNestedSidebarItems('/guide/advance'), collapsed: true }
    ]
  }
]

const zhThemeConfig = {
  nav: zhNav,
  sidebar: {
    '/zh/guide/': zhSidebar
  },
  editLink: {
    pattern: EDIT_LINK_PATTERN,
    text: '在 GitHub 上编辑此页'
  },
  outline: {
    label: '本页目录',
    level: 'deep'
  }
} as const

const enThemeConfig = {
  nav: enNav,
  sidebar: {
    '/guide/': enSidebar
  },
  editLink: {
    pattern: EDIT_LINK_PATTERN,
    text: 'Edit this page on GitHub'
  },
  outline: {
    label: 'On this page',
    level: 'deep'
  }
} as const

export default {
  title: 'PicGo',
  description: 'New Experience of Pictures Uploading and Management',
  base: '/PicGo-Doc/',
  head: [
    ['meta', { name: 'google-site-verification', content: 'I9agtjzUmnyUxzdpci2kQuXzlOgw7qBLqR5w6PgUnjQ' }],
    [
      'link',
      {
        rel: 'icon',
        href: 'https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/New%20LOGO-150.png'
      }
    ],
  ],
  sitemap: {
    hostname: 'https://picgo.github.io/PicGo-Doc/'
  },
  themeConfig: {
    logo: 'https://pics.molunerfinn.com/doc/picgo-logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Molunerfinn/PicGo' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                displayDetails: 'Display detailed results',
                resetButtonTitle: 'Clear search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results for this query',
                footer: {
                  selectText: 'select',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: 'navigate',
                  navigateUpKeyAriaLabel: 'Arrow up',
                  navigateDownKeyAriaLabel: 'Arrow down',
                  closeText: 'close',
                  closeKeyAriaLabel: 'Escape'
                }
              }
            }
          },
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'PicGo',
      description: 'New Experience of Pictures Uploading and Management',
      link: '/',
      themeConfig: enThemeConfig
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'PicGo',
      description: '图片上传、管理新体验',
      link: '/zh/',
      themeConfig: zhThemeConfig
    }
  }
}
