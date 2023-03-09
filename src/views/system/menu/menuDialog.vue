<template>
  <z-dialog ref="dialog">
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="名称" prop="meta.title">
        <el-input v-model="form.meta.title"></el-input>
      </el-form-item>
      <el-form-item label="路由" prop="component">
        <el-input v-model="form.component"></el-input>
      </el-form-item>
    </el-form>
    <slot slot="footer">
      <el-button @click="cancel">取消</el-button>
      <el-button @click="confirm">确认</el-button>
    </slot>
  </z-dialog>
</template>

<script>
export default {
  data() {
    return {
      form: {
        component:"",
        meta:{title:""}
      },
      rules: {},
    };
  },
  methods: {
    open() {
      return this.$refs.dialog.open();
    },
    cancel() {
      this.$refs.dialog.cancel();
    },
    confirm() {
      this.$refs.form.validate((valid) => {
        if (!valid) return;
        this.$refs.dialog.confirm(this.form);
      });
    },
  },
};
</script>

<style>
</style>