<template>
    <div>
        <Header></Header>
        <h2 class="m-3 text-4xl text-white-50 fw-light">Produtos comprados</h2>
        <hr>
        <div class="overflow-x-auto mt-3">
                <table class="table w-full">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Produto</th>
                      <th>Preço</th>
                      <th>Descrição</th>
                    </tr>
                  </thead>
                  <AllProducts v-for="shop in shop" :key="shop.id" :shop="shop"></AllProducts>
                </table>
        </div>
      </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
      data() {
        return {
          shop: this.$store.state.shop.shop
        }
      },
      methods: {
        generateData(){
          this.$store.dispatch('shop/add')
        }
      },
      mounted() {
        this.generateData()
      },
    }
</script>