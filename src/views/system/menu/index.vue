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
        </template>
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            size="mini"
            @click="handlerEdit(scope.row)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            size="mini"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getMenuList } from "@/api/system/menu.js";
export default {
  name: "Menu",
  data() {
    return {
      tableData: this.init(),
      search: "",
    };
  },
  methods: {
    handlerEdit(row) {
      this.$dialog.open(dialog,this.search)
      return
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
      return [
        {
          path: "/documentation",
          component: "layout/Layout",
          children: [
            {
              path: "index",
              component: "views/documentation/index",
              name: "Documentation",
              meta: {
                title: "Documentation",
                icon: "documentation",
                affix: true,
              },
            },
          ],
        },
        {
          path: "/guide",
          component: "layout/Layout",
          redirect: "/guide/index",
          children: [
            {
              path: "index",
              component: "views/guide/index",
              name: "Guide",
              meta: { title: "Guide", icon: "guide", noCache: true },
            },
          ],
        },
      ];
    },
  },
};
</script>

<style>
</style>