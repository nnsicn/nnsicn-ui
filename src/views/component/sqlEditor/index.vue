<template>
  <div>
    <div ref="editor"></div>
  </div>
</template>

<script>
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/3024-day.css";
import "codemirror/mode/sql/sql";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/sql-hint.js";
export default {
  name: "codeEditor",
  props: {
    value: {
      default: "",
    },
  },
  data() {
    return {
      codeMirror: null,
    };
  },
  watch: {
    value(newValue) {
      if (this.codeMirror) {
        // this.codeMirror.setValue(newValue);
        console.log(this.value);
      }
    },
  },
  mounted() {
    console.log(this.value);
    this.codeMirror = new CodeMirror(this.$refs.editor, {
      mode: "text/x-sql",
      lineNumbers: true,
      theme: "3024-day",
      value: this.value,
    });
    this.codeMirror.on("change", (cm) => {
      this.$emit("input", this.codeMirror.getValue());
      cm.showHint({
        completeSingle: false,
      });

      console.log(cm.getCursor());//获取光标的方法
    });
  },
};
</script>

<style>
</style>