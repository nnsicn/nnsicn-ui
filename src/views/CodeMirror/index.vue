<template>
  <div class="code-mirror">
    <div class="left-form">
      <el-form :model="form">
        <el-form-item label="编写语言" prop="language">
          <el-select
            v-model="form.language"
            placeholder="请选择语言"
            :disabled="!!code"
            @change="selectLanguage"
          >
            <el-option label="javaScript" value="text/javascript"> </el-option>
            <el-option label="SQL" value="text/x-sql"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input
            v-model="form.description"
            placeholder="描述"
          >
          </el-input>
        </el-form-item>
        <el-button @click="run">运行</el-button>
      </el-form>
    </div>
    <div class="editor">
      <code-sql v-model="code" ref="code" :options="options"></code-sql>
    </div>
  </div>
</template>

<script>
import codeSQL from "@/components/sqlEditor/index.vue";
export default {
  name: "codemirror",
  components: { "code-sql": codeSQL },
  data() {
    return {
      form: {
        language: "text/javascript",
        description:""
      },
      code: "",
      options: {
        mode: "text/javascript",
        lineNumbers: true,
        theme: "3024-day",
      },
    };
  },
  methods: {
    selectLanguage(val) {
      this.options.mode = val;
    },
    run(){
      new Function(this.code)
    }
  },
};
</script>

<style lang="scss">
.code-mirror {
  display: flex;
  padding: 20px 20px 20px 0;
  width: 100%;
  height: 100%;
  background-color: #e7eaef;
  .left-form {
    padding: 0 16px;
    width: 300px;
    border-right: 1px solid #d9d9d9;
    .el-form{
      .el-form-item{
        .el-form-item__content{
          .el-select{
            width: 100%;
          }
        }
      }
    }
  }
  .editor {
    flex: 1;
    padding: 16px;
  }
}
</style>