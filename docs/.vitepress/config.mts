import { defineConfig } from 'vitepress'

const EDIT_LINK_PATTERN = 'https://github.com/PicGo/PicGo-Doc/edit/master/docs/:path'

const zhNav = [
  { text: '指南', link: '/guide/' },
  { text: '高级技巧', link: '/guide/advance' }
]

const zhSidebar = [
  {
    text: '指南',
    items: [
      { text: '介绍', link: '/guide/' },
      { text: '快速开始', link: '/guide/getting-started' },
      { text: '配置', link: '/guide/config' },
      { text: '高级技巧', link: '/guide/advance' }
    ]
  }
]

const enNav = [
  { text: 'Guidelines', link: '/en/guide/' },
  { text: 'Advance Usage', link: '/en/guide/advance' }
]

const enSidebar = [
  {
    text: 'Guidelines',
    items: [
      { text: 'Overview', link: '/en/guide/' },
      { text: 'Getting Started', link: '/en/guide/getting-started' },
      { text: 'Configuration', link: '/en/guide/config' },
      { text: 'Advanced Usage', link: '/en/guide/advance' }
    ]
  }
]

const zhThemeConfig = {
  nav: zhNav,
  sidebar: {
    '/guide/': zhSidebar
  },
  editLink: {
    pattern: EDIT_LINK_PATTERN,
    text: '在 GitHub 上编辑此页'
  }
}

const enThemeConfig = {
  nav: enNav,
  sidebar: {
    '/en/guide/': enSidebar
  },
  editLink: {
    pattern: EDIT_LINK_PATTERN,
    text: 'Edit this page on GitHub'
  }
}

export default defineConfig({
  title: 'PicGo',
  description: '图片上传、管理新体验',
  base: '/PicGo-Doc/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/New%20LOGO-150.png'
      }
    ]
  ],
  themeConfig: {
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
          },
          en: {
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
          }
        }
      }
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'PicGo',
      description: '图片上传、管理新体验',
      link: '/',
      themeConfig: zhThemeConfig
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'PicGo',
      description: 'New Experience of Pictures Uploading and Management',
      link: '/en/',
      themeConfig: enThemeConfig
    }
  }
})
