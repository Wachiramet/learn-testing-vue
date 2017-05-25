import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export default new vuex.Store({
  state: {
    data: 0
  },
  getters: {
    data: state => state.data
  },
  mutations: {
    increment (state) {
      state.data += 1
    },
    sub (state) {
      state.data -= 1
    }
  },
  actions: {
    increment ({commit}) {
      commit('increment')
    },
    sub ({commit}) {
      commit('sub')
    }
  }
})
