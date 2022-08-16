<template>
    <div>
        <Header></Header>
        <div class="mt-10">
            <div class="d-flex m-5">
                <CardProductView></CardProductView>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'
    export default{
        head(){
            return{
                title:this.nome
            }
        },
    }
</script>