# React 学习指南

欢迎来到 React 学习板块。这里涵盖了 React 的核心概念和开发技巧。

## 核心概念

- [JSX](jsx.md) - JavaScript 和 HTML 的结合
- [组件](components.md) - 函数组件和类组件
- [动画](animation.md) - React 动画实现
- [Props](props.md) - 组件的输入
- [State](state.md) - 组件的状态
- [生命周期](lifecycle.md) - 组件的生命周期方法
- [Hooks](hooks.md) - 函数组件的状态和副作用管理

## 常用工具

- [Create React App](create_react_app.md) - 快速创建 React 应用
- [React Developer Tools](react_devtools.md) - 浏览器调试工具
- [React Router](react_router.md) - 路由管理
- [Redux](redux.md) - 状态管理
- [Styled Components](styled_components.md) - CSS-in-JS 解决方案

## 高级特性

- [Context API](context_api.md) - 跨组件共享状态
- [高阶组件 (HOC)](hoc.md) - 组件复用模式
- [代码分割](code_splitting.md) - 提升性能
- [服务端渲染 (SSR)](ssr.md) - 提升 SEO 和性能
- [React Concurrent Mode](concurrent_mode.md) - 并发模式

## 所有文件
!!! note "文件列表"
    以下是本目录下的所有文件：

    ```bash
    {运行 dir /b 命令得到的文件列表}
    ```

## 示例代码

### 函数组件

```javascript
import React from 'react';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

### 使用 Hooks

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

## 学习资源

- [React 官方文档](https://reactjs.org/)
- [React 中文文档](https://zh-hans.reactjs.org/)
- [React 入门教程](https://reactforbeginners.com/)
- [React Patterns](https://reactpatterns.com/)
- [Awesome React](https://github.com/enaqx/awesome-react)
