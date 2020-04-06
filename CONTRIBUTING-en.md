# CONTRIBUTING

Thank you for contributing to PicGo-Doc\~ Before submitting your contribution, be sure to check out the guide below.

## Requirements

You need to have [Node.js](https://nodejs.org/en/) installed like `brew install node` (MacOS).

[yarn](https://classic.yarnpkg.com/en/) is also required, which is a dependency manager for [Node.js](https://nodejs.org/en/).

- Windows: install the `.msi` package [here](https://classic.yarnpkg.com/en/docs/install#windows-stable).
- MacOS and Linux: `curl -o- -L https://yarnpkg.com/install.sh | bash`.
- Use `yarn` to install dependencies in the project root path. We do not support to use `npm` to install dependencies, as this repo locks the dependencies' versions using `yarn.lock`.

## Pull Rquest

You are recommended to create your branch in your forked repo.

1. If your branch is to fix errors, you should use prefix `fix-`, e.g. `fix-guide`. If your branch is to add new features, you should use prefix `feature-`, e.g. `feature-en-lang`.
2. Use  `yarn cz` trigger a commit normalization operation.
3. When the description is submitted, the format of the commit message is automatically checked to see if it meets the requirements. If the requirements are not met, an error will be reported. At this time, the reason for the error reporting needs to be checked, and then the modification will be submitted through `yarn cz` again until it is approved.
4. `git push origin [your branch]` to push your branch to remote.
5. Pull request your branch.


## Translation

If you want to contribute to PicGo-Doc i18n and add a new language for PicGo:

1. Create a folder in `docs/` directory such as `docs/en`, and struct files like `docs/zh`.
2. Start translating.
3. Note that you should also change the inner link, e.g. `/zh/guide/config` should be changed to `/en/guide/config`.
4. Update `themeConfig.locales`  in `docs/.vuepress/config.js`, update the sidebar and navigation of the document accordingly.

Add translation sidebar and top navigation bar correspondingly:

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
        text: 'Advance Usage',
        link: '/en/guide/advance'
      }
    ]
  },
}
```

If you want to preview your translation:

1. Run `yarn dev` to enable the document local development mode build, then you are able to find your pages at `http://localhost:8080/PicGo-Doc/`.
2. Use `docs/en` as an example, you can find your home page at `http://localhost:8080/PicGo-Doc/en/`, and find other pages at `http://localhost:8080/PicGo-Doc/en/guide`, etc.
