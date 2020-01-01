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

![](https://user-images.githubusercontent.com/12621342/71626713-926b2c80-2c29-11ea-966a-9fae1b152712.png)

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