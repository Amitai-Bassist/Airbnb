<template>
    <section class="where-to-modal-list flex">
        <where-to-modal-preview :destination="destination" v-for="destination in destinations" :key="destination.name"/>
    </section>
  
</template>

<script>
import whereToModalPreview from './where-to-modal-preview.vue'
export default {
    props:{
        destinations: Object,
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

    },
    components:{
        whereToModalPreview
    }

}
</script>

<style>
    .where-to-modal-list{
        overflow-x:scroll;
        scrollbar-color: transparent;
    }
</style>