---
home: true
title: 首页
heroImage: /images/hero.png
actions:
  - text: 快速上手
    # link: /guide/getting-started.html
    link: /guide/data-structure.html
    type: primary
  - text: 项目简介
    # link: /guide/
    link: /guide/data-structure.html
    type: secondary
# features:
#   - title: 简洁至上
#     details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
#   - title: Vue 驱动
#     details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
#   - title: 高性能
#     details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

### 使用

<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash
# 在你的项目中安装

# 安装依赖
pnpm install

# 启动服务
pnpm run docs:dev

# 构建静态文件
pnpm run docs:build
```
  </CodeGroupItem>
</CodeGroup>
