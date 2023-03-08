<template>
  <div ref="editor" class="code-editor"></div>
</template>

<script>
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/3024-day.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/sql/sql";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/sql-hint.js";
import "codemirror/addon/hint/javascript-hint.js";
export default {
  name: "codeEditor",
  props: {
    value: {
      type: String,
      default: "",
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      codeMirror: null,
      codeText: "",
    };
  },
  watch: {
    "options.mode": {
      handler(n) {
        if (this.codeMirror) {
          this.codeMirror.setOption("mode", n);
        }
      },
    },
    value: {
      handler(n, o) {
        if (n != o && this.codeMirror) {
          const cursor = this.codeMirror.getCursor();
          this.codeMirror.setValue(n);
          this.codeMirror.setCursor(cursor);
          this.$nextTick(() => {
            if (
              this.codeMirror.getValue().at(-1) != ";" &&
              this.codeMirror.getValue().at(-1) != " " &&
              this.codeMirror.getValue().length > 0
            ) {
              this.codeMirror.showHint({
                completeSingle: false,
              });
            }
          });
        }
      },
    },
  },
  methods:{
    handler(){

      let res = new Function(`return function(){${this.codeMirror.getValue()} return 123}`)()()
    }
    
    
  },
  mounted() {
    this.codeMirror = new CodeMirror(this.$refs.editor, {
      ...this.options,
      value: this.value,
      extraKeys: { "Ctrl-S": this.handler },
      hintOptions: { completeSingle: false },
    });
    this.codeMirror.on("change", (cm) => {
      this.$emit("input", this.codeMirror.getValue());
    });
  },
};
</script>

<style lang="scss">
.code-editor {
  width: 100%;
  height: 100%;
  .CodeMirror {
    width: 100%;
    height: 100%;
  }
}
</style>