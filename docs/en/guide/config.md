---
sidebarDepth: 3
---

# Configuration

The configuration of PicGo varies from system to system.

- Windows: `%APPDATA%\picgo\data.json`
- Linux: `$XDG_CONFIG_HOME/picgo/data.json` or `~/.config/picgo/data.json`
- macOS: `~/Library/Application\ Support/picgo/data.json`

In Windows, you can find the configuration at:

`C:\Users\你的用户名\AppData\Roaming\picgo\data.json`

In Linux and MacOS, you can find the configuration at:

`~/.config/picgo/data.json`

## Basic Operations

![2017-12-09 00 13 05-min](https://user-images.githubusercontent.com/12621342/34242857-d177930a-e658-11e7-9688-7405851dd5e5.gif)

## Upload Area

PicGo's upload area supports drag and drop or open your folder to upload images.

## Album Area

PicGo's album area supports to view all images you have uploaded. You can click on the image to preview. You can also click the icon below to copy the image link or delete the image (this will delete the local data to make your images disappear in your album area)

### Edit the images in the album (v1.5)

If you need to change the URL of your image after uploading, such as changing HTTP to HTTPS or adding URL suffix (e.g. `?imgslim` by Qiniu Cloud). PicGo can make it easier for you to manage you images.

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/picgo_edit_info.gif)

### Select the image link format (v2.0)

You can select the image link format in the album area since PicGo 2.0:

![](https://user-images.githubusercontent.com/12621342/50515502-17d07400-0ae0-11e9-80b9-c38f25b64922.png)

## Img Area

### SM.MS <Badge text="2.3.0+" /> 

The configuration item:

```json
{
  "token": ""                                 // your api token
}
```

Sign up and log in [sm.ms](https://sm.ms/home/apitoken) to get your token.

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/picgo/20200307182127.png)

### Qiuniu Img

The configuration items:

```json
{
  "accessKey": "",
  "secretKey": "",
  "bucket": "",                               // storage bucket
  "url": "",                                  // customized domain
  "area": "z0" | "z1" | "z2" | "na0" | "as0", // storage area
  "options": "",                              // URL suffix
  "path": ""                                  // storage path
}
```

![image](https://user-images.githubusercontent.com/12621342/34243072-191cc4ae-e65a-11e7-99f6-ebe6b7dcaf86.png)

You can find your user key in [your Qiniu portal](https://portal.qiniu.com/user/key). Note that, you should determine your own storage space:

![image](https://user-images.githubusercontent.com/12621342/34243146-69af085a-e65a-11e7-965c-2a3d15856480.png)

You need to fill the `area` in the configuration file according to this:

![image](https://user-images.githubusercontent.com/12621342/50533009-e5189100-0b5c-11e9-9812-438576990828.png)

When configuring your storage area, you need to set the upload address to Qiniu Clould or your customized domain name (`http://` or `https://` is required):

![image](https://user-images.githubusercontent.com/12621342/34245183-c38d9766-e663-11e7-964e-2d7a9ab9e9e9.png)

The URL suffix is usually used when you set some processing parameters using image processing, such as the image slim.

### Tencent Cloud COS

The configuration items:

```json
{
  "secretId": "",
  "secretKey": "",
  "bucket": "",                               // storage bucket, note that v4 is different from v5 
  "appId": "",
  "area": "",                                 // storage area
  "path": ""                                  // storage path
  "customUrl": "", 														// customized domain
  "version": "v5" | "v4" 											// COS version
}
```

> PicGo v1.5+ support both Tecent COS v4 and v5.

#### COS V4

v4:

![image](https://user-images.githubusercontent.com/12621342/35483306-5e7ed570-047b-11e8-95a9-d56a3b4d2ba9.png)

You should log in your Tecent portal and open [secret key adminstration](https://console.qcloud.com/cos4/secret):

![image](https://user-images.githubusercontent.com/12621342/34243294-082c97cc-e65b-11e7-9412-dbc86433a91d.png)

Find your `appId`, `SecretId` and `SecretKey`.

Please go to the bucket list to open the bucket you need to upload, and see the corresponding area:

![image](https://user-images.githubusercontent.com/12621342/34243443-befa715e-e65b-11e7-8404-aa5b8938a82b.png)

![image](https://user-images.githubusercontent.com/12621342/34243476-edcc7798-e65b-11e7-8d59-8714cd0a59aa.png)

If you want to upload images to a folder in your bucket, you need to add your folder path to `specify storage path` in PicGo (`/` is required)

#### COS V5

**1.** Obtain your `appId`、`SecretId` and `SecretKey`.

Access: https://console.cloud.tencent.com/cam/capi

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/get_key_id_secret.png)

**2.** Obtain your bucket and storage area.

Access: https://console.cloud.tencent.com/cos5/bucket

Create a bucket. Then find your bucket name and storage area code:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/get_bucket_area.png)

The bucket name of COS v5 is formatted as `bucket-appId` like `xxxx-12312313`, and its storage code is also slightly different from that of v4.

**3.** Select v5 and confirm.

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/choose_v5.png)

`Set as Default Img`, so that your Img is Tencent by default.


### Upyun Cloud

The configuration items:

```json
{
  "bucket": "",                               // storage bucket, note that v4 is different from v5
  "operator": "",                             // operator
  "password": "",                             // password
  "options": "",                              // URL suffix
  "path": ""                                  // storage path
  "url": "",                                  // customized domain
}
```

![image](https://user-images.githubusercontent.com/12621342/34319574-a6e141d0-e820-11e7-9b20-0ec0eb9b36af.png)

![image](https://user-images.githubusercontent.com/12621342/34319588-01510cd6-e821-11e7-9eeb-e61265af53ad.png)

The name of the storage space is your service name, and the domain name is the name assigned by the Upyun or your customized domain.

![image](https://user-images.githubusercontent.com/12621342/34319600-656c8d80-e821-11e7-8b02-34aa31a2d53a.png)

![image](https://user-images.githubusercontent.com/12621342/34319609-9fb3307a-e821-11e7-9746-b2e82417ba7f.png)

Since there is no intuitive control panel for Upyun storage, we recommend you to use the third-party web panel to view and operate:

[UPYUN-API-Web-Tool](https://github.com/xcuts/UPYUN-API-Web-Tool)

### GitHub Img

The configuration items:

```json
{
  "repo": "",                                 // user/repo
  "token": "",                                // github token
  "path": ""                                  // storage path
  "customUrl": "", 														// customized domain
  "branch": ""                                // branch, master by default
}
```

**1.** Create and log in your GitHub account.

**2.** Create a repo for GitHub Img.

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/create_new_repo.png)

**3.** Generate a token for PicGo:

Access: https://github.com/setting/tokens

`Generate new token`.

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/generate_new_token.png)

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/20180508210435.png)

**Note:** The token generated will be shown only once, so you should back it up.

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/copy_token.png)

**4.** Configure your GitHub repository for PicGo.

**Note: ** Use your GitHub repository `username/reponame`, and selete the branch (master by default). Afterward, you should set it as default Img by `set as default`.

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/setup_github.png)

After uploading, you can find that some new images are added to your repository:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/success.png)

### Aliyun OSS

The configuration items:

```json
{
  "accessKeyId": "",
  "accessKeySecret": "",
  "bucket": "",                               // storage bucket
  "area": "",                                 // storage area
  "path": ""                                  // storage path
  "customUrl": "", 														// customized domain
}
```

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun.png)

Find your `accessKeyId` and `accessKeySecret` in your [Aliyun portal](https://usercenter.console.aliyun.com/#/manage/ak):

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun-key.png)

Create a bucket as storage space:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun-bucket.png)

Confirm the code of your [storage area](https://www.alibabacloud.com/help/zh/doc-detail/31837.htm?spm=a2c63.p38356.a3.3.179112f0PBtYui):

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun-area.png)

You can also find it in your bucket page:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun-bucket-2.png)

The images uploaded will be stored in path you set, such as `img/` (`/` is required). Storage path is optional, and you can keep it blank if you do not need it.

### Imgur Img

The configuration items:

```json
{
  "clientId": "",                             // your clientId
  "proxy": ""                                 // proxy address, only http supported
}
```

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/imgur-option.png)

Generate your clientId [here](https://api.imgur.com/oauth2/addclient) after Imgur after logging in (do not need callbackurl here).

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/imgur-clientid.png)

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/imgur-client-id-2.png)

**Note:** Imgur restricts IP and requests in mainland China. If clientId is correct, configure the proxy setting when unable to upload images. Only HTTP proxies are supported by default, so you can consider using SM.MS as an alternative.

### Other Imgs

PicGo will no longer add other Imgs support. If you have other Img upload requirements, please refer to [PicGo-Core](https://picgo.github.io/PicGo-Core-Doc/), and develop other third-party plug-ins!

-----

## PicGo setting

### Setting Upload Logs

Since v2.1.0, PicGo support to record your upload logs. If there is any error and other information, PicGo can timely feedback to the developer. You can open the log files in the setting (such as output the success, the failure, or do not output).

![logs](https://raw.githubusercontent.com/Molunerfinn/test/master/docs/logs)


### Customized Shortcuts

Since v1.4.0, PicGo support users to use their own shortcuts (`Cmd+Shift+P` for MacOS, `Ctrl+Shift+P` for Windows by default). Click the PicGo setting sidebar and open the shortcut panel to set your customized shortcuts (v2.2.0+). You can choose to disable or enable the shortcuts:

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/picgo/20200101204942.png)

Click `edit`, press the shortcut keys in dialog and confirm. You can also set combined shortcuts.

Since v 2.2.0, PicGo add the shortcut system for its plug-ins, and the shortcuts will be shown in the shortcut panel.

### Customized Link Format

PicGo preset four image link formats, i.e., `Markdown`\\`HTML`\\`URL`\\`UBB`. You can also use your own link format `Custom`. Click `customized link format` in PicGo setting, then you can use your customized links.

::: tip
PicGo supports `$fileName`since v2.1.2.
:::

![customUrl](https://raw.githubusercontent.com/Molunerfinn/test/master/docs/customUrl)

### Upgrade Assistant

PicGo will inform you to upgrade if your version is not the latest. You can turn it off in the setting. We recommend you to turn the upgrade assistant on, for the new version may fix bugs and add new features\~

### Bootup Auto-start

You can choose to auto-start PicGo when booting up.

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/autoStart.png)

### Rename before Uploading

PicGo allow you to rename your images before uploading:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/rename_before_upload.png)

Then you will see a window to rename your image. If you do not want to many any changes, just confirm, cancel or just close it. Besides, this feature also supports uploads in branch:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/picgo_rename.gif)

### Select Img to Display

You may not use all of the Imgs that PicGo gives to you. So in order to simplify the display, you can only select the Imgs you want to display, so that there is no scroll bar in the sidebar. It is important to note, however, that this is only show/hide and not exclude functionality. If you hide the Qiniu cloud, you can still upload images via its service.

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/picbed-choose.gif)

### Upload Status

![](https://camo.githubusercontent.com/763757f281c0a19ee526f26bbb1a2814f164879b/68747470733a2f2f692e6c6f6c692e6e65742f323031382f30362f30352f356231363832666134316337302e706e67)

Every time PicGo uploads an image, the upload status will be shown to indicate that the image is being uploaded. **If you find that it doesn't work after you open it, notice if you've turned off the system-level message notification option, because PicGo calls the system-level message notification bar.**

### Timestamp Name 

![](https://camo.githubusercontent.com/25e5d680bfd19a086611871ac4621c5b079a9c99/68747470733a2f2f692e6c6f6c692e6e65742f323031382f30362f30352f356231363833623334366236372e706e67)

When enabled, the uploaded file name will be automatically replaced with the timestamp:

![](https://user-images.githubusercontent.com/12621342/40976264-2de18afe-6900-11e8-8f35-746820632eb8.png)

### Upgrade Check

![](https://user-images.githubusercontent.com/12621342/40976407-ad43d07c-6900-11e8-854f-15e1c41a7d8d.png)

### Proxy Setting <Badge text="2.0.0+" /> 

Since v2.0, PicGo supports HTTP proxy. You can set it at `proxy setting`. **We do not plan to add sophisticated proxy, because this is related to the underlying parts.**

![](https://user-images.githubusercontent.com/12621342/50515474-ea83c600-0adf-11e9-8022-52f4ab9e0ea5.png)

### Open Configuration Files <Badge text="2.0.0+" /> 

Since v2.0, you can open your configuration files at `open configuration files` to see your images uploaded, you Img setting, etc.

![](https://user-images.githubusercontent.com/12621342/50515474-ea83c600-0adf-11e9-8022-52f4ab9e0ea5.png)

### PicGo-Server Setting <Badge text="2.2.0+" /> 

Since v2.2, a small server is turned on by default to coordinate with other applications to invoke PicGo for uploading. The listening address is the default `127.0.0.1` (localhost), and the port is the default `36677`. Of course, you can choose to close it. While we do not recommend you to do so, because it can be implemented with some third-party tools to facilitate the upload workflow.

About how to use PicGo server, you can refer to [Advanced Usage](/en/guide/advance.html).

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/test/picgo-server.png)

## Plug-in Setting <Badge text="2.0.0+" /> 

Since PicGo v2.0, you can install, update, disable, uninstall, configure, and use plug-ins simply on the `plug-in setting`page.

![](https://user-images.githubusercontent.com/12621342/50515434-bc9e8180-0adf-11e9-8c71-0e39973c06b1.png)

### Plug-in Installation

::: warning
You must have [Node.js](https://nodejs.org/en/) to install PicGo plug-ins, because PicGo uses `npm` to install them.
:::

Search for the plug-in name in the search bar of the plug-in interface. PicGo's plug-ins use `picgo-plugin-` as prefix, so you just need to use the name after it. For example, if you want to use `picgo-plugin-wow`, you just need to search `wow`.

Then you can install it. If you meed the problem "not GUI optimized", you can ask the author to figure out whether it only support CLI. If yes, then you cannot use it on PicGo GUI.

### Update, Uninstall and Disable Plug-ins

You can set them all in the PicGo setting. Note that PicGo need to be restarted to enable the new setting.

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/20190113155828.png)

### Plug-in Configuration

Some plug-ins has configuration option, click `configuration` to configurate:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/20190113160001.png)

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/20190113160029.png)

### Plug-in Usage

Some plug-ins have their own menu items, you can find the plug-in's own menu and use:

![](https://i.loli.net/2019/01/12/5c39a2f60a32a.png)

![](https://i.loli.net/2019/01/12/5c39aa4dab0b4.png)

![](https://i.loli.net/2019/01/12/5c39aea61e80d.gif)

### Awesome PicGo Plug-ins

You can find some awesome PicGo Plug-ins in [Awesome-PicGo](https://github.com/PicGo/Awesome-PicGo)\~
