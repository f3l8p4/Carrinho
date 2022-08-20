<template>
  <div class="bg-dark">
    <Header></Header>
    <div class="mt-5">
      <h3 class="text-4xl font-extralight text-white mb-4">Melhores produtos</h3>
      <hr class="divide-y divide-dashed">
      <div class="flex">
        <CardProduct v-for="produto in produto" :key="produto.id" :produto="produto"></CardProduct>
      </div>
  </div>

</div>
</template>

<script>
   import{mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return{
      produto: this.$store.state.api.produto.data
    }
  },
  methods: {
    generateData(){
      this.$store.dispatch('api/getProduct')
    },
  },
  mounted() {
    this.generateData()
  },
}
</script>
