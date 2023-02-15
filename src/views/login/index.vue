<template>
  <div class="login_container">
    <el-form :model="loginForm" ref="form" class="login_form">
      <el-form-item label="账号" prop="name">
        <el-input type="text" v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="text" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "login",
  data() {
    return {
      loginForm: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      // login()
      this.$store
        .dispatch("user/login", this.loginForm)
        .then((res) => {
          this.$router.push("/");
        })
        .catch((err) => {
          this.$message.error(err); //登录失败提示错误
        });
    },
  },
};
</script>

<style lang="scss">
$bg: #2d3a4b;
.login_container {
  height: 100vh;
  width: 100vw;
  background-color: $bg;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_form {
    width: 500px;
    height: 300px;
  }
}
</style>