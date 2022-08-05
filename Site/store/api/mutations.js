export default{
    STORE(state,payload){
        state.produto = payload
    },
    STORECART(state,payload){
      state.cart = payload
    },
    setData(state, payload) {
        Object.keys(payload).forEach(k => {
          state[k] = payload[k];
        })
      },
}