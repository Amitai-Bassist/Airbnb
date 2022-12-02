<template>
    <section  class="calender-container">
        <!-- <stay-calendar></stay-calendar> -->
    </section>
    
</template>

<script>
    import stayCalendar from './stay-calendar.vue';
    import { ref } from 'vue'
    export default {
    data(){
      return{
        value: ref('')    
    }
  },
  components:{
    stayCalendar
  }
}
</script>