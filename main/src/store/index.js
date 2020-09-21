import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commonData: {
      parent: 1
    },
  },
  mutations: {
    setCommonData(state, val){
      state.commonData = val;
    }
  },
  actions: {
    setData({commit},val){
      setTimeout(()=>{

        commit('setCommonData',val)
      },2000)
    }
  },
  modules: {
  }
})
