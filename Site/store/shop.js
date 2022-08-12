export const state = () => ({
    shop: []
 })

 export const getters = {
  shop (state) {
    return state.shop
  },
}
 export const mutations = {
    addShop (state, payload) {
      state.shop.push({ ...payload })
    },
    deleteShop (state, payload) {
      state.shop = state.shop.filter(x => x.id !== payload)
    }
  }

  export const actions = {
    add ({ commit,dispatch }, param) {
      commit('addShop', param)
    },
    
  }