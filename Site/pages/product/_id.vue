<template>
    <div>
        <Header></Header>
        <h1>Id do produto:{{this.$route.params.id}}</h1>
        <h1>Nome do produto:{{this.$route.params.nome}}</h1>
        <h1>descricao do produto:{{this.$route.params.descricao}}</h1>
        <h1>preco do produto:{{this.$route.params.preco}}</h1>
        <h1>categoria do produto:{{this.$route.params.categoria}}</h1>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                nome: this.$route.params.nome
            }
        },
        head(){
            return{
                title:this.nome
            }
        }
    }
</script>