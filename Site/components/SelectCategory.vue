<template>
    <div>
        <div class="form-control">
            <div class="input-group">
              <select v-model="category" @change="filterItens()" class="select select-bordered">
                <option disabled selected>Informe a categoria desejada</option>
                <option value="1">Aparelhos telefones</option>
                <option value="2">Consoles</option>
                <option value="3">Televisores</option>
              </select>
            </div>
          </div>
          <br>
    </div>
</template>
<script>
    export default{
        props:['produto'],
        data() {
            return {
                filtered:{},
                category:[]
            }
        },
        methods: {
            filterItens(){
                let produto= this.produto
                /*produto.forEach(produto => {
                    if(this.category == 0){
                    this.filtered = {...produto}
                }
                    if(produto.categoria_id == this.category){
                        this.filtered = {...produto}
                    }
                });
                */
               produto.filter(produto=>{
                if(produto.categoria_id == this.category){
                    this.filtered = {...produto}
                    return this.filtered
                }
               })
                this.$emit('productFiltered',this.filtered)
            }
        },
        mounted() {
            console.log(this.category)
        },
    }
</script>

