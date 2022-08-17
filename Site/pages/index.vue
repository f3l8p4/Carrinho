<template>
  <div class="bg-dark">
    <Header></Header>
    <div class="mt-5">
      <h3 class="text-4xl font-extralight text-white mb-4">Melhores produtos</h3>
      <hr class="divide-y divide-dashed">
      <div class="flex  divide-x">
        <CardProduct :produto="produtos" v-for="produto in produtos" :key="produto.id"></CardProduct>
      </div>
  </div>

</div>
</template>

<script>
   import{mapActions,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters({produtos:'api/produto'})
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
