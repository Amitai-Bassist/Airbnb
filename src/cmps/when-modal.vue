<template>
    <section class="when-modal">
        <details-calendar :detailsDateStart="dateStart"
        :detailsDateEnd="dateEnd"/>
    </section>
  
</template>

<script>
import detailsCalendar from './details-calendar.vue'
export default {
    data(){
        return{
            dateEnd: {id:null,date:null},
            dateStart: {id:null,date:null},
        }
    },
    created(){

    },
    methods:{

    },
    computed:{

    },
    components: {
        detailsCalendar,
    }

}
</script>
