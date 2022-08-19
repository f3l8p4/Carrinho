<template>
    <div>
        <div class="card card lg:card-side bg-base-200">
            <figure><img src="https://media.istockphoto.com/id/1384041600/pt/foto/table-or-chair-in-bedroom-studio-or-hotel-suite-room-with-wooden-modern-style-design-and.webp?s=612x612&w=is&k=20&c=mFGDy7P5DO2t8bnuoA7edXWt4aemRFCK-r6p2w1sYpo=" alt="produto"></figure>
            <div class="card-body">
              <h1 class="text-3xl">{{this.$route.params.nome}}</h1>
              <p class="text-xl mt-3">{{this.$route.params.descricao}}</p>
              <div class="card-actions justify-end">
                <h1 class="text-2xl">R${{this.$route.params.preco}}</h1>
                <span @click="" class="btn-info">Add to cart</span>
                <label for="modal" class="btn-info modal-button">Comprar Produto</label>
                <ModalAdd></ModalAdd>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                product:{
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
                this.$store.dispatch('shop/addShop',this.product)
            }
        },
    }
</script>