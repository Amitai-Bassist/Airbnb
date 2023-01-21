<template>
    <section class="where-to-modal">
        <div>
            <label for="searchDestinations">Where to?</label>
            <input name="searchDestinations" type="search" placeholder="Search destinations">
        </div>
        <where-to-modal-list :destinations="destinations"/>

        
    </section>
  
</template>

<script>
import whereToModalList from './where-to-modal-list.vue'
export default {
    data(){
        return{
            destinations:[
                {name:'I\'m flexible',src:"https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832788/ypxaozgl8ypv41zcslzr.jpg"},
                {name:'I\'m flexible',src:"https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832788/ypxaozgl8ypv41zcslzr.jpg"},
                {name:'I\'m flexible',src:"https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832788/ypxaozgl8ypv41zcslzr.jpg"},
                {name:'I\'m flexible',src:"https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832788/ypxaozgl8ypv41zcslzr.jpg"},
                {name:'I\'m flexible',src:"https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832788/ypxaozgl8ypv41zcslzr.jpg"},
            ]
        }
    },
    created(){

    },
    methods:{

    },
    computed:{

    },
    components:{
        whereToModalList
    }

}
</script>