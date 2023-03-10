<template>
  <div class="menu-system">
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="path"
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column label="菜单名称" prop="meta.title"> </el-table-column>
      <el-table-column label="菜单图标" prop="meta.icon"> </el-table-column>
      <el-table-column label="菜单路由" prop="component"> </el-table-column>
      <el-table-column label="菜单路由" prop="component">
        <!-- eslint-disable-next-line --><!--这行注释跳过下行代码检查-->
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          <el-button type="text" @click="handleAdd">
            <i class="el-icon-plus"></i>
          </el-button>
        </template>
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            size="mini"
            @click="handleAdd(scope.row)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            size="mini"
            @click="handleDelete"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { saveMenu,updateMenu } from "@/api/system/menu.js";
import dialog from "./menuDialog.vue";
export default {
  name: "Menu",
  data() {
    return {
      tableData: [
        {
          path: "DashBoard",
          component: "@/views/dashBoard/index.vue",
          hidden: false,
          meta: { title: "DashBoard", icon: "" },
        },
      ],
      form: {
        menuId:null,
        parentId:null,
        path:"",
        component:"",
        hidden:false,
        meta:{
          title:"",
          icon:"",
          sort:null
        }
      },
      search: "",
    };
  },
  methods: {
    handleDelete() {},
    handleAdd(row) {
      if (row) {
        this.form.parentId = row.menuId;
      } else {
        this.form.parentId = null;
        // this.form.path
      }
      this.$openDialog(dialog, this.form).then((res) => {
        // 调用add菜单接口或update菜单接口
        saveMenu(res).then(res=>{

        })
        // 调用获取菜单功能并整理数据
      });
      return;
      getMenuList({
        menuId: "1",
        component: "views/dashBoard/index.vue",
        parent: null,
        menuName: "dashBoard",
      }).then((res) => {
        console.log(res);
      });
    },
    init() {
      return [];
    },
  },
};
</script>

<style>
</style>