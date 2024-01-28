# Docs folder

docs "文件夹存放所有标记文件。页面结构松散地映射到网站上的路由，因为路径可以在 frontmatter 中更改.

## Versioning

该文件夹还可以包含组件、资产和其他任何需要在运行 docusaurus 版本控制脚本时进行版本控制的内容。例如，如果有一个页面组件只与当前版本 Ionic 中的 "布局 "部分相关，则可将其添加到 "docs/layout/"中的"_components/"文件夹。当运行版本化脚本时，该组件将被复制到 `versioned_docs/version-{X}/layout/_components/`，现在在 `docs/layout/_components/` 中将有一个单独的组件，可以删除或更新到最新版本。同样的概念也适用于图片和其他文件.

如果要跨版本共享组件，可将其放在 `src/components/`。如果图像和其他服务文件需要跨版本共享，则可放在 `static/` 中。.

## Auto Generated Files

这些目录中的所有标记符文件均由 [脚本](/scripts)生成:

- `docs/api/`
- `docs/cli/commands/`
- `docs/native/`
