<template>
  <el-dialog
  class="z_dialog"
    :visible.sync="visible"
    :modal="true"
    :modal-append-to-body="true"
    :append-to-body="true"
    :lock-scroll="true"
    :close-on-click-modal="false"
    :before-close="beforeClose"
    :destroy-on-close="true"
    @close="close"
  >
    <slot name="title" slot="title">
      <span>提示</span>
    </slot>
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
      result:null,
      resolve:"",
      reject:"",
      confirmClose:false,//用来记录点击的是confirm还是cancel
    };
  },
  methods: {
    open() {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
        this.visible = true;
      });
      return this.promise;
    },
    close() {
      if(this.confirmClose){
        this.resolve(this.result)
      }else{
        this.reject()
      }
    },
    cancel() {
      this.confirmClose = false;
      this.visible = false;
    },
    confirm(arg){
      this.confirmClose = true;
      this.result = arg;
      this.visible = false
    },
  },
};
</script>

<style lang="scss">
.z_dialog{
  width: 100%;
  height: 100%;
}
</style>