# 前端技术体系总导航

这是一个使用 MkDocs 构建的前端技术文档网站，旨在提供全面的前端开发技术知识体系。

## 项目说明

本项目是一个综合性的前端技术文档，涵盖了以下主要领域：

- CSS 核心概念与布局系统
- JavaScript 基础与进阶
- 前端框架（Vue、React）
- Node.js 开发
- TypeScript
- 工程化工具（Webpack）
- 小程序开发
- Git 版本控制
- HTTP 网络协议
- Linux 基础

## 安装说明

1. 确保已安装 Python 3.x
2. 安装 MkDocs：
```bash
pip install mkdocs
```
3. 安装 Material 主题：
```bash
pip install mkdocs-material
```

## 本地开发

1. 克隆项目：
```bash
git clone <repository-url>
cd mkdocs
```

2. 启动本地服务器：
```bash
mkdocs serve
```

3. 在浏览器中访问 `http://127.0.0.1:8000`

## 构建部署

### 构建静态文件
```bash
mkdocs build --clean
```

### 部署到 GitHub Pages
```bash
mkdocs gh-deploy --config-file mkdocs.yml --remote-branch master
```

## 目录结构

```
.
├── docs/                # 文档源文件目录
│   ├── index.md        # 首页
│   └── webs/           # 技术文档目录
│       ├── css/        # CSS 相关文档
│       ├── JavaScript/ # JavaScript 相关文档
│       ├── NodeJS/     # Node.js 相关文档
│       ├── React/      # React 相关文档
│       ├── Vue/        # Vue 相关文档
│       └── ...         # 其他技术文档
├── mkdocs.yml          # MkDocs 配置文件
└── README.md           # 项目说明文档
```

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 文档更新

如需更新文档内容：

1. 在 `docs` 目录下相应的文件夹中添加或修改 Markdown 文件
2. 在 `mkdocs.yml` 中更新导航配置（如需要）
3. 本地预览确认无误后提交更改

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详细信息
