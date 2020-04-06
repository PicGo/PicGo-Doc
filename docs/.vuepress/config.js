module.exports = {
  title: 'PicGo',
  head: [
    [
      'link', {
        rel: 'icon', href: 'https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/New%20LOGO-150.png'
      }
    ]
  ],
  base: '/PicGo-Doc/',
  locales: {
    '/zh/': {
      lang: '简体中文',
      title: 'PicGo',
      description: '图片上传、管理新体验'
    },
    '/en/': {
      lang: 'English',
      title: 'PicGo',
      description: 'New Experience of Image Uploading and Management'
    }
  },
  description: '图片上传、管理新体验',
  themeConfig: {
    repo: 'Molunerfinn/PicGo',
    docsRepo: 'PicGo/PicGo-Doc',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/zh/': {
        sidebar: {
          '/zh/guide/': getGuideSidebar('指南'),
        },
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '高级技巧',
            link: '/zh/guide/advance'
          }
        ]
      },
      '/en/': {
        sidebar: {
          '/en/guide/': getGuideSidebar('Guidelines'),
        },
        nav: [
          {
            text: 'Guidelines',
            link: '/en/guide/'
          },
          {
            text: 'Advance Usage',
            link: '/en/guide/advance'
          }
        ]
      },
    }
  }
}

function getGuideSidebar (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'config',
        'advance'
      ]
    }
  ]
}