// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './directives/privilege-directive.js'
import {hasPermission} from './utils/PemissionUtils.js'

Vue.config.productionTip = false
Vue.prototype.hasPermission = hasPermission
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
