---
sidebarDepth: 3
---
# 配置手册

## 基本操作预览

![2017-12-09 00 13 05-min](https://user-images.githubusercontent.com/12621342/34242857-d177930a-e658-11e7-9688-7405851dd5e5.gif)

## 上传区

上传区支持拖拽上传或者点击区域打开文件夹上传

## 相册区

支持查看你上传成功的所有图片。点击图片可以预览。点击图片下面的图标可以复制链接或者删除图片（只是删除本地数据，使其不在相册区里出现）

### 编辑相册的图片信息（v1.5)

有些时候可能上传的图片的url事后需要更改，比如修改http到https，比如加上一些操作后缀（例：七牛图床支持的`?imgslim`）等等。PicGo本次的更新也让你能够更方便地管理你的图片库。

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/picgo_edit_info.gif)

### 选择复制的链接格式(v2.0)

之前的版本只能在上传区选择复制图片URL的链接格式，这样在相册区就不能很方便地选择复制的链接格式。2.0版本之后改进了这个用户体验，可以在相册区直接选择复制的连接格式了：

![](https://user-images.githubusercontent.com/12621342/50515502-17d07400-0ae0-11e9-80b9-c38f25b64922.png)

## 图床区

### 微博图床

![image](https://user-images.githubusercontent.com/12621342/34974486-482c0caa-fac8-11e7-963b-8e0ee5418828.png)

上传的图片不会出现在你的微博相册里。可以选择链接的图片质量，这样在复制到剪贴板里的图片将会对应修改成对应的链接地址。设置你的微博图床可以选择两种模式：

1. 只需填写你的微博用户名密码即可。**缺点**：上传速度会慢（尤其windows平台），因为要经过很多层验证。并且如果出现需要验证码的情况无法解决。
2. 只需Cookie上传（PicGo v1.3.2及以上版本支持）。切换成cookie模式。然后先登录[微博](https://weibo.com)（必须先登录），之后打开[minipublish页面](https://weibo.com/minipublish)，如果你是mac用户，使用`command+alt+i`，如果你是windows用户，使用`F12`打开控制台，选择`Network`标签栏。然后刷新一下页面，找到Network里的`minipublish`一项，再找到`minipublish`右侧的`Cookie`一项，把`Cookie`冒号后的值全部复制（不要把`Cookie:`这个也复制了）然后填入`PicGo`里的Cookie一栏。这样就行了。

![cookie](https://user-images.githubusercontent.com/12621342/34974243-fa5d2bf4-fac6-11e7-9869-a6a6e126cd15.png)

### 七牛图床

![image](https://user-images.githubusercontent.com/12621342/34243072-191cc4ae-e65a-11e7-99f6-ebe6b7dcaf86.png)

对应的密钥信息需要到七牛自己的控制台里找到。其中需要注意的是，自己的存储空间的区域需要确定：

![image](https://user-images.githubusercontent.com/12621342/34243146-69af085a-e65a-11e7-965c-2a3d15856480.png)

在配置文件里，存储区域对应的键是`area`，值是下图所示（如果你是用PicGo-Core或者其他非electron版本的PicGo请注意此项）：

![image](https://user-images.githubusercontent.com/12621342/50533009-e5189100-0b5c-11e9-9812-438576990828.png)

在配置文件里，存储空间需要

设定上传地址是指七牛云自动分配给你的网址，或者是你自己绑定的域名（**注意要加`http://`或者`https://`**）：

![image](https://user-images.githubusercontent.com/12621342/34245183-c38d9766-e663-11e7-964e-2d7a9ab9e9e9.png)

网址后缀通常是你用到了七牛的图片处理工具的时候会用到的一些处理参数。

### 腾讯云COS

> 从PicGo v1.5版本开始，支持COSv4和v5版本。

#### V4版本说明

v4版本是这个：

![image](https://user-images.githubusercontent.com/12621342/35483306-5e7ed570-047b-11e8-95a9-d56a3b4d2ba9.png)

需要登录腾讯云控制台。打开[密钥管理](https://console.qcloud.com/cos4/secret)

![image](https://user-images.githubusercontent.com/12621342/34243294-082c97cc-e65b-11e7-9412-dbc86433a91d.png)

按照对应的提示找到自己的`APPID`、`SecretId`、`SecretKey`。

存储的空间名是你的bucket名字。

存储的区域需要额外注意，请到bucket列表里打开需要上传的bucket空间，然后如图可以看到对应的区域以及区域代码，比如我的是`tj`：

![image](https://user-images.githubusercontent.com/12621342/34243443-befa715e-e65b-11e7-8404-aa5b8938a82b.png)

对应的区域代码如下：

![image](https://user-images.githubusercontent.com/12621342/34243476-edcc7798-e65b-11e7-8d59-8714cd0a59aa.png)

如果你想把图片上传到你的bucket空间的某个文件夹下，则需要在PicGo里的`指定存储路径`里加上你的文件夹路径。比如`temp/`（注意一定要加`/`）

#### V5版本说明

**1.** 获取你的APPID、SecretId和SecretKey

访问：https://console.cloud.tencent.com/cam/capi

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/get_key_id_secret.png)

**2.** 获取bucket名以及存储区域代号

访问：https://console.cloud.tencent.com/cos5/bucket

创建一个存储桶。然后找到你的存储桶名和存储区域代号：

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/get_bucket_area.png)

v5版本的存储桶名称格式是`bucket-appId`，类似于`xxxx-12312313`。存储区域代码和v4版本的也有所区别，v5版本的如我的是`ap-beijing`，别复制错了。

**3.** 选择v5版本并点击确定

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/choose_v5.png)

然后记得点击`设为默认图床`，这样上传才会默认走的是腾讯云COS。


### 又拍云

![image](https://user-images.githubusercontent.com/12621342/34319574-a6e141d0-e820-11e7-9b20-0ec0eb9b36af.png)

![image](https://user-images.githubusercontent.com/12621342/34319588-01510cd6-e821-11e7-9eeb-e61265af53ad.png)

存储空间名即为你的服务名，加速域名即为你又拍云分配给你的域名或者是你自己绑定的域名。请注意，加速域名需要加`http://`或`https://`。

![image](https://user-images.githubusercontent.com/12621342/34319600-656c8d80-e821-11e7-8b02-34aa31a2d53a.png)

操作员即为你自己为该存储空间设定的操作员名，密码即为对应的密码。

![image](https://user-images.githubusercontent.com/12621342/34319609-9fb3307a-e821-11e7-9746-b2e82417ba7f.png)

网址后缀为你针对图片进行的一些处理参数。

由于又拍云官方没有对云存储有一个直观的控制面板，所以推荐可以采用第三方web面板来查看和操作：

[又拍云存储Web版操作工具](https://github.com/xcuts/UPYUN-API-Web-Tool)

### GitHub图床

**1.** 首先你得有一个GitHub账号。注册GitHub就不用我多言。

**2.** 新建一个仓库

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/create_new_repo.png)

记下你取的仓库名。

**3.** 生成一个token用于PicGo操作你的仓库：

访问：https://github.com/settings/tokens

然后点击`Generate new token`。

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/generate_new_token.png)

把repo的勾打上即可。然后翻到页面最底部，点击`Generate token`的绿色按钮生成token。

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/20180508210435.png)

**注意：**这个token生成后只会显示一次！你要把这个token复制一下存到其他地方以备以后要用。

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/copy_token.png)

**4.** 配置PicGo

**注意：**仓库名的格式是`用户名/仓库`，比如我创建了一个叫做`test`的仓库，在PicGo里我要设定的仓库名就是`Molunerfinn/test`。一般我们选择`master`分支即可。然后记得点击确定以生效，然后可以点击`设为默认图床`来确保上传的图床是GitHub。

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/setup_github.png)

至此配置完毕，已经可以使用了。当你上传的时候，你会发现你的仓库里也会增加新的图片了：

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/success.png)

### 阿里云OSS

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun.png)

首先先在阿里云OSS的[控制台](https://usercenter.console.aliyun.com/#/manage/ak)里找到你的`accessKeyId`和`accessKeySecret`：
![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun-key.png)

创建一个`bucket`后，存储空间名即为`bucket`:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun-bucket.png)

确认你的[存储区域](https://www.alibabacloud.com/help/zh/doc-detail/31837.htm?spm=a2c63.p38356.a3.3.179112f0PBtYui)的代码：

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun-area.png)

也可以在bucket页面找到：

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun-bucket-2.png)
如上图，存储区域就是`oss-cn-beijing`

存储路径比如`img/`的话，上传的图片会默认放在OSS的`img`文件夹下。注意存储路径一定要以`/`结尾！存储路径是可选的，如果不需要请留空。

### Imgur图床

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/imgur-option.png)

登录Imgur后，在[此处](https://api.imgur.com/oauth2/addclient)生成你的ClientId，记得选第二项，不需要callbackurl的。

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/imgur-clientid.png)

于是你可以拿到你的clientId:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/imgur-client-id-2.png)

**注意**：imgur貌似对中国大陆的IP和请求做出了限制，所以如果clientId没错的情况下无法上传图片的时候，可以考虑配置代理设置。默认只支持HTTP代理。如果觉得设置麻烦的可以考虑使用SM.MS图床。

### 更多其他图床

本体将不再增加其他图床支持，如果你有其他图床的上传需求，请自行参考[PicGo-Core](https://picgo.github.io/PicGo-Core-Doc/)，为PicGo开发第三方图床插件吧！

-----

## PicGo设置

### 自定义快捷键

PicGo v1.4.0版本开始支持自定义快捷键（默认快捷键是`Cmd+Shift+P`【Mac】或者`Ctrl+Shift+P`【Windows】），点击侧边栏PicGo设置选中修改快捷键：

![image](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/change-quick-key.png)

在打开的dialog里，点击input框，然后按下你想要的快捷键（也可以是组合键）。然后点击**确定保存**（否则不生效！）

![image](https://user-images.githubusercontent.com/12621342/35553216-ea22e18c-05d1-11e8-8913-047047b92c09.png)

### 自定义链接格式

PicGo预置的有四种链接格式：`Markdown`\\`HTML`\\`URL`\\`UBB`。如果你都不喜欢，想要自定义链接格式，可以选择`Custom`，然后在PicGo设置里点击`自定义链接格式`，然后你可以配置自己想要的复制的链接格式。

![image](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/custom.png)

### 开关更新助手

PicGo每次启动的时候会去检查最新版本。如果当前版本低于最新版本会提示你更新。如果你不想接到这条消息，那么可以在PicGo设置里把`打开更新助手`这个选项关闭。**推荐大家打开这个开关，新的版本通常会修复bug已经加入新的功能，让PicGo更好用~**

### 开机自启

选择是否开机自启动。

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/autoStart.png)

### 上传前重命名

如果你想在图片上传前能够有机会改动你的图片名，那么可以选择开启图片上传前重命名：

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/rename_before_upload.png)

之后你在上传的时候就会弹出一个小窗口让你重命名文件。如果你不想重命名，点击确定、取消或者直接关闭这个窗口都是可以的。如果你想要重命名就在输入框里输入想要更改的名字，然后点击确定即可。另外这个特性也支持批量上传，如下：

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/picgo_rename.gif)

### 选择想要显示的图床

很多时候你并不会使用上PicGo给你提供的全部的图床。所以为了精简显示你可以只选择你想要的图床来显示，这样侧边栏也就不会出现滚动条了。不过需要注意的是，这个仅仅是显示/隐藏而并不是剔除相应的功能。假如你隐藏了七牛云，你依然是可以通过七牛云来上传图片的。

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/picbed-choose.gif)

### 上传提示
![](https://camo.githubusercontent.com/763757f281c0a19ee526f26bbb1a2814f164879b/68747470733a2f2f692e6c6f6c692e6e65742f323031382f30362f30352f356231363832666134316337302e706e67)
打开之后会在每次上传图片的时候弹出提示框提示正在上传。 **如果你发现打开之后，没有效果，请注意看看是不是你关闭了系统级别的消息通知选项，因为PicGo调用的是系统级别的消息通知栏。**

### 自动时间戳命名
![](https://camo.githubusercontent.com/25e5d680bfd19a086611871ac4621c5b079a9c99/68747470733a2f2f692e6c6f6c692e6e65742f323031382f30362f30352f356231363833623334366236372e706e67)
开启之后会自动将上传的文件名替换成时间戳：
![](https://user-images.githubusercontent.com/12621342/40976264-2de18afe-6900-11e8-8f35-746820632eb8.png）

### 检查更新
![](https://user-images.githubusercontent.com/12621342/40976407-ad43d07c-6900-11e8-854f-15e1c41a7d8d.png)
用以主动发起更新检查。


### 代理设置（v2.0）

2.0版本之后，支持简单设定HTTP代理。在`设置代理`一项处点击即可。 **未来不会支持复杂的代理设置，因为跟底层有关，只能支持简单HTTP代理。**

![](https://user-images.githubusercontent.com/12621342/50515474-ea83c600-0adf-11e9-8022-52f4ab9e0ea5.png)

### 打开配置文件（v2.0）

2.0版本之后，你可以简单通过点击`打开配置文件`来打开配置文件，查看你上传的图片、你的图床设置等。

![](https://user-images.githubusercontent.com/12621342/50515474-ea83c600-0adf-11e9-8022-52f4ab9e0ea5.png)

## 插件设置（v2.0）

2.0版本之后，你可以简单通过`插件设置`页面，安装、更新、禁用、卸载、配置、使用插件。

![](https://user-images.githubusercontent.com/12621342/50515434-bc9e8180-0adf-11e9-8c71-0e39973c06b1.png)

### 安装

::: warning 注意
你必须安装[Node.js](https://nodejs.org/en/)之后才能安装PicGo的插件，因为PicGo要使用`npm`来安装插件。
:::

在插件界面的搜索栏搜索插件名。PicGo的插件名以`picgo-plugin-`为前缀，你只需要搜前缀后的名字即可。比如一个`picgo-plugin-wow`的插件你只需要搜索`wow`即可。

搜到了插件之后只要点击右下角的`安装`即可。如果遇到`未对GUI优化`的提示，可以询问一下插件作者，这个插件适不适合在PicGo软件上使用，否则它有可能只是个命令行插件。

### 更新、卸载与禁用

皆可点击插件右下角的齿轮按钮，在弹出的菜单中选择。

::: warning 注意
其中如果你选择了`更新`之后，PicGo需要重启一遍才能使用更新后的插件，PicGo会在插件页面给出`重启`按钮，点击即可。 **只是关闭主窗口再打开是不行的，必须完全退出PicGo进程再打开PicGo。**
:::

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/20190113155828.png)

### 配置

有的插件拥有配置项，可以直接点击右下角齿轮，点击`配置xxx`进行配置：

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/20190113160001.png)

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/20190113160029.png)

### 使用

有的插件拥有自有菜单项，可以直接点击右下角齿轮后，找到插件自有菜单区，点击使用：

![](https://i.loli.net/2019/01/12/5c39a2f60a32a.png)

![](https://i.loli.net/2019/01/12/5c39aa4dab0b4.png)

![](https://i.loli.net/2019/01/12/5c39aea61e80d.gif)
