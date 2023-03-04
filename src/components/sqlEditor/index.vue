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
    // value: {
    //   handler(n) {
    //     if (this.codeMirror) {
    //       let { ch, line } = this.codeMirror.getCursor();
    //       this.codeMirror.setValue(n);
    //       this.codeMirror.setCursor(line, ch);
    //     }
    //   },
    // },
  },
  methods: {
    runJS() {},
  },
  mounted() {
    this.codeMirror = new CodeMirror(this.$refs.editor, {
      ...this.options,
      value: this.value,
    });
    this.codeMirror.on("change", (cm) => {
      this.$emit("input", this.codeMirror.getValue());
      console.log(cm.getValue().at(-1));
      if (
        cm.getValue().at(-1) != ";" &&
        cm.getValue().at(-1) != " " &&
        cm.getValue().length > 0
      ) {
        cm.showHint({
          completeSingle: false,
        });
      }
      // console.log(cm.getCursor()); //获取光标的方法
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