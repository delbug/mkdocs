# Tree Shaking

## 什么是Tree Shaking

Tree Shaking是一个术语，通常用于描述移除JavaScript上下文中的未引用代码(dead-code)。它依赖于ES2015模块系统中的静态结构特性，例如import和export。这个术语和概念实际上是由ES2015模块打包工具rollup首次提出的。

## Tree Shaking的工作原理

Tree Shaking的工作原理是通过分析ES模块的依赖关系，识别出被使用和未被使用的代码，然后在打包时移除那些未被使用的代码。这个过程依赖于ES模块的静态结构，因为ES模块的导入导出是静态的，在编译时就可以确定模块之间的依赖关系。

## 在Webpack中启用Tree Shaking

### 使用ES模块语法

Tree Shaking只适用于ES模块（即使用import和export的模块），不适用于CommonJS模块（使用require和module.exports的模块）。因此，确保你的代码使用ES模块语法。

```javascript
// 使用ES模块语法
import { add } from './math';

// 不要使用CommonJS语法
// const { add } = require('./math');
```

### 配置mode为production

在webpack 4+中，只需将mode设置为production，就会自动启用Tree Shaking。

```javascript
module.exports = {
  mode: 'production'
};
```

### 使用sideEffects标记

在package.json中添加sideEffects属性，告诉webpack哪些文件是有副作用的。

```json
{
  "name": "your-project",
  "sideEffects": false
}
```

如果你的项目中有一些文件需要保留（即使它们没有被直接导入），可以将sideEffects设置为一个数组：

```json
{
  "name": "your-project",
  "sideEffects": [
    "*.css",
    "*.scss"
  ]
}
```

### 使用optimization.usedExports

在webpack配置中启用usedExports选项，这会告诉webpack确定每个模块的已使用导出。

```javascript
module.exports = {
  optimization: {
    usedExports: true
  }
};
```

## Tree Shaking的限制

### 副作用

如果一个模块有副作用（即导入模块时会执行一些影响全局状态的代码），那么即使这个模块的导出没有被使用，webpack也不会移除它。

```javascript
// 这个模块有副作用，不会被Tree Shaking移除
import './side-effects';
```

### 动态导入

动态导入的模块不会被Tree Shaking优化。

```javascript
// 动态导入，不会被Tree Shaking优化
import('./module').then(module => {
  // 使用module
});
```

## 检查Tree Shaking效果

可以使用webpack-bundle-analyzer插件来可视化你的包，查看Tree Shaking的效果。

```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};
```

## 最佳实践

1. 使用ES模块语法
2. 避免在模块中有副作用
3. 使用sideEffects标记
4. 使用production模式
5. 定期检查打包结果

## 总结

Tree Shaking是一种通过移除未使用代码来优化JavaScript包大小的技术。在webpack中，通过使用ES模块语法、配置mode为production、使用sideEffects标记和启用usedExports选项，可以有效地启用Tree Shaking。然而，Tree Shaking也有一些限制，如副作用和动态导入。通过理解这些概念和限制，可以更好地优化你的JavaScript应用。