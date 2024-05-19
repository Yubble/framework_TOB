<template>
  <div class="icon">
    <el-icon v-if="!layoutStore.isCollapse" @click="change" class="Flod">
      <Fold></Fold>
    </el-icon>
    <el-icon v-else @click="change" class="Flod">
      <Expand></Expand>
    </el-icon>
  </div>
</template>
<script setup lang="ts">
import { useLayoutStore } from '@/store/layout'

const layoutStore = useLayoutStore()

// const foldTrigger = ref(true)

const change = () => {
  // 收起左边
  layoutStore.changeCollapse()
}
</script>

<style lang="less">
.Flod {
  cursor: pointer;
}
</style>
