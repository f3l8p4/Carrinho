<template>
    <div class="ml-5">
        <figure class="icon" @click="showInput = !showInput"> <font-awesome-icon :icon="['fas','magnifying-glass']"/> </figure>

        <div v-if="showInput" class="flex form-control mr-4">
            <label class="input-group input-group-md">
              <input type="text" v-model="searchProduto" placeholder="Pesquise por um produto desejado" class="input  input-md" />
            </label> 
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                showInput: false,
                produto: this.$store.state.api.produto.data,
                searchProduto: ''
            }
        },
        mounted() {
            console.log(this.produto)
        },
    }
</script>