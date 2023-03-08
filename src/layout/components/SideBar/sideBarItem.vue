<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren)
      "
    >
      <app-link :path="resolvePath(onlyOneChild.path)">
        <el-menu-item>
          <item
            :icon="onlyOneChild.meta.icon"
            :title="onlyOneChild.meta.title"
          ></item>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <item :icon="item.meta.icon" :title="item.meta.title"></item>
      </template>
      <SideBarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :basePath="resolvePath(child.path)"
      ></SideBarItem>
    </el-submenu>
  </div>
</template>

<script>
import appLink from "./appLink.vue";
import item from "./item.vue";
import { isExternal } from "@/utils/validate";
export default {
  name: "SideBarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  components: {
    "app-link": appLink,
    item,
  },
  data() {
    return {
      onlyOneChild: "",
    };
  },
  mounted() {
  },
  methods: {
    hasOneShowingChild(children = [], route) {
      // 过滤出在菜单显示的路由,filter方法返回 true 保留该元素，false 则不保留
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // 如果所有子路由中只有一个显示就启用此临时变量
          this.onlyOneChild = item;
          return true;
        }
      });
      // 如果只有一个子路由则默认返回
      if (showingChildren.length == 1) {
        return true;
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...route, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    },
    // 将跳转路径拼接起来
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      } else {
        return this.basePath == "/"
          ? this.basePath + routePath
          : this.basePath + "/" + routePath;
      }
    },
  },
};
</script>

<style lang="scss">

</style>