import { defineConfig,getThemeConfig} from '@sugarat/theme/node'
//import { blogTheme } from './blog-theme'
const blogTheme = getThemeConfig({

  recommend: {
    title: '🔍 相关文章',
    nextText: '换一组',
    pageSize: 42,
    empty: '暂无相关文章',
    style: 'card',

  },
  themeColor: "el-green",

})

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  // 继承博客主题配置
  extends: blogTheme,
  lang: 'zh-cn',
  base: '/chaos-front/',
  title: "Chao's Blog",
  description: 'Just playing around.',
  head: [
    [
      'link',{ rel: 'icon', href: '/head.png' }
    ]
  ],
  vite: {
    optimizeDeps: {
      include: ['element-plus'],
      exclude: ['@sugarat/theme']
    }
  },
  lastUpdated: true,

  themeConfig: {
    outlineTitle: "目录结构",
    lastUpdatedText: '上次更新于',
    logo: '/logo.png',

    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '首页', link: '/' },
      { text: '导航站', link: '/config' },
      { text: 'java',
        items: [
            { text: 'java基础',link: '/content/java/01.Java基础 - SE/01.初识java' },
            { text: 'java进阶',link: '/content/java/03.Java进阶 - SE/07.JavaSE - 反射' },
          { text: 'java集合',link: '/content/java/05.Java集合 - Collection/01.集合概序' },
          { text: 'java并发',link: '/content/java/10.Java并发 - JUC/02.JUC - 概念' },
          { text: 'java容器',link: '/content/java/15.Java容器 - Web/01.基本概念' },
          {
            items:[
              {text: 'JVM上篇',link: '/content/java/20.Java底层 - JVM/01.JVM上篇-内存与垃圾回收篇/01.JVM与Java体系结构'},
              {text: 'JVM中篇',link: '/content/java/20.Java底层 - JVM/02.JVM中篇-字节码与类的加载篇/01.class文件结构'},
              {text: 'JVM下篇',link: '/content/java/20.Java底层 - JVM/03.JVM下篇-性能监控与调优篇/01.概述篇'},
              {text: 'JVM总结',link: '/content/java/20.Java底层 - JVM/04.个人总结/01.jvm相关理论知识'}

            ]},
          { text: 'java版本',link: '/content/java/25.Java版本 - 新特性/01.Java8 - 新特性' },
          { text: 'java知识总结',link: '/content/java/28.Java知识总结/01.java深度克隆' },
          //{ text: 'java',link: '/java/01.Java基础 - SE/01.初识java' },

        ]},
      { text: '数据库',  items: [
          { text: 'cypher图数据库',link: '/content/database/01.cypher图数据/01.图数据库及cypher语句' },
          {
            items: [
              {text: '  宋红康讲解mysql', link: '/content/database/02.mysql数据库/01.mysql尚硅谷宋红康/01.第00章_写在前面'},
              {text: '  其他人讲解mysql', link: '/content/database/02.mysql数据库/05.关系数据库 - MySQL/03.MySQL - 索引介绍'},
              {text: '  mysql性能优化', link: '/content/database/02.mysql数据库/05.mysql性能优化/04.MySQL优化数据库结构的3种方法'},
              {text: '  mysql数据库备份与恢复', link: '/content/database/02.mysql数据库/03.mysql数据库备份与回复/01.Mysql备份类型'},
              {text: '  mysql日志', link: '/content/database/02.mysql数据库/04.mysql日志/01.MySQL日志及分类'},
              {text: '  mysql总结', link: '/content/database/02.mysql数据库/02.总结/01.mysql错误码'}
            ]
          },
          { text: 'redis数据库',link: '/content/database/10.缓存数据库 - Redis/02.Redis - 介绍' },
          { text: 'ElasticSearch',link: '/content/database/15.搜索数据库 - ElasticSearch/02.ElasticSearch - 基础概念' },
          { text: 'java底层',link: '/content/java/01.Java基础 - SE/01.初识java' },
          { text: 'java版本',link: '/content/java/01.Java基础 - SE/01.初识java' },
          { text: 'java知识总结',link: '/content/java/01.Java基础 - SE/01.初识java' },
          //{ text: 'java',link: '/java/01.Java基础 - SE/01.初识java' },

        ]},
      { text: 'spring生态', link: '/config' },
      { text: '部署', link: '/config' },
      { text: '前端',
        items: [
          { text: 'vue',link: '/content/front/01.vue/01.vue中的vuex'},
          { text: 'javascript', link: '/content/front/25.JavaScript文章/01.33个非常实用的JavaScript一行代码' },
          { text: '前端笔记', link: '/content/front/40.学习笔记/05.《JavaScript高级程序设计》笔记' },
        ]
      },
      { text: '开发工具', link: '/config' },
      { text: '测试', link: '/config' },
      { text: '留言区', link: '/config' },
      { text: 'TODO', link: '/config' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ATQQ/sugar-blog/tree/master/packages/theme'
      },
     /* {
        icon: 'Gitee',
        link: 'https://github.com/ATQQ/sugar-blog/tree/master/packages/theme'
      }*/
    ],
    sidebar: [
      {
        text: 'Section Title A',
        collapsed: true,
        items: [],

      }
    ]
  }
})
