<template>
  <div class="login_box">
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
    <div ref="login" id="login"></div>
  </div>
</template>

<script>
import earth from "@/assets/echarts/earth.jpg";
import starfield from "@/assets/echarts/starfield.jpg";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        name: "",
        password: "",
      },
      option: {
        backgroundColor: "#000",
        globe: {
          baseTexture: earth,
          shading: "lambert",
          environment: starfield,
          atmosphere: {
            show: true,
          },
          light: {
            ambient: {
              intensity: 0.5,
            },
            main: {
              intensity: 0.1,
            },
          },
        },
        series: [],
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
  mounted() {
    let myEcharts = this.$echarts.init(document.getElementById("login"), null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
    myEcharts.setOption(this.option);
    window.addEventListener("resize", () => {
      myEcharts.resize();
    });
  },
};
</script>

<style lang="scss">
.login_box {
  position: relative;
  width: 100vw;
  height: 100vh;
  #login {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  .login_container {
    position: absolute;
    top: 0;
    z-index: 99;
    height: 100vh;
    width: 100vw;
    .login_form {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      height: 300px;
      padding: 20px;
      box-shadow: 5px 2px 35px -7px #ff9a9e;
      background-color: rgba(87, 86, 86, 0.2);
    }
  }
}
</style>