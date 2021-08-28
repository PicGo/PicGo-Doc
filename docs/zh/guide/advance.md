---
sidebarDepth: 3
---
# 高级技巧

## 命令行上传 <Badge text="2.1.0+" /> 

PicGo在`2.1.0`版本开始支持命令行调用PicGo客户端进行上传了。

上传的命令是 `upload` （用于上传剪贴板图片）以及 `upload xxx.jpg` 用于上传具体路径的图片。

### Windows

Windows可以通过 `你安装的PicGo的路径\PicGo.exe upload` 来调用上传。

### macOS

macOS可以通过 `/Applications/PicGo.app/Contents/MacOS/PicGo upload` 来调用上传。

### Linux

Linux可以通过 `你安装的PicGo的路径/PicGo.AppImage upload` 来调用上传。

## PicGo-Server的使用 <Badge text="2.2.0+" /> 

PicGo在`2.2.0`版本开始内置了一个小型的服务器，用于接收来自其他应用的HTTP请求来上传图片。

默认监听地址： `127.0.0.1`，默认监听端口：`36677`

### HTTP调用上传剪贴板图片

- method: `POST`
- url: `http://127.0.0.1:36677/upload` （此处以默认配置为例）

即可上传。

返回的数据：

```json
{
  "success": true, // or false
  "result": ["url"]
}
```

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/PicGo/picgo-server-upload-clipboard-file.png)

### HTTP调用上传具体路径图片

- method: `POST`
- url: `http://127.0.0.1:36677/upload` （此处以默认配置为例）
- request body: `{list: ['xxx.jpg']}` 必须是JSON格式

![](https://user-images.githubusercontent.com/12621342/71626614-1b359880-2c29-11ea-8efe-330f15116268.png)


```json
{
  "success": true, // or false
  "result": ["url"]
}
```

## PicGo手机客户端联动 <Badge text="2.3.0+" /> 

如果你想在手机上使用PicGo，可以安装 [flutter-picgo](https://github.com/PicGo/flutter-picgo)，感谢 [@hackycy](https://github.com/hackycy) 的贡献！

可以通过点击主窗口左下角信息栏按钮，找到「生成图床配置二维码」菜单

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/sspai/202108282131459.png)

然后通过 flutter-picgo 的扫码功能，一键导入图床配置。
