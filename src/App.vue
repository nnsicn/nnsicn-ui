<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// 创建和编辑的页面使用的是同一个component,默认情况下当这两个页面切换时并不会触发vue的created或者mounted钩子，
// 官方说你可以通过watch $route的变化来做处理，但其实说真的还是蛮麻烦的。后来发现其实可以简单的在 router-view上加上一个唯一的key，
// 来保证路由切换时都会重新渲染触发钩子了。这样简单的多了。
export default {
    name:"App",
}
</script>

<style>

</style>