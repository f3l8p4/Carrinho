export const state = () => ({
    cart: []
  })
  
  export const mutations = {
    addCart (state, payload) {
      state.cart.push({ ...payload.cart })
    },
    deleteFavorito (state, payload) {
      state.cart = state.cart.filter(x => x.id !== payload)
    }
  }
  
  export const actions = {
    add ({ commit }, payload) {
      commit('addCart', payload)
    },
  }