# 前端技术体系总导航

## 基础能力

### CSS
- [核心概念](web/css/index.md)
  - [盒模型](web/css/box.md)
  - [块级格式化上下文](web/css/BFC.md)
  - [像素与视口单位](web/css/dp_px_dpr_ppi.md)
  - [CSS预处理器](web/css/sass_less_stylus.md)
- 布局系统:
  - [弹性盒子布局](web/css/flexbox.md)
  - [网格布局](web/css/grid.md)
  - [多列布局](web/css/column_layout.md)
  - [水平垂直居中](web/css/center.md)
- 视觉呈现:
  - [CSS动画](web/css/animation.md)
  - [CSS3新特性](web/css/css3_features.md)
  - [绘制与渲染原理](web/css/layout_painting.md)
  - [视觉滚动效果](web/css/visual_scrolling.md)
- 实用技巧:
  - [小像素处理](web/css/less_12px.md)
  - [隐藏元素方法](web/css/hide_attributes.md)
  - [选择器指南](web/css/selector.md)
  - [性能优化](web/css/css_performance.md)
  - [响应式设计](web/css/responsive_layout.md)

### JavaScript
- [语言核心](web/JavaScript/index.md)
  - 基础概念:
    - [数据类型与存储](web/JavaScript/data_type.md)
    - [类型转换机制](web/JavaScript/type_conversion.md)
    - [作用域与闭包](web/JavaScript/scope.md)
    - [this绑定规则](web/JavaScript/this.md)
  - 执行模型:
    - [事件循环机制](web/JavaScript/event_loop.md)
    - [事件模型与代理](web/JavaScript/event_Model.md)
  - 对象系统:
    - [原型与继承](web/JavaScript/prototype.md)
    - [new运算符原理](web/JavaScript/new.md)
  - 函数编程:
    - [函数式编程](web/JavaScript/functional_programming.md)
    - [柯里化与高阶函数](web/JavaScript/function_cache.md)
    - [防抖与节流](web/JavaScript/debounce_throttle.md)
    - [call/apply/bind](web/JavaScript/bind_call_apply.md)
  - 性能优化:
    - [内存泄漏排查](web/JavaScript/memory_leak.md)
    - [渲染性能提升](web/JavaScript/visible.md)
    - [尾递归优化](web/JavaScript/tail_recursion.md)
  - 数据处理:
    - [深浅拷贝机制](web/JavaScript/copy.md)
    - [精度丢失问题](web/JavaScript/loss_accuracy.md)
    - [数据结构应用](web/JavaScript/js_data_structure.md)

### ES6+
- [新特性全解](web/es6/index.md)
  - [模块化体系](web/es6/module.md)
  - [异步编程方案](web/es6/promise.md)
  - [函数特性演进](web/es6/arrow_function.md)
  - [数据结构扩展](web/es6/data_structure.md)

## 框架生态

### React
- [设计理念](web/React/index.md)
  - 核心概念:
    - [Fiber架构原理](web/React/Fiber.md)
    - [JSX转换机制](web/React/JSX_to_DOM.md)
    - [虚拟DOM原理](web/React/Real_DOM_Virtual_DOM.md)
  - 组件开发:
    - [类组件与函数组件](web/React/class_function_component.md)
    - [生命周期管理](web/React/life_cycle.md)
    - [事件处理机制](web/React/SyntheticEvent.md)
    - [Hooks核心原理](web/React/React_Hooks.md)
  - 状态管理:
    - [Redux工作流程](web/React/redux.md)
    - [中间件机制](web/React/Redux_Middleware.md)
    - [状态更新机制](web/React/setState.md)
  - 性能优化:
    - [渲染性能优化](web/React/Improve_performance.md)
    - [服务端渲染方案](web/React/server_side_rendering.md)
    - [组件懒加载](web/React/improve_render.md)

### Vue
- [响应式原理](web/vue/index.md)
  - [Composition API](web/vue3/composition_api.md)
  - [响应式系统](web/vue3/reactivity.md)
  - [生命周期钩子](web/vue3/lifecycle.md)
  - [路由实现原理](web/vue3/router.md)
  - [状态管理方案](web/vue3/pinia.md)
  - [性能优化](web/vue3/performance.md)
  - [服务端渲染](web/vue3/ssr.md)

## 工程实践

### Node.js
- [运行时原理](web/NodeJS/index.md)
  - 核心模块:
    - [缓冲区(Buffer)](web/NodeJS/Buffer.md)
    - [全局对象](web/NodeJS/global.md)
    - [模块系统](web/NodeJS/nodejs.md)
    - [事件循环机制](web/NodeJS/event_loop.md)
  - 文件系统:
    - [文件操作(fs)](web/NodeJS/fs.md)
    - [流处理(Stream)](web/NodeJS/Stream.md)
    - [文件上传处理](web/NodeJS/file_upload.md)
  - 进程管理:
    - [进程控制(process)](web/NodeJS/process.md)
    - [性能优化](web/NodeJS/performance.md)
  - 事件机制:
    - [事件触发器(EventEmitter)](web/NodeJS/EventEmitter.md)

### Webpack
- [构建原理](web/webpack/index.md)
  - [构建流程](web/webpack/build_process.md)
  - [热更新机制](web/webpack/HMR.md)
  - [性能优化](web/webpack/performance.md)
  - [代理配置](web/webpack/proxy.md)
  - 插件机制:
    - [Loader原理](web/webpack/Loader.md)
    - [Plugin原理](web/webpack/Plugin.md)
    - [常用插件](web/webpack/Loader_Plugin.md)
  - [构建优化](web/webpack/improve_build.md)
  - [其他构建工具](web/webpack/Rollup_Parcel_snowpack_Vite.md)

### Git
- [版本控制](web/git/index.md)
  - [基础概念](web/git/Version_control.md)
  - [常用命令](web/git/command.md)
  - [HEAD与工作区](web/git/HEAD_tree_index.md)
  - 分支管理:
    - [分支操作](web/git/fork_clone_branch.md)
    - [冲突处理](web/git/conflict.md)
  - 高级操作:
    - [Pull与Fetch](web/git/git_pull__git_fetch.md)
    - [Rebase与Merge](web/git/git_rebase__git_merge.md)
    - [Reset与Revert](web/git/git_reset__git_revert.md)
    - [暂存管理](web/git/git_stash.md)

### 小程序
- [开发体系](web/applet/index.md)
  - [双线程模型](web/applet/thread_model.md)
  - [渲染层原理](web/applet/render.md)
  - [数据通信机制](web/applet/communication.md)

## 架构设计

### 设计模式
- [模式实践](web/design/index.md)
  - [创建型模式](web/design/creational.md)
  - [结构型模式](web/design/structural.md)
  - [行为型模式](web/design/behavioral.md)

### 算法体系
- [数据结构](web/algorithm/data_structure.md)
- [经典算法](web/algorithm/classic.md)
  - [排序算法](web/algorithm/sort.md)
  - [搜索算法](web/algorithm/search.md)

## 服务端技术

### Linux
- [系统运维](web/linux/index.md)
  - [权限管理](web/linux/permission.md)
  - [进程管理](web/linux/process.md)
  - [网络配置](web/linux/network.md)

### 网络协议
- [HTTP全景](web/http/protocol.md)
  - [缓存策略](web/http/cache.md)
  - [安全机制](web/http/security.md)
  - [跨域解决方案](web/http/cors.md)
  - [身份认证机制](web/http/auth.md)
  - [协议演进](web/http/http2_http3.md)

## 前沿领域

### TypeScript
- [类型系统](web/typescript/index.md)
  - [基础类型](web/typescript/basic_types.md)
  - [高级类型](web/typescript/advanced_types.md)
  - [类型推断](web/typescript/type_inference.md)
  - [装饰器原理](web/typescript/decorators.md)
  - [工程实践](web/typescript/engineering.md)
  - [性能优化](web/typescript/performance.md)

### WebAssembly
- [核心原理](web/wasm/index.md)
  - [编译体系](web/wasm/compile.md)
  - [内存模型](web/wasm/memory.md)
  - [JS互操作](web/wasm/js_interop.md)