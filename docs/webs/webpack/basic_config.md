# Webpack基础配置

## 什么是Webpack配置

Webpack是一个现代JavaScript应用程序的静态模块打包器，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle。

## 基础配置结构

一个基本的webpack配置文件通常包含以下几个部分：

```javascript
module.exports = {
  entry: './src/index.js',      // 入口文件
  output: {                     // 输出配置
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {                     // 模块配置
    rules: []
  },
  plugins: [],                  // 插件配置
  mode: 'development'           // 模式配置
};
```

## 入口(Entry)

入口起点指示webpack应该使用哪个模块来作为构建其内部依赖图的开始。

```javascript
module.exports = {
  entry: './src/index.js'
};
```

也可以配置多入口：

```javascript
module.exports = {
  entry: {
    app: './src/app.js',
    admin: './src/admin.js'
  }
};
```

## 输出(Output)

输出属性告诉webpack在哪里输出它所创建的bundles，以及如何命名这些文件。

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
```

对于多入口，可以使用占位符确保每个文件具有唯一的名称：

```javascript
module.exports = {
  entry: {
    app: './src/app.js',
    admin: './src/admin.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

## 模式(Mode)

通过选择 `development`, `production` 或 `none` 之中的一个，来设置 `mode` 参数，可以启用webpack内置的优化。

```javascript
module.exports = {
  mode: 'production'
};
```

## 模块(Module)

这些选项决定了如何处理项目中的不同类型的模块。

```javascript
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.js$/, use: 'babel-loader' }
    ]
  }
};
```

## 解析(Resolve)

这些选项能设置模块如何被解析。

```javascript
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
};
```

## 开发服务器(DevServer)

webpack-dev-server 能够用于快速开发应用程序。

```javascript
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
```

## 总结

基础配置是webpack使用的基石，理解这些配置项对于高效使用webpack至关重要。随着项目的复杂度增加，可能需要更多高级配置来满足需求。