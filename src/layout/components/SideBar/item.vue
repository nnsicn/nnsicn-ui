<template>
  <div>
    <i v-if="icon" :class="icon"></i>
    <span v-if="title" slot='title'>{{title}}</span>
  </div>
</template>

<script>
export default {
    props:{
        icon:{
            type:String,
            default:""
        },
        title:{
            type:String,
            default:""
        }
    },
    // 这个组件之所以写成render函数，是因为菜单的el-subemnu中使用时会包裹一层div标签，导致插槽title不生效
    render(h,context){
      console.log(h,context);
      return "span"
    }
}
</script>

<style>

</style>