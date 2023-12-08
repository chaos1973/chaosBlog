---
sticky: 999
description: 1分钟内完成自己的博客创建
descriptionHTML: '
<span style="color:var(--description-font-color);">1分钟内完成自己的博客创建</span>
<pre style="background-color: #292b30; padding: 15px; border-radius: 10px;" class="shiki material-theme-palenight"><code>
    <span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@sugarat/theme@latest</span></span>
</code>
</pre>'
tag:
 - SOP
top: 1
sidebar: false
---

# 快速上手
1分钟内完成自己的博客创建

## 快速创建项目 
使用 [@sugarat/create-theme](https://github.com/ATQQ/sugar-blog/tree/master/packages/create-theme) 快速创建模板项目

:::code-group
```sh [npm]
npm create @sugarat/theme@latest
```
```sh [yarn]
yarn create @sugarat/theme
```
```sh [pnpm]
pnpm create @sugarat/theme
```
:::

当然你也可以自定义项目名创建
:::code-group
```sh [npm]
npm create @sugarat/theme@latest my-first-blog
```
```sh [yarn]
yarn create @sugarat/theme my-first-blog
```
```sh [pnpm]
pnpm create @sugarat/theme my-first-blog
```
:::

接下来按照 [操作指引](https://app.warp.dev/block/lZAFeRnRFgOcsRSUOU5ApV) 进行操作即可

![](https://img.cdn.sugarat.top/mdImg/MTY4OTQyMDE1NTcxMA==689420155710)

① 切换到项目的目录
```sh
cd my-blog
```

② 安装依赖
::: code-group

```sh [pnpm]
pnpm install
```

```sh [安装 PNPM]
# 如果你没有 PNPM 请先安装
npm i -g pnpm
```
:::

③ 开发启动
```sh
pnpm dev
```

![](https://img.cdn.sugarat.top/mdImg/MTY5NTIxODUyMDU4MQ==695218520581)

你就会得到一个这样的页面

![](https://img.cdn.sugarat.top/mdImg/MTY3Njk4OTk2Mjc0Nw==676989962747)

④ 构建产物
```sh
pnpm build
```
![](https://img.cdn.sugarat.top/mdImg/MTY5NTIxODYwNzA3Nw==695218607077)

默认会开启内置的离线全文搜索（基于 `pagefind` 实现）

如果不需要可以在 `docs/.vitepress/blog-theme.ts` 中关闭
* 如果`npx pagefind` 时间过长，可以手动将其安装为项目依赖 `pnpm add pagefind`
```ts
const blogTheme = getThemeConfig({
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // 如果npx pagefind 时间过长，可以手动将其安装为项目依赖 pnpm add pagefind
  search: false,
});
```

⑤ 预览构建产物
```sh
pnpm serve
```

![](https://img.cdn.sugarat.top/mdImg/MTY5NTIxODY1NzAzNg==695218657036)

## 升级

如果主题更新了，升级主题，原项目只需执行如下指令即可
```sh
pnpm up @sugarat/theme

# 更新 vitepress 版本（通常安装最新的即可，主题包每次更新不出意外都会使用最新的VitePress）
pnpm add vitepress@latest
```

## 更多
* [主题配置：首页&文章](https://theme.sugarat.top/config/frontmatter.html) - 主题提供的一些 `frontmatter`
* [主题配置：全局](https://theme.sugarat.top/config/global.html) - 主题提供的额外能力
* [主题配置：样式](https://theme.sugarat.top/config/style.html) - 自定义博客样式介绍
* [主题配置：组件能力](https://theme.sugarat.top/config/component.html) - 自定义博客样式介绍