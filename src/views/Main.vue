<template>
     <div class="container">
        <el-container class="lay-container">
            <Aside></Aside>
            <el-container>
                <el-header class="el-header">
                    <Header></Header>
                </el-header>
                <el-main class="right-main">
                    321
                </el-main>
            </el-container>
        </el-container>
     </div>
</template>

<script setup>
import Aside from '@/components/aside.vue'
import Header from '@/components/header.vue'
</script>

<style lang="less" scoped>
.container,.lay-container{
    height: 100%;
}
.el-header{
    background-color: #b4b4b4;
}
</style>