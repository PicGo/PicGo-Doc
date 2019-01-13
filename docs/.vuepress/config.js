module.exports = {
  title: 'PicGo',
  head: [
    [
      'link', {
        rel: 'icon', href: 'https://user-images.githubusercontent.com/12621342/33876119-85a5148e-df5f-11e7-8843-46224e595d52.png'
      }
    ]
  ],
  base: '/PicGo-Doc/',
  locales: {
    '/zh/': {
      lang: 'zh-CN',
      title: 'PicGo',
      description: '图片上传、管理新体验'
    }
  },
  description: '图片上传、管理新体验',
  themeConfig: {
    repo: 'Molunerfinn/PicGo',
    docsRepo: 'PicGo/PicGo-Doc',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        sidebar: {
          '/zh/guide/': getGuideSidebar('指南'),
        },
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          }
        ]
      },
      '/zh/': {
        sidebar: {
          '/zh/guide/': getGuideSidebar('指南'),
        },
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          }
        ]
      }
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
        'config'
      ]
    }
  ]
}