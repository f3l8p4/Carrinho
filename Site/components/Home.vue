<template>
   <!--{{produtos}}-->
    <div>
      <Header></Header>
      <div v-for="produto in produtos" :key="produtos.id" class="w-40 m-10">
        <div class="card w-30 bg-base-100 shadow-xl">
          <figure><img src=""/></figure>
          <div class="card-body">
            <h2 class="fs-2 fw-bolder">{{produto.nome}}</h2>
            <p class="fs-1">{{produto.descricao}}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-success">Add </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      produtos:this.$store.state.api.produto
    }
  },
  methods: {
    AddCart(){

    }
}
}
</script>

