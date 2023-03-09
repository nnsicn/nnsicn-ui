<template>
  <z-dialog ref="dialog">
    <el-form :model="form">
      <el-form-item label="名称" prop="menuName"></el-form-item>
    </el-form>
  </z-dialog>
</template>

<script>
export default {
  data(){
    return {
      form:{}
    }
  },
  methods:{
    opendialog(){
      return this.$refs.dialog.open()
    }
  },
}
</script>

<style>

</style>