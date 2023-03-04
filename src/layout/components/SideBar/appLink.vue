<template>
  <!-- component是vue自带的组件，通过is属性来决定渲染成什么标签 -->
  <component :is="type" v-bind="linkProps(path)">
    <slot></slot>
  </component>
</template>

<script>
import { isExternal } from "@/utils/validate.js";
export default {
  props: {
    path: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    isExternal() {
      // 多次用到这个函数，提取成计算属性
      return isExternal(this.path);
    },
    type() {
      if (this.isExternal) {
        return "a";
      } else {
        return "router-link";
      }
    },
  },
  methods: {
    linkProps(path) {
      if (this.isExternal) {
        return {
          href: path,
          target: "_blank",
        };
      }else{
        return {
            to:path
        }
      }
    },
  },
};
</script>

<style>
</style>