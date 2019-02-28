import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: true,
  getters: {
    getFunctions: state => state.functions
  },
  state: {
    functions: [
      {
        code: '01'
      },
      {
        code: '02'
      },
      {
        code: '03'
      }
    ]
  }
})
export default store
