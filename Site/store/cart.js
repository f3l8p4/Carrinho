export const state = () => ({
    cart: []
  })
  
  export const getters = {
    cart (state) {
      return state.cart
    },
    itens (state) {
      return state.cart.length
    },
  }
  export const mutations = {
    addCart (state, params) {
      state.cart.push({ ...params })
    },
    deleteCart (state, payload) {
      state.cart = state.cart.filter(x => x.id !== payload)
    }
  }
  
  export const actions = {
    add ({ commit,dispatch }, param) {
      commit('addCart', param)
    },
    
  }