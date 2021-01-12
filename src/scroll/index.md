---
title: Scroll
nav:
  path: '/component'
  title: 组件
---

# Scroll

基于[better-scroll](https://better-scroll.github.io/docs/zh-CN/guide/#betterscroll-%E6%98%AF%E4%BB%80%E4%B9%88)封装的滚动组件。
目前只支持`pullup`, `pulldown`事件， 后续有需求还需要暴露新的事件。
## 代码示例

<code src="./demo/index" />

## api

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| betterScrollOptions | [better-scroll的配置项](https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html) | `object` | - | |
| hasRequestText | 是否有加载的文字， 有的时候一次就请求了所有接口， 无需分页 | `boolean` | true | |
| requestDone | 当上拉页面加载全部数据后， 控制底部文字友好提示 | `boolean` | false | |
| pullup | 事件： 用于上拉加载 | `function` | - | |
| pulldown | 事件： 用于下拉刷新 | `function` | - | |