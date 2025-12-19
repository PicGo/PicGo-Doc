---
sidebarDepth: 3
---
# Advanced Usage

## Upload using Command Line <Badge text="2.1.0+" /> 

PicGo started supporting to use command line to call to PicGo clients for uploading since version 2.1.0.

You can use `upload` to upload the image on your clipboard and use `upload xxx.jpg` to upload the image in the specific path. 

### Windows

For Windows users, you can upload your image using `PATH\PicGo.exe upload`, where 'PATH' is your PicGo path.

### macOS

For MacOS users, you can upload your image using `/Applications/PicGo.app/Contents/MacOS/PicGo upload`.

### Linux

For Linux users, you can upload your image using `PATH/PicGo.AppImage upload`, where 'PATH' is your PicGo path.

## PicGo-Server Usage <Badge text="2.2.0+" /> 

PicGo has a small built-in server that receives HTTP requests from other applications to upload images since `2.2.0`.

Default listening address: `127.0.0.1`. Default listening port: `36677`

### Upload the image on clipboard by calling HTTP

- method: `POST`
- url: `http://127.0.0.1:36677/upload` (use the default setting as an example)

Then, you can upload your image.

Returned data:

```json
{
  "success": true, // or false
  "result": ["url"]
}
```

![](https://pics.molunerfinn.com/doc/picgo-server-upload-clipboard-file.png)

### Upload the specific image by calling HTTP

- method: `POST`
- url: `http://127.0.0.1:36677/upload` (use the default setting as an example)
- request body: `{list: ['xxx.jpg']}` must be JSON-formatted

![](https://pics.molunerfinn.com/doc/71626614-1b359880-2c29-11ea-8efe-330f15116268.png)

```json
{
  "success": true, // or false
  "result": ["url"]
}
```

### Upload images with HTTP form data <Badge text="2.4.0+" />

Starting from `2.4.0`, PicGo-Server also accepts multipart form-data uploads. Thanks to [@happy-game](https://github.com/happy-game) for the contribution!

- method: `POST`
- url: `http://127.0.0.1:36677/upload` (using the default settings as an example)
- request body: form-data whose key is `files` and value is the image file. Multiple files are supported at once.

![](https://pics.molunerfinn.com/doc/20251124162453718.png)

## PicGo Mobile App Integration <Badge text="2.3.0+" />

If you want to use PicGo on your phone, install [flutter-picgo](https://github.com/PicGo/flutter-picgo). Thanks to [@hackycy](https://github.com/hackycy) for building it!

Click the information bar button in the lower-left corner of the main window and choose "Generate image host configuration QR code".

![](https://pics.molunerfinn.com/doc/202108282131459.png)

Then use flutter-picgo to scan the QR code and import your image host configuration instantly.

## PicGo Repair Toolbox <Badge text="2.4.0+" />

Starting in `2.4.0`, you can find a "PicGo Repair Toolbox" entry under the `i` button on the main interface. Use it to troubleshoot and fix issues yourself when PicGo behaves abnormally.

![](https://pics.molunerfinn.com/doc/20251121171753489.png)

![](https://pics.molunerfinn.com/doc/20251121170523831.png)
