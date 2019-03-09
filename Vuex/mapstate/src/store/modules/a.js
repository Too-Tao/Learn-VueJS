const state = {
  money: 1
}

const mutations = {
  add(state, payload) {
    state.money += payload.amount
  },
  reduce(state, payload) {
    state.money -= payload.amount
  }
}

const actions = {
  add: ({commit}) => {
    commit('add',{
      amount: 2
    })
  },
  reduce: ({commit}) => {
    commit('reduce', {
      amount: 2
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}