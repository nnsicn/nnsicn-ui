<template>
  <div>
    <code-sql v-model="code"></code-sql>
  </div>
</template>

<script>
import  codeSQL  from "@/views/component/sqlEditor/index.vue";
export default {
  name:"codemerror",
  components: { "code-sql":codeSQL },
  data(){
    return {code:"qwe"}
  }
};
</script>

<style>
</style>