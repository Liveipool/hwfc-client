# hwfc-client

这里是HWFC网站的前端部分。

## 主要使用的工具/库

- vue
- vue-router做路由
- vuex储存和管理状态
- axois进行ajax调用
- normalize.css统一不同浏览器渲染的形式。

## 项目结构

```
|-- build                            // Webpack相关配置
|-- config                           // 项目开发环境配置
|-- src                              // 源码目录
|   |-- api                          // ajax调用相关函数，，以后根据需要可能还要分文件夹管理
|   |-- assets                       // 静态资源
|   |-- components                   // 组件
|   |-- router                       // 路由配置，以后根据需要可能还要分文件夹管理
|   |-- vuex                         // Vuex状态管理
|       |-- index.js                 // 根级别的状态管理，以后东西多了可能还要分成action.js, mutation.js等等
|       |-- modules                  // 各业务模块的局部状态管理
|   |-- utils                        // 工具集合
|   |-- App.vue                      // 页面入口
|   |-- main.js                      // 程序入口，加载各种公共组件
|-- static                           // 静态文件
|-- .babelrc                         // babel-loader 配置
|-- .editorconfig                    // 定义代码格式
|-- package.json                     // 项目基本信息
```


## Build Setup

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

# run e2e tests
npm run e2e

# run all tests
npm test
```