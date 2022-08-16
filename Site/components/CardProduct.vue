<template>
    <div>
                <img @click="page(produto)" class="p-8 cursor-pointer rounded-t-lg" src="" alt="product image"/>
                <div class="px-5 pb-5 mb-6 d-inline-flex ">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">{{produto.nome}}</h5>
                    <div class="flex justify-between items-center mr-3">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">R${{produto.preco}}</span>
                        <span @click="addCart(produto)" class="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</span>
                    </div>
                </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        computed:{
            ...mapGetters({produto:'api/produto'})
        },
        methods: {
        addCart(produto){
        this.$store.commit('cart/addCart',produto)
        },

        page(produto){ 
            this.$router.push({
            name:'product-id',
            params:{
                id:produto.id,
                nome:produto.nome,
                descricao:produto.descricao,
                preco:produto.preco,
                categoria:produto.categoria_id
            }
        })
        }

    },
    }
</script>