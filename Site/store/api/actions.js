export default{
    getProduct({commit}){
        this.$axios.get('produtos').then(res=>{
            commit('STORE',res)
        })
    },
    /*get({commit,state},data){
        return state.cart
    },*/
    /*get({dispatch,commit}) {
        commit('STORECART')
    },*/
}