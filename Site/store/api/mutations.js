export default{
    STORE(state,payload){
        state.produto = payload
    },
    STORECART(state,payload){
      state.cart = payload
    },
}