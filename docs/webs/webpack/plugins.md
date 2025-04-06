# Webpack Plugins

## 什么是Plugin

Plugin（插件）是webpack的另一个核心概念，它赋予了webpack更加强大的能力。Plugin可以执行比Loader更广泛的任务，从打包优化和压缩，到重新定义环境中的变量。插件目的在于解决loader无法实现的其他事。

## Plugin的工作原理

Webpack插件是一个具有apply方法的JavaScript对象。apply方法会被webpack compiler调用，并且在整个编译生命周期都可以访问compiler对象。

```javascript
class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('MyPlugin', (compilation, callback) => {
      // 在生成文件中的内容之前做一些操作
      console.log('This is an example plugin!');
      callback();
    });
  }
}
```

## 常用的Plugin

### HtmlWebpackPlugin

简化HTML文件的创建，为你的webpack包提供服务。这对于在文件名中包含哈希值的webpack bundle尤其有用，因为它会自动更新HTML文件里的引用。

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
};
```

### MiniCssExtractPlugin

将CSS提取到单独的文件中，为每个包含CSS的JS文件创建一个CSS文件。

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  }
};
```

### CleanWebpackPlugin

在每次构建前清理/删除构建文件夹。

```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin()
  ]
};
```

### DefinePlugin

允许在编译时创建配置的全局常量，这可能会对开发模式和发布模式的构建允许不同的行为非常有用。

```javascript
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'DEBUG': false
    })
  ]
};
```

### CopyWebpackPlugin

将单个文件或整个目录复制到构建目录。

```javascript
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }
      ]
    })
  ]
};
```

### TerserPlugin

使用Terser压缩JavaScript。

```javascript
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
};
```

### CompressionWebpackPlugin

准备压缩版本的资源，提供Content-Encoding。

```javascript
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};
```

## 自定义Plugin

创建一个自定义的webpack插件需要以下步骤：

1. 创建一个JavaScript类
2. 在类的prototype上定义一个apply方法
3. 指定一个绑定到webpack自身的事件钩子
4. 处理webpack内部实例的特定数据
5. 功能完成后调用webpack提供的回调

```javascript
class MyPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('MyPlugin', (compilation, callback) => {
      // 创建一个新的文件
      compilation.assets['filelist.md'] = {
        source: function() {
          return 'File list:\n\n' + Object.keys(compilation.assets).join('\n');
        },
        size: function() {
          return this.source().length;
        }
      };

      callback();
    });
  }
}

module.exports = MyPlugin;
```

## 总结

Plugin是webpack中另一个强大的概念，它们可以执行各种任务，从打包优化和压缩，到重新定义环境中的变量。合理使用插件可以大大提高开发效率和应用性能。