<template>
    <section class="mobile-search-modal">
        <section class="where-to-modal"></section>
        <where-to-modal/>
        <section class="when-modal"></section>
        <section class="who-modal"></section>
    </section>
  
</template>

<script>
import whereToModal from './where-to-modal.vue';
export default {
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
        whereToModal
    }

}
</script>
<style>
.mobile-search-modal{
    position:absolute;
    z-index: 100;
    background-color: white;
    height: 100vh;
    width: 100%;
}
</style>