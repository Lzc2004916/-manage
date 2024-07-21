<template>
  <div class="header">
    <div class="left">
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item
          class="item"
          v-for="item in list"
          :key="item.id"
          :to="{ path: '/' }"
          >{{ item.name }}
        </el-breadcrumb-item>
        <el-breadcrumb-item></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-dropdown>
        <div type="primary">
          <el-icon size="30px">
            <User />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
let list = reactive([
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "My",
    path: "/my",
  },
  {
    id: 3,
    name: "User",
    path: "/user",
  },
]);
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  .left {
    display: flex;
    align-items: center;
  }
  .bread {
    .item {
      font-size: 20px;
    }
  }
}
</style>