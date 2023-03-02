<template>
  <div class="code-mirror">
    <div class="select-language">
      <el-select
        v-model="language"
        placeholder="请选择语言"
        :disabled="!!code"
        @change="selectLanguage"
      >
        <el-option label="javaScript" value="text/javascript"> </el-option>
        <el-option label="SQL" value="text/x-sql"> </el-option>
      </el-select>
    </div>
    <div class="editor">
      <code-sql v-model="code" :options="options"></code-sql>
    </div>
  </div>
</template>

<script>
import codeSQL from "@/components/sqlEditor/index.vue";
export default {
  name: "codemerror",
  components: { "code-sql": codeSQL },
  data() {
    return {
      language: "text/javascript",
      code: "",
      options: {
        mode: "text/javascript",
        lineNumbers: true,
        theme: "monokai",
      },
    };
  },
  methods: {
    selectLanguage(val) {
      this.options.mode = val
    },
  },
};
</script>

<style lang="scss">
.code-mirror {
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #eee;
  .select-language {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    width: 100%;
    height: 40px;
    .el-select {
      width: 600px;
    }
  }
  .editor {
    // width: 900px;
    height: 600px;
  }
}
</style>