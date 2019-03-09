import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  increment(state,payload) {
    state.count += payload.amout
  },
  decrement(state,payload) {
    state.count -= payload.amout
  }
}

const actions = {
  increment: ({commit}) => {
    commit('increment',{
      amout: 10
    })
  },
  decrement: ({commit}) => {
    setTimeout(() => {
      commit('decrement',{
        amout: 2
      })
    },1000)
    
  }
}

export default new Vuex.Store ({
  state,
  mutations,
  actions
})