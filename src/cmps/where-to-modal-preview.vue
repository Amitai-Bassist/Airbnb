<template>
    <section class="where-to-modal-preview" >
        <div>
            <img @click="choseMainland('')" class="mainland-img" :src="destination.src" alt="">
            <div>{{ destination.name }}</div>
        </div>
    </section>
  
</template>

<script>
export default {
    props:{
        destination: Object,
    },
    data(){
        return{

        }
    },
    created(){

    },
    methods:{

    },
    computed:{

    }

}
</script>
<style>

</style>