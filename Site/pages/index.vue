<template>
  <div class="bg-dark">
    <Header></Header>
    <div class="mt-5">
      <h3 class="text-4xl font-extralight text-white mb-4">Melhores produtos</h3>
      <hr class="divide-y divide-dashed">
      <div class="flex  divide-x">
        <div v-for="produto in produtos" :key="produto.id" class="max-w-sm mr-5 mt-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img @click="page(produto)" class="p-8 cursor-pointer rounded-t-lg" src="https://media.istockphoto.com/id/1384041600/pt/foto/table-or-chair-in-bedroom-studio-or-hotel-suite-room-with-wooden-modern-style-design-and.webp?s=612x612&w=is&k=20&c=mFGDy7P5DO2t8bnuoA7edXWt4aemRFCK-r6p2w1sYpo=" alt="product image" />
      <div class="px-5 pb-5 mb-6 d-inline-flex">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">{{produto.nome}}</h5>
          <div class="flex justify-between items-center mr-3">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">R${{produto.preco}}</span>
              <span @click="addCart(produto)" class="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</span>
          </div>
      </div>
      </div>
      </div>
  </div>

</div>
</template>

<script>
   import{mapActions,mapGetters} from 'vuex'
export default {
  data() {
    return {
      produtos:this.$store.state.api.produto.data,
      cart: this.$store.state.cart.cart
    }
  },
  methods: {
    addCart(produto){
      let produto1 = {
        id : produto.id,
        nome :  produto.nome,
        descricao :  produto.descricao,
        preco : produto.preco,
        categoria_id : produto.categoria_id
      }
      this.$store.dispatch('cart/add',produto1)
      //console.log(this.cart)
      
      //this.$store.dispatch('api/add',produto1)
    },
    gerarDados(){
      this.$store.dispatch('api/getProduct')
      /*this.$store.dispatch('api/get')*/
    },
    page(produto){
      
      this.$router.push({
        name:'product-id',
        params:{
          id:produto.id,
          nome:produto.nome,
          descricao:produto.descricao,
          preco:produto.preco,
          categoria:produto.categoria_id
        }
      })
    }
  },
  mounted() {
    this.gerarDados()
  },
}
</script>
