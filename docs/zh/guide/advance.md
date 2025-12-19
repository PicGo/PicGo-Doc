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

![](https://pics.molunerfinn.com/doc/picgo-server-upload-clipboard-file.png)

### HTTP调用上传具体路径图片

- method: `POST`
- url: `http://127.0.0.1:36677/upload` （此处以默认配置为例）
- request body: `{list: ['xxx.jpg']}` 必须是JSON格式

![](https://pics.molunerfinn.com/doc/71626614-1b359880-2c29-11ea-8efe-330f15116268.png)


```json
{
  "success": true, // or false
  "result": ["url"]
}
```

### HTTP 调用上传表单图片 <Badge text="2.4.0+" />

从 `2.4.0` 版本开始，PicGo-Server 支持通过表单上传图片文件了。感谢 [@happy-game](https://github.com/happy-game) 的贡献！

- method: `POST`
- url: `http://127.0.0.1:36677/upload` （此处以默认配置为例）
- request body: form-data，key为 `files`，value为图片文件，可以多张图片。

![](https://pics.molunerfinn.com/doc/20251124162453718.png)

## PicGo手机客户端联动 <Badge text="2.3.0+" /> 

如果你想在手机上使用 PicGo，可以安装 [flutter-picgo](https://github.com/PicGo/flutter-picgo)，感谢 [@hackycy](https://github.com/hackycy) 的贡献！

可以通过点击主窗口左下角信息栏按钮，找到「生成图床配置二维码」菜单

![](https://pics.molunerfinn.com/doc/202108282131459.png)

然后通过 flutter-picgo 的扫码功能，一键导入图床配置。

## PicGo 修复工具箱 <Badge text="2.4.0+" />

从 `2.4.0` 版本开始，在主界面的 `i` 图标按钮中，有一个「PicGo 修复工具箱」功能，当你遇到 PicGo 使用异常的时候，可以尝试用修复工具箱自主排查和修复问题。

![](https://pics.molunerfinn.com/doc/20251121171753489.png)

![](https://pics.molunerfinn.com/doc/20251121170523831.png)
