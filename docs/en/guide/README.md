<div align="center">
  <img src="https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/New%20LOGO-150.png" alt="">
  <h1>PicGo</h1>
  <blockquote>New Experience of Image Upload and Management</blockquote>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-green.svg?style=flat-square" alt="">
  </a>
  <a href="https://travis-ci.org/Molunerfinn/PicGo/builds">
    <img src="https://img.shields.io/travis/Molunerfinn/PicGo.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/Molunerfinn/PicGo/releases">
    <img src="https://img.shields.io/github/downloads/Molunerfinn/PicGo/total.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/Molunerfinn/PicGo/releases/latest">
    <img src="https://img.shields.io/github/release/Molunerfinn/PicGo.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/PicGo/bump-version">
    <img src="https://img.shields.io/badge/picgo-convention-blue.svg?style=flat-square" alt="">
  </a>
  <a href="https://gitter.im/picgo-all/PicGo?utm_source=share-link&utm_medium=link&utm_campaign=share-link">
    <img src="https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-66ae93.svg?style=flat-square" alt="">
  </a>
</div>

## Instruction

**PicGo automatically copies links of images to your clipboard after uploading them. You can choose from five different links.**

Currently, PicGo supports the following Img:

- `Qiniu Img` v1.0
- `Tencent Cloud COS v4\v5` v1.1 & v1.5.0
- `Upyun` v1.2.0
- `GitHub` v1.5.0
- `SM.MS V2` v2.3.0-beta.0
- `Alibaba OSS` v1.6.0
- `Imgur` v1.6.0

**PicGo itself do not plan to add other default Img support. You can develop your own third-party Img plugin.**

Support MacOS, Windows 64-bit (>= v1.3.1), Linux (>= v1.6.0).

You can use the shortcut `command+shift+p` (MacOS) or `control+shift+p` (Windows\Linux) to upload the first image in your clipboard, and define the customized shortcuts of PicGo (view [Configuration](/zh/guide/config.html) for more information).

View [Projects](https://github.com/Molunerfinn/PicGo/projects) to see the progress of PicGo development, which will be updated synchronously.

**If you are using PicGo for the first time, please refer to [Quickstart](/zh/guide/getting-started.html) to see how to use it. You can also refer to [FAQ](https://github.com/Molunerfinn/PicGo/blob/dev/FAQ.md) and closed [issues](https://github.com/Molunerfinn/PicGo/issues?q=is%3Aissue+is%3Aclosed) when you meet a problem.**

## Installation

You can download the latest `dmg` (MacOS), `exe` (Windows) or `AppImage` (Linux).

Click [here](https://github.com/Molunerfinn/PicGo/releases) to down PicGo.

**If you are using Arch Linux, please install using `aurman -S picgo-appimage` (contributed by @houbaron).**

## Snapshots

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/picgo-2.0.gif)

![picgo-menubar](https://user-images.githubusercontent.com/12621342/34242310-b5056510-e655-11e7-8568-60ffd4f71910.gif)

## Development

> For Mac and Windows only. Linux platform is not tested yet.

If you want to learn, develop, modify, or build your customized PicGo, please follow these instructions:

> If you want to learn about the development of the Electron-vue, you can check out the our tutorial series -- [Practice of Electron-vue development](https://molunerfinn.com/tags/Electron-vue/).

1. You need to have a node, git environment. Knowledge of npm is required.
2. `git clone https://github.com/Molunerfinn/PicGo.git` and `cd PicGo`.
3. `npm install` the dependencies.
4. Need Xcode (MacOS) or VS (Windows).

### Devement mode

Use command `npm run dev` to enter the development mode. Development mode has the hot overload feature. Note that the development pattern is unstable and there can be process crashes. In this case, you should:

```bash
ctrl+c       # exit development mode
npm run dev  # re-enter the development mode
```

### Production mode

If you want to build your customized PicGo, use command `npm run build`. Once your build is successful, some corresponding files will appear in the `build` directory.

**Note:** If your network environment is poor, you may have the `electron-builder` failure when downloading the `electron` binary. If it really happens, you are recommended to specify the source to domestic before `npm run build`.

```bash
export ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
npm run build
```

You do not need to do it again if you have done it at the first time. The binary files will exist in the `~/.electron/` directory. If you want to rebuild the `electron`, just `rm -r ~/.electron/` and follow the steps above to make `electron-builder` install new `electron` binary files.

## Related Work

- [vs-picgo](https://github.com/Spades-S/vs-picgo): PicGo for VSCode.

## Sponsor

If you like PicGo and it really helps and want to sponsor us a cup of coffee, you can use:

Alipay: 

![](https://user-images.githubusercontent.com/12621342/34188165-e7cdf372-e56f-11e7-8732-1338c88b9bb7.jpg)

WeChat pay:

![](https://user-images.githubusercontent.com/12621342/34188201-212cda84-e570-11e7-9b7a-abb298699d85.jpg)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 Molunerfinn
