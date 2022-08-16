<template>
    <div>
        <h2 class="m-3 text-4xl text-white-50 fw-light">Produtos comprados</h2>
        <hr>
        <div class="overflow-x-auto mt-3">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody v-for="shop in shop" :key="shop.id">
                <tr>
                  <th>{{shop.id}}</th>
                  <td>{{shop.nome}}</td>
                  <td>{{shop.preco}}</td>
                  <td>{{shop.descricao}}</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            shop:this.$store.state.shop.shop
        }
    },
}
</script>