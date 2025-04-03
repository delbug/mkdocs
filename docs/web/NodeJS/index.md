# Node.js 学习指南

欢迎来到 Node.js 学习板块。这里涵盖了 Node.js 的核心模块和高级特性。

## 基础知识

- [Node.js 简介](nodejs.md)
- [模块加载顺序](require_order.md)
- [文件系统](fs.md)
- [Buffer](Buffer.md)
- [Stream](Stream.md)
- [EventEmitter](EventEmitter.md)
- [事件循环](event_loop.md)
- [进程](process.md)

## 核心模块

- [文件系统 (fs)](fs.md)
- [HTTP 模块](http.md)
- [路径处理 (path)](path.md)
- [操作系统信息 (os)](os.md)
- [事件驱动 (events)](events.md)
- [流操作 (stream)](stream.md)
- [加密和解密 (crypto)](crypto.md)

## Web 开发

- [中间件](middleware.md)
- [文件上传](file_upload.md)
- [分页](paging.md)
- [JWT 认证](jwt.md)

## 数据库

- [MySQL](mysql.md)
- [MongoDB](mongodb.md)
- [Redis](redis.md)
- [ORM 工具](orm.md)

## 高级特性

- [性能优化](performance.md)
- [全局对象](global.md)

## 部署运维

- [PM2 进程管理](pm2.md)
- [Nginx 配置](nginx.md)
- [Docker 容器化](docker.md)
- [CI/CD](ci_cd.md)
- [监控告警](monitoring.md)

## 示例代码

### 创建 HTTP 服务器

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

## 学习资源

- [Node.js 官方文档](https://nodejs.org/zh-cn/docs/)
- [Express 官方文档](https://expressjs.com/zh-cn/)
- [Koa 官方文档](https://koajs.com/)
- [Node.js 中文网](http://nodejs.cn/)
- [The Node.js Handbook](https://flaviocopes.com/node-handbook/)