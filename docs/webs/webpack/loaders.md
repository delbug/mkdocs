# Webpack Loaders

## 什么是Loader

Loader是webpack的核心概念之一，它让webpack能够处理那些非JavaScript文件（webpack自身只理解JavaScript和JSON）。Loader可以将所有类型的文件转换为webpack能够处理的有效模块，然后你就可以利用webpack的打包能力，对它们进行处理。

## Loader的特性

- Loader 支持链式调用。链中的每个loader会将转换应用在已处理过的资源上。一组链式的loader将按照相反的顺序执行。第一个loader将其结果（被转换后的资源）传递给下一个loader，依此类推。
- Loader 可以是同步的，也可以是异步的。
- Loader 运行在Node.js中，并且能够执行任何操作。
- Loader 可以通过options对象配置。
- 除了常见的通过package.json的main字段加载，还可以在module.rules中使用loader字段直接引用一个模块。

## 常用的Loader

### 样式相关

#### css-loader

解析CSS文件中的`@import`和`url()`，并将它们视为模块请求。

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  }
};
```

#### style-loader

将模块导出的内容作为样式添加到DOM中。通常与css-loader一起使用。

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

#### sass-loader / less-loader / stylus-loader

将SASS/LESS/Stylus文件编译为CSS。

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
```

### 文件相关

#### file-loader

将文件发送到输出目录，并返回（相对）URL。

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  }
};
```

#### url-loader

像file-loader一样工作，但如果文件小于限制，可以返回data URL。

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  }
};
```

### JavaScript相关

#### babel-loader

使用Babel转换JavaScript文件。

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```

#### ts-loader

将TypeScript转换为JavaScript。

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
```

### HTML相关

#### html-loader

导出HTML为字符串，需要引用的静态资源会被处理为webpack依赖。

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  }
};
```

## 自定义Loader

创建一个自定义loader非常简单，只需要导出一个函数：

```javascript
module.exports = function(source) {
  // 对source进行转换...
  return transformedSource;
};
```

## 总结

Loader是webpack中非常重要的概念，它使webpack能够处理各种类型的文件，并将它们转换为有效的模块。选择合适的loader可以大大简化开发流程，提高开发效率。