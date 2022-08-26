<template>
    <div class="ml-5">
        <figure class="icon" @click="showInput = !showInput"> <font-awesome-icon :icon="['fas','magnifying-glass']"/> </figure>

        <div v-if="showInput" class="flex form-control mr-4">
            <label class="input-group input-group-md">
              <input type="text" v-model="searchProduto" @change="searchItens" placeholder="Pesquise por um produto desejado" class="input  input-md" />
            </label> 
        </div>

        <div v-if="searchProduto !== '' " v-for="searched in searched" :key="searched.id">
            <ul>
                <li>{{searched.nome}}</li>
                <li>{{searched.preco}}</li>
            </ul>
        </div>
        <div v-else>
            Não há produtos
        </div>

    </div>
</template>
<script>
    export default{
        props:['produto'],
        data() {
            return {
                showInput: false,
                //produto: this.$store.state.api.produto.data,
                searchProduto: '',
                searched : null,
            }
        },
        methods: {
            searchItens(){
                let item = this.produto
                let searchProduto = this.searchProduto
                this.searched =  item.filter(search=>{
                    if(search.nome === searchProduto){
                        return searchProduto
                    }
                })
            }
        },
        mounted() {
            console.log(this.produto)
        },
    }
</script>