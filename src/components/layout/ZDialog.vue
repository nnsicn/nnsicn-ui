<template>
  <el-dialog
    :visible.sync="visible"
    :modal="true"
    :modal-append-to-body="true"
    :append-to-body="true"
    :lock-scroll="true"
    :close-on-click-modal="false"
    :before-close="beforeClose"
    :destroy-on-close="true"
  >
    <slot name="title" slot="title"></slot>
    <slot name="footer" slot="footer"></slot>
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  name: "z-dialog",
  props: {
    beforeClose: {
      type: Function,
      default: (done) => done(),
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
  },
};
</script>

<style>
</style>