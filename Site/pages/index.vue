<template>
  <div class="bg-dark">
    {{produtos}}
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <nuxt-link to="/">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Site de compras</span>
              </nuxt-link>
              <div class="dropdown dropdown-end">
                <button tabindex="0" class="m-1">Click</button>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>Não há itens de desenvolvimento</li>
                </ul>
              </div>
            </div>
      </nav>
  </header>
    <div v-for="produto in produtos" :key="produto.id" class="w-40 m-10">
      <div class="card w-30 bg-base-100 shadow-xl">
        <figure><img src=""/></figure>
        <div class="card-body">
          <h2 class="fs-2 fw-bolder">{{produto.nome}}</h2>
          <p class="fs-1">{{produto.descricao}}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-success" @click="addCart(produto)">Add <i></i></button>
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
      produtos:this.$store.state.api.produto,
      cart: this.$store.state.api.cart,
      state:false,
    }
  },
  methods: {
    openModal(){
      this.state = !this.state
    },
    addCart(produto){
      console.log(produto)
    }
  },
}
</script>
