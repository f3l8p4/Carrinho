<template>
  <div class="bg-dark">
    <Header></Header>
    <div v-for="produto in produtos" :key="produto.id" class="w-40 m-10">
      <div class="card w-30 bg-base-100 shadow-xl">
        <figure><img src="https://images.unsplash.com/photo-1657299156538-e08595d224ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/></figure>
        <div class="card-body">
          <h2 class="fs-2 fw-bolder">{{produto.nome}}</h2>
          <p class="fs-1">{{produto.descricao}}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-success" @click="addCart(produto)">Add</button>
            <button class="btn btn-sm btn-success" @click="page(produto)">Visualizar User</button>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      produtos:this.$store.state.api.produto.data,
      cart: this.$store.state.api,
    }
  },
  methods: {
    addCart(produto){
      const produto1 = [produto.id,produto.nome,produto.descricao,produto.preco,produto.categoria_id]
      console.log(produto1)
      this.$store.dispatch('api/add',produto1)
      console.log(this.cart)
    },
    gerarDados(){
      this.$store.dispatch('api/getProduct')
      this.$store.dispatch('api/get')
    },
    page(produto){
      
      this.$router.push({
        name:'product-id',
        params:{
          id:produto.id,
          nome:'Felipe'
        }
      })
    }
  },
  mounted() {
    this.gerarDados()
  },
}
</script>
