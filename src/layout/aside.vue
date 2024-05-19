<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#bce6ff"
    text-color="#545454"
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="layoutStore.isCollapse"
    @open="handleOpen"
    @close="handleClose"
    @select="selectItem"
  >
    <div class="headline">
      <div class="headline_title" v-if="!layoutStore.isCollapse">
        <img src="@/assets/images/logo.png" alt="" />
        后台管理系统
      </div>
      <img v-else class="headline_logo" src="@/assets/images/logo.png" alt="" />
    </div>

    <template v-for="subItem in menus" :key="subItem.path">
      <!-- 两层 -->
      <el-sub-menu v-if="subItem.children" :index="subItem.path">
        <template #title>
          <el-icon>
            <component :is="subItem.meta.icon"></component>
          </el-icon>
          <span>{{ subItem.meta.title }}</span>
        </template>
        <template v-for="item in subItem.children" :key="item.path">
          <el-menu-item :index="item.path">
            <el-icon>
              <component :is="item.meta.title"></component>
            </el-icon>
            <template>
              <span>{{ item.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-sub-menu>
      <!-- 一层 -->
      <el-menu-item v-else :index="subItem.path">
        <el-icon>
          <component :is="subItem.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ subItem.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLayoutStore } from '@/store/layout'

const router = useRouter()

const layoutStore = useLayoutStore()

const top = ref(true)
const menus = computed(() => {
  let menu = router.options.routes.filter((item) => item.children)
  return menu[0].children
})

const selectItem = (path) => {
  router.push({ path })
}

const handleOpen = (key) => {
  console.log('--- 单纯的打开 ---')
}

const handleClose = () => {
  window.alert('---- 关闭 ----')
}
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 100%;
}

.el-menu-vertical-demo {
  height: 100%;
}

.el-menu {
  border-right: 0;
}

.headline {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &_title {
    font-size: 18px;
    display: flex;
    justify-content: center;
    top: 5px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }

  &_logo {
    width: 30px;
    height: 30px;
  }
}
</style>
