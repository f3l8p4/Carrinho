<template>
    <div>
        <input type="checkbox" id="modal" class="modal-toggle" />
        <label for="modal" class="modal cursor-pointer">
          <label class="modal-box relative" for="">
            <h3 class="text-2xl font-bold mb-3">Compra de produto</h3>
            <hr>
                <div class="flex form-control mt-3 mb-3">
                    <div class="input-group input-group-lg">
                      <select v-model="selected" class="select select-bordered">
                        <option disabled selected>Escolha a forma de pagamento</option>
                        <option>Cartão</option>
                        <option>Cheque</option>
                        <option>Boleto</option>
                      </select>
                      {{selected}}
                    </div>
                    <user/>
                    <div v-if="selected == 'Cartão' " class="form-control mt-3 mb-3">
                        <label class="input-group input-group-lg">
                          <input type="text" placeholder="Digite seu número de cartão de crédito" class="input input-bordered input-md" />
                        </label>
                    </div>
                      <hr>
                    <div class="flex mt-3">
                        <div @click="addShop" class="btn-info justify-end">Comprar Produto</div>
                    </div>
                  </div>
          </label>
        </label>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                selected:'',
                shop:{
                id: this.$route.params.id,
                nome: this.$route.params.nome,
                descricao: this.$route.params.descricao,
                preco: this.$route.params.preco,
                categoria_id : this.$route.params.categoria
                }
            }
        },
        methods: {
            addShop(){
                this.$store.dispatch('shop/add',this.shop)
            }
        },
    }
</script>