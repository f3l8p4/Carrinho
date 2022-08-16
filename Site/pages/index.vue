<template>
  <div class="bg-dark">
    <Header></Header>
    <div class="mt-5">
      <h3 class="text-4xl font-extralight text-white mb-4">Melhores produtos</h3>
      <hr class="divide-y divide-dashed">
      <div class="flex  divide-x">
        <CardProduct></CardProduct>
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
}
</script>
