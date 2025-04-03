# mkdocs


## 预览和部署
> MkDocs支持在部署之前，实时预览网页内容

- mkdocs serve -a 0.0.0.0:8000
  - 其中的 -a 选项用于指定绑定的 <IP:PORT> ，如果不指定，则默认为 localhost:8000
  - 如果预览发现问题，直接修改文档源文件，MkDocs检测到文件发生变化会自动更新预览内容预览如果没有发现问题，接下来就可以部署到GitHub了

- mkdocs gh-deploy --clean
  - 执行结束后，查看GitHub仓库，发现多了一个 gh-pages 分支，这个分支里存放的就是 site 文件夹中的内容
