<template>
  <el-scrollbar>
    <el-menu
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
    >
      <side-bar-item
        v-for="route in asyncRoutes"
        :key="route.path"
        :item="route"
        :basePath="route.path"
      ></side-bar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import variables from "@/style/variables.scss";
import { asyncRoutes } from "@/router/index";
import sideBarItem from "./sideBarItem.vue";
export default {
  data() {
    return {
      asyncRoutes,
    };
  },
  components: {
    "side-bar-item": sideBarItem,
  },
  computed: {
    variables() {
      return variables;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
// @import "~@/style/variables.scss";
// .el-menu{
//   background-color: $menuBg;
// }
</style>