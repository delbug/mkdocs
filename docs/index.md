<!-- # 前端技术体系总导航 -->

## 基础能力

### CSS
- [核心概念](webs/css/index.md)
  - [盒模型](webs/css/box.md)
  - [块级格式化上下文](webs/css/BFC.md)
  - [像素与视口单位](webs/css/dp_px_dpr_ppi.md)
  - [CSS预处理器](webs/css/sass_less_stylus.md)
- 布局系统:
  - [弹性盒子布局](webs/css/flexbox.md)
  - [网格布局](webs/css/grid.md)
  - [多列布局](webs/css/column_layout.md)
  - [水平垂直居中](webs/css/center.md)
- 视觉呈现:
  - [CSS动画](webs/css/animation.md)
  - [CSS3新特性](webs/css/css3_features.md)
  - [绘制与渲染原理](webs/css/layout_painting.md)
  - [视觉滚动效果](webs/css/visual_scrolling.md)
- 实用技巧:
  - [小像素处理](webs/css/less_12px.md)
  - [隐藏元素方法](webs/css/hide_attributes.md)
  - [选择器指南](webs/css/selector.md)
  - [性能优化](webs/css/css_performance.md)
  - [响应式设计](webs/css/responsive_layout.md)

### JavaScript
- [语言核心](webs/JavaScript/index.md)
  - 基础概念:
    - [数据类型与存储](webs/JavaScript/data_type.md)
    - [类型转换机制](webs/JavaScript/type_conversion.md)
    - [作用域与闭包](webs/JavaScript/scope.md)
    - [this绑定规则](webs/JavaScript/this.md)
  - 执行模型:
    - [事件循环机制](webs/JavaScript/event_loop.md)
    - [事件模型与代理](webs/JavaScript/event_Model.md)
  - 对象系统:
    - [原型与继承](webs/JavaScript/prototype.md)
    - [new运算符原理](webs/JavaScript/new.md)
  - 函数编程:
    - [函数式编程](webs/JavaScript/functional_programming.md)
    - [柯里化与高阶函数](webs/JavaScript/function_cache.md)
    - [防抖与节流](webs/JavaScript/debounce_throttle.md)
    - [call/apply/bind](webs/JavaScript/bind_call_apply.md)
  - 性能优化:
    - [内存泄漏排查](webs/JavaScript/memory_leak.md)
    - [渲染性能提升](webs/JavaScript/visible.md)
    - [尾递归优化](webs/JavaScript/tail_recursion.md)
  - 数据处理:
    - [深浅拷贝机制](webs/JavaScript/copy.md)
    - [精度丢失问题](webs/JavaScript/loss_accuracy.md)
    - [数据结构应用](webs/JavaScript/js_data_structure.md)

### ES6+
- [新特性全解](webs/es6/index.md)
  - [模块化体系](webs/es6/module.md)
  - [异步编程方案](webs/es6/promise.md)
  - [函数特性演进](webs/es6/arrow_function.md)
  - [数据结构扩展](webs/es6/data_structure.md)

## 框架生态

### React
- [设计理念](webs/React/index.md)
  - 核心概念:
    - [Fiber架构原理](webs/React/Fiber.md)
    - [JSX转换机制](webs/React/JSX_to_DOM.md)
    - [虚拟DOM原理](webs/React/Real_DOM_Virtual_DOM.md)
  - 组件开发:
    - [类组件与函数组件](webs/React/class_function_component.md)
    - [生命周期管理](webs/React/life_cycle.md)
    - [事件处理机制](webs/React/SyntheticEvent.md)
    - [Hooks核心原理](webs/React/React_Hooks.md)
  - 状态管理:
    - [Redux工作流程](webs/React/redux.md)
    - [中间件机制](webs/React/Redux_Middleware.md)
    - [状态更新机制](webs/React/setState.md)
  - 性能优化:
    - [渲染性能优化](webs/React/Improve_performance.md)
    - [服务端渲染方案](webs/React/server_side_rendering.md)
    - [组件懒加载](webs/React/improve_render.md)

### Vue
- [响应式原理](webs/vue/index.md)
  - [Composition API](webs/vue3/composition_api.md)
  - [响应式系统](webs/vue3/reactivity.md)
  - [生命周期钩子](webs/vue3/lifecycle.md)
  - [路由实现原理](webs/vue3/router.md)
  - [状态管理方案](webs/vue3/pinia.md)
  - [性能优化](webs/vue3/performance.md)
  - [服务端渲染](webs/vue3/ssr.md)

## 工程实践

### Node.js
- [运行时原理](webs/NodeJS/index.md)
  - 核心模块:
    - [缓冲区(Buffer)](webs/NodeJS/Buffer.md)
    - [全局对象](webs/NodeJS/global.md)
    - [模块系统](webs/NodeJS/nodejs.md)
    - [事件循环机制](webs/NodeJS/event_loop.md)
  - 文件系统:
    - [文件操作(fs)](webs/NodeJS/fs.md)
    - [流处理(Stream)](webs/NodeJS/Stream.md)
    - [文件上传处理](webs/NodeJS/file_upload.md)
  - 进程管理:
    - [进程控制(process)](webs/NodeJS/process.md)
    - [性能优化](webs/NodeJS/performance.md)
  - 事件机制:
    - [事件触发器(EventEmitter)](webs/NodeJS/EventEmitter.md)

### Webpack
- [构建原理](webs/webpack/index.md)
  - [构建流程](webs/webpack/build_process.md)
  - [热更新机制](webs/webpack/HMR.md)
  - [性能优化](webs/webpack/performance.md)
  - [代理配置](webs/webpack/proxy.md)
  - 插件机制:
    - [Loader原理](webs/webpack/Loader.md)
    - [Plugin原理](webs/webpack/Plugin.md)
    - [常用插件](webs/webpack/Loader_Plugin.md)
  - [构建优化](webs/webpack/improve_build.md)
  - [其他构建工具](webs/webpack/Rollup_Parcel_snowpack_Vite.md)

### Git
- [版本控制](webs/git/index.md)
  - [基础概念](webs/git/Version_control.md)
  - [常用命令](webs/git/command.md)
  - [HEAD与工作区](webs/git/HEAD_tree_index.md)
  - 分支管理:
    - [分支操作](webs/git/fork_clone_branch.md)
    - [冲突处理](webs/git/conflict.md)
  - 高级操作:
    - [Pull与Fetch](webs/git/git_pull__git_fetch.md)
    - [Rebase与Merge](webs/git/git_rebase__git_merge.md)
    - [Reset与Revert](webs/git/git_reset__git_revert.md)
    - [暂存管理](webs/git/git_stash.md)

### 小程序
- [开发体系](webs/applet/index.md)
  - [双线程模型](webs/applet/thread_model.md)
  - [渲染层原理](webs/applet/render.md)
  - [数据通信机制](webs/applet/communication.md)

## 架构设计

### 设计模式
- [模式实践](webs/design/index.md)
  - [创建型模式](webs/design/creational.md)
  - [结构型模式](webs/design/structural.md)
  - [行为型模式](webs/design/behavioral.md)

### 算法体系
- [数据结构](webs/algorithm/data_structure.md)
- [经典算法](webs/algorithm/classic.md)
  - [排序算法](webs/algorithm/sort.md)
  - [搜索算法](webs/algorithm/search.md)

## 服务端技术

### Linux
- [系统运维](webs/linux/index.md)
  - [权限管理](webs/linux/permission.md)
  - [进程管理](webs/linux/process.md)
  - [网络配置](webs/linux/network.md)

### 网络协议
- [HTTP全景](webs/http/protocol.md)
  - [缓存策略](webs/http/cache.md)
  - [安全机制](webs/http/security.md)
  - [跨域解决方案](webs/http/cors.md)
  - [身份认证机制](webs/http/auth.md)
  - [协议演进](webs/http/http2_http3.md)

## 前沿领域

### TypeScript
- [类型系统](webs/typescript/index.md)
  - [基础类型](webs/typescript/basic_types.md)
  - [高级类型](webs/typescript/advanced_types.md)
  - [类型推断](webs/typescript/type_inference.md)
  - [装饰器原理](webs/typescript/decorators.md)
  - [工程实践](webs/typescript/engineering.md)
  - [性能优化](webs/typescript/performance.md)

### WebAssembly
- [核心原理](webs/wasm/index.md)
  - [编译体系](webs/wasm/compile.md)
  - [内存模型](webs/wasm/memory.md)
  - [JS互操作](webs/wasm/js_interop.md)