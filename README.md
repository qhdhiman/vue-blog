# 在线知识分享项目 [前端项目]

> 在线知识分享项目是作者个人毕业项目。
<br>项目技术栈为: (vue2 + muse-ui) + (Node.js + Koa2 + JWT) + (MongoDB)
<br>欢迎喜欢的朋友下载使用
<br> 在线预览地址： https://qhdhiman.github.io/vue-blog/#/
<br>项目后端: [koa-blog](https://github.com/qhdhiman/koa-blog)

## 目录结构
```
文件夹 PATH 列表
│  .babelrc
│  .eslintignore
│  .eslintrc.js
│  .gitignore
│  .postcssrc.js
│  index.html //主页
│  package.json // 项目配置文件
│  README.md // 说明文件
│
├─build // webpack构建目录
│      build.js
│      check-versions.js
│      dev-client.js
│      dev-server.js
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│      webpack.test.conf.js
│
├─config //webpack 配置目录
│      dev.env.js
│      index.js
│      prod.env.js
│      test.env.js
│
├─docs // 文档说明目录
│      index.png
│
├─src // 源码目录
│  │  App.vue // 根路由入口文件
│  │  main.js // vue项目gen配置文件
│  │
│  ├─api // api目录
│  │  │  Token.js // token处理类
│  │  │
│  │  └─http // http 处理目录
│  │      │  index.js // vue-resource处理类
│  │      │
│  │      └─interceptors // http拦截器目录
│  │              ErrorInterceptor.js // http错误拦截器
│  │              index.js // 拦截器导出入口文件
│  │              TokenInterceptor.js // token拦截器
│  │
│  ├─assets // 资源目录
│  │      avatar.jpg // 头像
│  │      logo.png // logo
│  │
│  ├─components // 组件目录
│  │  │  Actions.vue // 操作按钮组件 （点赞、评论、收藏、删除）
│  │  │  TopBar.vue // 头部菜单栏组件
│  │  │
│  │  └─dialog // 对话框目录
│  │          Comment.vue  // 评论组件
│  │          Signin.vue // 登录组件
│  │          Signup.vue // 注册组件
│  │
│  ├─mixins // mixins目录
│  │      auth.js // 权限处理
│  │
│  ├─pages // 页面目录
│  │  ├─article // 知识目录
│  │  │      Add.vue  //  添加知识页
│  │  │      All.vue // 知识库页
│  │  │      List.vue // 个人知识库页
│  │  │
│  │  └─user  // 用户目录
│  │          Password.vue // 修改密码页
│  │          Profile.vue // 修改用户信息页
│  │          Signin.vue // 登录页（未使用）
│  │          Signup.vue // 注册页（未使用）
│  │
│  ├─router // 路由目录
│  │      index.js // 路由配置
│  │
│  ├─mock // mock模拟数据目录
│  │      index.js //
│  │
│  ├─services // 服务目录
│  │      ArticleServ.js // 知识服务类
│  │      UserServ.js // 用户服务类
│  │
│  └─store // vuex目录
│      │  index.js // 导出入口文件
│      │  mutations-type.js // mutaions-type 配置类
│      │
│      └─modules // 模块类
│              article.js // 知识
│              user.js // 用户
│
├─static // 静态文件路面
│      avatar.jpg // 头像
│
└─test // 测试目录
    └─unit
        │  .eslintrc
        │  index.js
        │  karma.conf.js
        │
        └─specs
                Hello.spec.js


```

## 演示

请跳转到这里： https://qhdhiman.github.io/vue-blog/#/ 

## 项目依赖
```

    "moment": "^2.18.1",
    "muse-ui": "^2.1.0",
    "vue": "^2.3.3",
    "vue-resource": "^1.3.4",
    "vue-router": "^2.6.0",
    "vuex": "^2.3.1"
```


## 启动项目

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```


