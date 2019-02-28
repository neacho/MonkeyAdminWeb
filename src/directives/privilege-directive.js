import Vue from 'vue'
import store from '../store'
/*
1、集合指令以及Vuex 数据集 对按钮权限进行判断
2、需要进行权限限制的按钮 需要添加指令 v-hasPermission= "{code: '****'}"
3、code为 权限代码
*/

Vue.directive('hasPermission', {
  bind: (el, binding, vNode) => {
    var permissionCode = binding.value.code
    store.getters.getFunctions.forEach(v => {
      if (v.code === permissionCode) {
        Vue.nextTick(() => {
          el.parentNode.removeChild(el)
        })
      }
    })
  }
})
