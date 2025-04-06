# 代码分割(Code Splitting)

## 什么是代码分割

代码分割是webpack的一个重要特性，它允许你将代码分成不同的包(bundle)，然后可以按需加载或并行加载这些文件。代码分割可以用来获取更小的包(bundle)和控制资源加载优先级，如果使用合理，会极大影响加载时间。

## 代码分割的方式

### 入口起点(Entry Points)

这是最简单直观的代码分割方式——使用entry配置手动分割代码。

```javascript
module.exports = {
  entry: {
    app: './src/app.js',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].bundle.js'
  }
};
```

这种方式的缺点：

- 如果入口chunks之间包含重复的模块，那些重复模块会被引入到各个bundle中。
- 这种方式不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。

### 防止重复(Prevent Duplication)

使用SplitChunksPlugin来去除和分离chunk，这是webpack内置的插件，不需要额外安装。

```javascript
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
```

### 动态导入(Dynamic Imports)

使用ECMAScript的动态import()语法来实现代码分割。

```javascript
// 使用动态导入
import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
  console.log(_.join(['Hello', 'webpack'], ' '));
}).catch(error => 'An error occurred while loading the component');
```

## 预获取/预加载模块(Prefetch/Preload Module)

webpack v4.6.0+ 增加了对预获取和预加载的支持。

- prefetch(预获取)：将来某些导航下可能需要的资源
- preload(预加载)：当前导航下可能需要资源

```javascript
// 使用预获取
import(/* webpackPrefetch: true */ './path/to/LoginModal.js');

// 使用预加载
import(/* webpackPreload: true */ './path/to/ChartingLibrary.js');
```

## 懒加载(Lazy Loading)

懒加载或者按需加载，是一种很好的优化网页或应用的方式。这种方式实际上是先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。

```javascript
// React中的代码分割和懒加载
import React, { Suspense, lazy } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}
```

## 缓存(Caching)

通过使用output.filename进行文件名替换，可以确保浏览器获取到修改后的文件。[hash]替换可以用于在文件名中包含一个构建相关(build-specific)的hash，但是更好的方式是使用[contenthash]替换，它的内容是基于文件内容的。

```javascript
module.exports = {
  output: {
    filename: '[name].[contenthash].js'
  }
};
```

## 总结

代码分割是提高Web应用性能的重要手段之一。通过合理的代码分割策略，可以显著减少初始加载时间，提高用户体验。webpack提供了多种代码分割的方式，开发者可以根据项目需求选择合适的方式。