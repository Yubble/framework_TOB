import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    isCollapse: false  // 边框是否折叠
  }),
  actions: {
    // 控制侧边栏是否收缩
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
})