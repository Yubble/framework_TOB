<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Aside from './aside.vue'
import Header from './header.vue'
</script>

<style lang="less" scoped>
.aside {
  background: #fcd1d1;
  height: 100vh;
  width: auto;
}
.header {
  background: #fec5c5;
  border-bottom: 1px solid #c9c6c6;
}
</style>
