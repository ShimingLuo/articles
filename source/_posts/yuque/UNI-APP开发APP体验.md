
---

title: UNI-APP开发APP体验

date: 2019-04-22 14:29:27 +0800

tags: []

---
公司业务需求加上Native工程师资源忙于项目开发，所以公司展示类APP就落在前端手上。之前使用过[APICloud](https://www.apicloud.com/)开发公司项目的管理端OA，毫不留情的说：体验真的很不友好，基本上很多ES、CSS3的特性都不支持，很多插件还收费，还不支持开发者离线打包，或许时不给钱就是个阉割产品吧。（由于公司要求，还是坚持的用这个将APP完成【吐血】）。公司主要技术栈时Vue，所以找咯几种VUE开发APP技术方案：

[WEEX](https://weex.apache.org/zh/)也是入手过，没深入使用，坑踩得少。需求上有图表（现在使用的EChart）的操作在WEEX上的表现真的不想说。

检索后发现有个叫，[WEEX-EROS](https://bmfe.github.io/eros-docs/#/zh-cn/)，的解决方案可以解决。果断入坑。。。图表的解决方案有点尬。

[Quasar](http://www.quasarchs.com/)一个Vue.js的框架（支持PWA）可以直接使用[Cordova](https://cordova.apache.org/)打包成Web APP的真香方案，重构完管理端后发现，真的想杀人，图表渲染有问题。性能上需要自己去菜坑。果断改用[HBuilderX](https://www.dcloud.io/hbuilderx.html)打包，问题解决。（国产牛逼）

顺带看到咯使用VUE开发跨平台的解决方案[uni-app](https://uniapp.dcloud.io/)，正好需要开发一个地图定位类APP。

`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发**跨平台**应用的前端框架，开发者编写一套代码，可编译到iOS、Android、H5、小程序等多个平台。_真香入坑_

<a name="3b3524ad"></a>
# 搭建环境

HBuilderX：IDE。[最新版本下载地址](http://www.dcloud.io/hbuilderx.html)<br />插件安装：<br />菜单栏 → 工具 → 插件安装 → [选择需要用到的插件]

<a name="39da6755"></a>
# 创建项目

![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1555922413297-efb1e1e2-8946-4cbb-86da-c67f69e92b6a.png#align=left&display=inline&height=409&name=image.png&originHeight=409&originWidth=158&size=9237&status=done&width=158)<br />

<a name="4c763bb6"></a>
# 运行

> 注意：我主要是开发APP所以我直接使用运行到手机


菜单栏 → 运行 → 运行到手机或模拟器 → [选择自己的测试手机或模拟器]<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1555922793561-1f0e1784-361b-40c2-94f1-57465af53fd6.png#align=left&display=inline&height=318&name=image.png&originHeight=318&originWidth=620&size=43393&status=done&width=620)

修改代码热更新到手机上

<a name="cb3d9a8e"></a>
# 在线打包发布

> 注意在线打包需要最新版本的IDE，使用远端的SDK打包。否则，启动时会弹出消息提示


![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1555923423162-681e4497-c372-4821-964d-4a1c3cfb067c.png#align=left&display=inline&height=348&name=image.png&originHeight=348&originWidth=304&size=27039&status=done&width=304)<br />

<a name="8644cb9a"></a>
# 离线打包发布



<a name="8e0c938f"></a>
# 踩坑列表

uni-app的<map>组件的层级太高，无法使用VUE抽屉组件覆盖，最后只有使用原生的plus.nativeObj.View来绘制一个抽屉。

原生<map>组件功能阉割，没法体验完整的SDK能力，解决办法只有使用，plus.maps，手写一个组件

<a name="25f9c7fa"></a>
# 总结

个人感觉虽然网络上DEMO项目多，但是一般都只是找到点，什么图片查看啊，电商什么的。<br />一句话就是，这类跨端APP最好的就是使用展示累的OA，或者，小工具。像基于地图做业务性强一点，个人感觉还是来个，Flutter开发。

打算使用Flutter重构该APP

<a name="ea6f3b87"></a>
# 参考链接

实现uni-app和原生(Android)以及H5项目混编：[https://www.jianshu.com/p/69a445cf847d](https://www.jianshu.com/p/69a445cf847d)


