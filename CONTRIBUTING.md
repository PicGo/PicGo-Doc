# PicGo-Doc 贡献指南

感谢你想为 PicGo-Doc 做贡献！在提交你的贡献之前，请注意查看如下的指导手册~

## 前置工作

你需要安装 [Node.js](https://nodejs.org/en/)。如果你是 macOS 用户，还可以使用 `brew install node`。

其次你需要安装 [yarn](https://classic.yarnpkg.com/en/)，这是一个 Node.js 的依赖管理器。

- Windows安装可以访问[网站](https://classic.yarnpkg.com/en/docs/install#windows-stable)，下载 `.msi` 格式安装包。
- macOS 和 Linux 用户请使用脚本安装：`curl -o- -L https://yarnpkg.com/install.sh | bash`
- 以上二者都安装结束之后，在项目根目录里请用控制台输入 `yarn`，用于安装依赖。禁用 `npm` 安装依赖，因为本仓库用 `yarn.lock` 来对依赖进行了锁版本的操作。

Tips: 国内使用 yarn 安装依赖可能会出现网络错误，可尝试使用淘宝镜像或升级 yarn 的版本，参考[yarn官方文档](https://yarnpkg.com/getting-started/install)

## 分支与提交相关

当你要对本仓库做贡献，你一定会 fork 它！此后的分支和提交相关的步骤可以按如下指南进行：

1. 在本地建立自己的新分支。如果是对文档内容错误的修复，请以 `fix-` 作为分支名开头。例如 `fix-guide`。如果是文档内容更新，请以 `feature-` 作为分支名开头。例如 `feature-en-lang`。
2. 修改后请通过 `yarn cz` 的命令来触发规范化的提交操作。对于 `fix-` 分支请选择 `Fix`而后提交修改说明。对于 `feature-` 分支请选择 `Feature` 而后提交修改说明。
3. 提交修改说明后会自动校验commit信息格式是否符合要求，如果不符合要求将会报错，此时需要查看报错原因，然后再重新通过 `yarn cz` 提交修改直到通过为止。
4. `git push origin [你的分支名]`，将该修改提交到远端。
5. 发起你的 Pull Request 吧！


## 翻译相关

如果你想为 PicGo-Doc 新增一种语言的翻译，请按如下的步骤来操作：

1. 在 `docs/` 下建立对应语言简称的文件夹，如 `docs/en`。
2. 按照 `docs/zh` 目录下的文件结构在 `docs/xx` 下做一份拷贝。
3. 然后就可以开始进行翻译了！
4. 注意文档里有一些内链，你也需要对应的进行修改。例如 `/zh/guide/config` 需要对应转为 `/xx/guide/config` （`xx` 是你所翻译的语言简称的文件夹名，如 `en`）。
5. 更新 `docs/.vuepress/config.js` 里的 `themeConfig.locales` 一项，把文档的侧边栏和导航栏也做对应的更新。例如：

原始的配置为：

```js
locales: {
  // ...
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
  }
}
```

增加你所翻译的文档的侧边栏的顶部导航栏对应的文本与翻译：

```js
locales: {
  // ...
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
        text: 'Advance Skills',
        link: '/en/guide/advance'
      }
    ]
  },
}
```

对所有涉及到的 markdown 文件都翻译结束之后，你就可以按照上一节的提交相关的内容来进行提交了。

如果你想更进一步在本地查看翻译效果，可以按照如下步骤进行：

1. 在根目录下运行 `yarn dev` 来开启文档本地开发模式构建，然后你可以在 `http://localhost:8080/PicGo-Doc/` 里看到首页。
2. 本文以翻译的文件夹为 `docs/en` 为例，你可以在 `http://localhost:8080/PicGo-Doc/en/` 看到你翻译的文档的首页，以及 `http://localhost:8080/PicGo-Doc/en/guide` 等页面来查看你翻译的文档的具体效果。
