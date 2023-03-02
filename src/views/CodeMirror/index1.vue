<template>
  <div>
    <textarea ref="editor" cols="30" rows="10" v-model="code"></textarea>
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
  components: {},
  data() {
    return {
      code: "",
      codeMirror: null,
    };
  },
  mounted() {
    this.codeMirror = CodeMirror.fromTextArea(this.$refs.editor, {
      value: "function myScript(){return 100;}\n",
      mode: "text/x-sql",
      lineNumbers: true,
      theme: "3024-day",
    });
    this.codeMirror.on("cursorActivity", (cm) => {
      cm.showHint({
        completeSingle: false,
      });
      this.code = cm.getValue();
    });
  },
};
</script>

<style>
</style>