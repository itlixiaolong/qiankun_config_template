# 项目说明 qiankun-vue-and-jquery-config-template

用`qiankun`来实现`vue`技术栈的前端微服务

`main`是主项目是vue项目，`app-vue-hash`是vue的`hash`模式路由的子项目，`app-vue-history`是vue的`history`模式路由的子项目，app-jqery-*是传统的jquery的多页子项目
在主项目和子项目之间的数据通讯是基于vuex来做的，通讯范围也覆盖了jquery的项目

整个项目的基础模板来自于https://github.com/gongshun/qiankun-vue-demo 感谢作者的辛苦产出！


`qiankun`的开发和打包和正常模式一模一样，它使用一个全局变量`__POWERED_BY_QIANKUN__`来区分微前端模式和正常模式，不需要额外的配置和代码。

具体的原理分析和介绍可以看：[qiankun 微前端方案实践及总结](https://juejin.im/post/6844904185910018062) 和 [qiankun 微前端实践总结（二）](https://juejin.im/post/6856569463950639117)

## 运行和打包

在根目录下：

先安装依赖： `npm install`，再执行`npm run install-all`为所有项目安装依赖，最后执行`npm run start-all`即可启动所有的项目。

`npm run build-all`可以打包所有的项目。
