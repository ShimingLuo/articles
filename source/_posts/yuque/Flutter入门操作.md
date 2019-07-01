
---

title: Flutter入门操作

date: 2019-05-24 14:02:52 +0800

tags: []

---
基于Dart编程语言的移动端UI框架

Flutter官方地址：[链接](https://flutterchina.club/)

<a name="p2vpH"></a>
# 环境搭建

_注意：环境搭建过程中出现缓慢、链接超时、等情况需要自行代理_

工具准备：Windows10-64（最低需要win7-64）、Git工具、Android Studio（java jdk）、VSCode、

<a name="bUXhd"></a>
### 安装flutter-sdk
由于在国内访问Flutter有时可能会受到限制，Flutter官方为中国开发者搭建了临时镜像，大家可以将如下环境变量加入到用户环境变量中：（如果不成功，请手动可视化添加到用户环境变量中）
```bash
# 据说是临时镜像
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

<a name="Lac3H"></a>
#### 获取Flutter SDK

1. Flutter官网下载最新可用安装包，[点击下载](https://flutter.io/sdk-archive/#windows)
> 注意，Flutter的渠道版本会不停变动，请以Flutter官网为准。另外，在中国大陆地区，要想正常获取安装包列表或下载安装包，可能需要翻墙，读者也可以去Flutter github项目下去[下载安装包](https://github.com/flutter/flutter/releases) 。

2. 直接将Flutter SDK包解压放到你想要安装的位置（例如：D:\flutter； 注意，不要将其放到高权限文件夹中）
2. 然后在Flutter SDK安装跟目录找到`flutter_console.bat`，双击打开后就可以使用`fluter`命令
> **注意：**由于一些`flutter`命令需要联网获取数据，如果您是在国内访问，由于众所周知的原因，直接访问很可能不会成功。 上面的`PUB_HOSTED_URL`和`FLUTTER_STORAGE_BASE_URL`是google为国内开发者搭建的临时镜像。详情请参考 [Using Flutter in China](https://github.com/flutter/flutter/wiki/Using-Flutter-in-China)


<a name="uaYmf"></a>
#### 更新环境变量
如果希望在终端使用`flutter`命令，需要添加系统环境变量`Path`中

<a name="5IJyE"></a>
### 安装dart-sdk与Pub（类似NPM，捆绑安装）
Dart的官方网站：[链接](http://dart.goodev.org/)
<a name="uXnh6"></a>
#### 获取SDK

- 官网安装教程（真的慢到怀疑人生）：[链接](http://dart.goodev.org/install/windows)
- 安装版地址：[链接](http://www.gekorm.com/dart-windows/)

安装完成后检查环境变量是否添加，如果没有需要自己手动添加

```bash
# 创建项目工具
$ pub global activate stagehand
# webdev是一个类似于Koa的web服务器，开发web应用时使用
$ pub global activate webdev
# or
$ flutter packages pub global activate webdev
```

<a name="WjeBN"></a>
#### 检验运行
```bash
$ dart --version
```
![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1558688068993-2d2c97ac-ed9a-4c0c-9274-fbb5ca5e06e0.png#align=left&display=inline&height=33&name=image.png&originHeight=33&originWidth=585&size=3174&status=done&width=585)

<a name="HsQ6X"></a>
### 运行 flutter doctor
打开一个新的命令提示符或PowerShell窗口并运行以下命令以查看是否需要安装任何依赖项来完成安装：
```bash
$ flutter doctor
```
> 注意：会一些 issues 挨个解决，重复执行命令，直到出现 No issues found 为止
> 常见的问题及解决方案：[链接](https://blog.csdn.net/liy010/article/details/82078484)


JDK版本错误（andriod sdk无法兼容高版本的jdk，更换成jdk1.8.0_211，之后显示添加Licenses授权）
```basic
[!] Android toolchain - develop for Android devices (Android SDK 27.0.3)
    ✗ Android license status unknown.
```

成功截图<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1558680998839-dca58a18-5dbf-41be-b94b-cb00021fe55e.png#align=left&display=inline&height=143&name=image.png&originHeight=144&originWidth=752&size=11644&status=done&width=746)

<a name="g3UQO"></a>
### 编辑器配置
<a name="vjVP0"></a>
#### Android Studio：安装 Dart、Flutter支持插件
![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1558689087567-24e4aa21-d6e9-4993-9372-a164b172dbb2.png#align=left&display=inline&height=150&name=image.png&originHeight=150&originWidth=736&size=13366&status=done&width=736)<br />需要同时将`ANDROID_HOME` 环境变量配置成你的SDK
<a name="p6gAI"></a>
#### Visual Studio Code：安装 Dart、Flutter支持插件
![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1558689227815-c3b6c6f2-18f3-4340-80c5-e72a0bb47c83.png#align=left&display=inline&height=395&name=image.png&originHeight=395&originWidth=612&size=48685&status=done&width=612)

<a name="UGgIi"></a>
### 新建项目并运行
从模板中创建一个新的Flutter应用程序，运行它，并学习如何使用Hot Reload进行更新重载<br />Flutter是一个灵活的工具包，所以请首先选择您的开发工具来编写、构建和运行您的Flutter应用程序。
<a name="WpK2q"></a>
#### Android Studio：为Flutter提供完整的IDE体验

1. 新建一个Flutter项目

![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1558712365965-f3733070-b6cf-45f3-a1ce-f2414368df93.png#align=left&display=inline&height=588&name=image.png&originHeight=588&originWidth=559&size=72528&status=done&width=559)

2. 选择一个Flutter项目的模板

![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1558750445452-fa2d0ff4-754a-4297-9f67-84fe7906bc52.png#align=left&display=inline&height=739&name=image.png&originHeight=739&originWidth=916&size=45149&status=done&width=916)

3. 项目创建完成

![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1558750527869-1c17d17e-f142-4f19-ad7a-0a99d6c82b64.png#align=left&display=inline&height=1048&name=image.png&originHeight=1048&originWidth=1920&size=175479&status=done&width=1920)

4. 点击运行项目（第一次比较慢，初始化打包工具`gradle`，需要连接网络）

![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1558750580785-e2f41dd1-4704-46b9-81bd-2a20ffcda924.png#align=left&display=inline&height=48&name=image.png&originHeight=48&originWidth=597&size=6202&status=done&width=597)

5. 允许手机安装后启动APP，可以开始愉快的编码（集成热更新，保存代码修改自动刷新APP显示）

<a name="tq3vu"></a>
#### Visual Studio Code

1. 打开IDE → View → Command Palette...（快捷键`Ctrl+Shift+P`）

![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1558710579465-15e63ba1-02d1-482e-8afe-957f503e947f.png#align=left&display=inline&height=203&name=image.png&originHeight=203&originWidth=640&size=13974&status=done&width=640)

2. 选择`Flutter:New Project`（Flutter APP项目），输入项目名称：`flutter_app`

![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1558710706475-8574fdf7-1a4f-479c-a61f-a2cd4c05371b.png#align=left&display=inline&height=120&name=image.png&originHeight=120&originWidth=666&size=7857&status=done&width=666)

3. 新建完成IDE自动拉取FlutterAPP项目模板代码（默认打开的`./lib/main.dart`就是示例界面）

![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1558711003954-ee5d14c6-8810-4827-ba2e-ef5c5f6fffc7.png#align=left&display=inline&height=1048&name=image.png&originHeight=1048&originWidth=1920&size=224263&status=done&width=1920)

4. 键入`F5`运行开发环境，安装并运行APP（集成热更新，保存代码修改自动刷新APP显示）

<a name="KM00A"></a>
# 打包发布
<a name="cb09H"></a>
### Andriod

1. 生成Android证书
1. 引用证书
1. 打包
> 和打包原生的一样


<a name="WjnUV"></a>
### IOS

<a name="ZDUGF"></a>
# 参考
Flutter中文网：[https://flutterchina.club/](https://flutterchina.club/)<br />掘金入门篇：[https://juejin.im/post/5ce515fb518825642c3f42dd](https://juejin.im/post/5ce515fb518825642c3f42dd)


