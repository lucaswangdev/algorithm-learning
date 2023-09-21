import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  // set site base to default value
  base: '/algorithm-learning/',
  lang: 'zh-CN',
  title: '算法学习',
  description: '算法学习，JavaScript，前端',
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      // { text: '指南', link: '/guide/' },
    ],
    sidebar: [
      // SidebarItem
      {
        text: '指南',
        link: '/guide/',
        collapsible: true,
        children: [
          // SidebarItem
          // 字符串 - 页面文件路径
          // {
          //   text: '数据结构',
          //   link: '/guide/data-structure',
          //   collapsible: true,
          //   // children: [],
          // },
          '/guide/data-structure.md',
          // '/guide/a.md',
          // '/guide/b.md',
          // {
          //   text: 'github',
          //   link: 'https://github.com',
          //   children: [],
          // },
        ],
      },
    ],
    sidebarDepth: 3
  }),
})