<template>
  <div class="bg-dark">
    <Header :produto="produto"></Header>
    <div class="mt-5">
      <h3 class="text-4xl font-extralight text-white mb-4">Melhores produtos</h3>
      <hr class="divide-y divide-dashed">
      <SelectCategory :produto="produto" @productFiltered="filterItens"></SelectCategory>
      <div class="flex">
        <CardProduct v-for="produto in itensFiltered" :key="produto.id" :produto="itensFiltered"></CardProduct>
      </div>
  </div>

</div>
</template>

<script>
export default {
  data(){
    return{
      produto: this.$store.state.api.produto.data,
      itensFiltered : null 
    }
  },
  methods: {
    generateData(){
      this.$store.dispatch('api/getProduct')
    },
    filterItens(value){
      if(this.itensFiltered === ''){
        this.itensFiltered = this.produto
      }
      this.itensFiltered = value
      console.table(value)
    }
  },
  mounted() {
    this.generateData()
  },
}
</script>
