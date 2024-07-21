<template>
    <el-menu class="menu">
      <h2>后台管理</h2>
      <el-menu-item v-for="item in list" :index="item.path" :key="item.path">
        <component class="icon" :is="item.icon"></component>
        <span>{{ item.name }}</span>
      </el-menu-item>

      <el-sub-menu :index="list2.path">
        <template #title>
          <component class="icon" :is="list2.icon"></component>
          <span>{{ list2.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">{{ list2.children[0].name }}</el-menu-item>
          <el-menu-item index="1-2">{{ list2.children[1].name }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
</template>

<script setup>
import { reactive } from "vue";
let list = reactive([
  {
    name: "首页",
    path: "/home",
    icon: "House",
  },
  {
    name: "商品管理",
    path: "/product",
    icon: "ShoppingCart",
  },
  {
    name: "用户管理",
    path: "/user",
    icon: "user",
  },
]);
let list2 = reactive({
  name: "其他",
  path: "/other",
  icon: "location",
  children: [
    {
      name: "其他1",
      path: "/other/other1",
      icon: "setting",
    },
    {
      name: "其他2",
      path: "/other/other2",
      icon: "setting",
    },
  ],
});
</script>

<style lang="less" scoped>
.icon {
  height: 20px;
  margin-right: 10px;
}
span {
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}
h2{
  text-align: center;
  line-height: 48px;
  font-size: 35px;
  font-weight: 600;
  color: #0000009a;
}
.menu {
  height: 100%;
  width: 300px;
  background-color: #0978744b;
}
</style>