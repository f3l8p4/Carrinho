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
    addCart (state, payload) {
      state.cart.push({ ...payload.cart })
    },
    deleteCart (state, payload) {
      state.cart = state.cart.filter(x => x.id !== payload)
    }
  }
  
  export const actions = {
    add ({ commit }, payload) {
      commit('addCart', payload)
    },
    
  }