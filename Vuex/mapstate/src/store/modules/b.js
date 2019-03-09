const state = {
  count: 10
}

const mutations = {
  add(state, payload) {
    state.count += payload.amount
  },
  reduce(state, payload) {
    state.count -= payload.amount
  }
}

const actions = {
  add: ({commit}) => {
    commit('add', {
      amount: 10
    })
  },
  reduce: ({commit}) => {
    commit('reduce', {
      amount: 10
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}