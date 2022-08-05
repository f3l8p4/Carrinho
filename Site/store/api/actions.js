export default{
   async getProduct({dispatch,commit}){
      await  this.$axios.get('produtos').then(res=>{
            commit('STORE',res)
        })
    }
}