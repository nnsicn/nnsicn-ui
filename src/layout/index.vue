<template>
  <el-container class="app-wrapper">
    <el-aside width="200px">
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sidebar from "./components/SideBar/index.vue";
import AppMain from "./components/AppMain.vue";
export default {
  name: "Layout",
  components: {
    "side-bar": sidebar,
    "app-main": AppMain,
  },
};
</script>

<style lang="scss">
@import "~@/style/variables.scss";
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  .el-aside {
    // background-color: #{$menuBg};
    background-color: $menuBg;
  }
}
</style>