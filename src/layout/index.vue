<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container direction="vertical">
        <Header />
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import Header from './components/header.vue';
</script>

<style lang="less" scoped>
  .layout {
    width: 100%;
    height: 100%;

    .el-container {
      width: 100%;
      height: 100%;
    }
  }
</style>
