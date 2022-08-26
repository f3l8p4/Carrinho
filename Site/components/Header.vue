<template>
  <div class="navbar bg-base-300">
    <div class="flex-1">
      <nuxt-link to="/" class="normal-case text-xl text-light ml-6 text-white"> Sistema de Compras </nuxt-link>
    </div>

    <div class="btn btn-ghost rounded mr-5 text-white">
      <nuxt-link to="/pedidos">Meus pedidos</nuxt-link>
    </div>

    <div class="flex-none">
        <Cart></Cart>
    </div>

    <div class="">
      <Search :produto="produto"></Search>
    </div>

    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        props:['produto'],
        data() {
          return {
            product: this.$store.state.cart.cart
          }
        },
        methods: {
          
        },
        mounted() {
          console.log(this.produto)
        },
    }
</script>