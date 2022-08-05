export default{
   async getProduct({commit}){
      await  this.$axios.get('produtos').then(res=>{
            commit('STORE',res)
        })
    }
}