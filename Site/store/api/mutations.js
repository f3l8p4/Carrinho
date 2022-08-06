export default{
    STORE(state,payload){
        state.produto = payload
    },
    ADD({dispatch},state, data) {
      state.cart.push({...data})
    },
    /*STORECART(state,payload){
      state.cart = payload
    }*/
}