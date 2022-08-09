<template>
    <div>
        <Header></Header>
        <h1>Id do produto:{{this.$route.params.id}}</h1>
        <h1>Nome do produto:{{this.$route.params.nome}}</h1>
        <h1>descricao do produto:{{this.$route.params.descricao}}</h1>
        <h1>preco do produto:{{this.$route.params.preco}}</h1>
        <h1>categoria do produto:{{this.$route.params.categoria}}</h1>
                    <figure><img src="https://media.istockphoto.com/id/1384041600/pt/foto/table-or-chair-in-bedroom-studio-or-hotel-suite-room-with-wooden-modern-style-design-and.webp?s=612x612&w=is&k=20&c=mFGDy7P5DO2t8bnuoA7edXWt4aemRFCK-r6p2w1sYpo=" alt="produto"></figure>
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