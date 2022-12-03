<template>
    <section class="stay-reserve order-container">
    <div class="order-form-header">
      <p><span class="cost">${{stay.price}}</span> / night</p>
      <p>{{reviewScore}} <span class="reviews">({{ stay.reviews.length }} reviews)</span></p>
    </div>

    <div :class="isWhenStart?'order-data open':'order-data'">
      <details-calendar v-click-away="onClickAway" @updateStart="updateStart" @updateEnd="updateEnd" v-if="(isWhenStart || isWhenEnd)"></details-calendar>
      <div class="date-picker" v-if="!isWhenStart">
        <div class="date-input" @click="toggleCalender">
          <label>CHECK IN</label>
          <input :value="getDateStart">
        </div>
        <div class="date-input">
          <label>CHECK OUT</label>
          <input :value="getDateEnd">
        </div>
      </div>      
      <div class="guest-input" v-if="!isWhenStart">
        <label>GUESTS</label>
        <input value="2">
        <svg viewBox="0 0 320 512" width="100" title="angle-down">
          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
        </svg>
      </div>
    </div>

    <div class="btn-container" @click="onReserve" v-if="!isWhenStart" >
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="content">
        <button class="action-btn">
          <span class="btn">Reserve</span>
        </button>
      </div>
    </div>

    <!-- <stay-when-search class="" v-if="(isWhenStart || isWhenEnd)"></stay-when-search> -->

  </section>
</template>

<script>
  import stayWhenSearch from './stay-when-search.vue'
  import detailsCalendar from './details-calendar.vue';
  import { eventBus } from '../services/event-bus.service'

   export default {
    props:{
      stay: Object,
    },
    data(){
      return{
        isWhenStart:false,
        isWhenEnd:false,
        dateEnd:'-',
        dateStart:'-'
      }
    },
    created() {
      setTimeout(() => {
        this.getReviewScore();
    }, 500);
    },
    mounted() {
    },
    methods: {
      getReviewScore() {
        this.$store.commit({
          type: "getReviewScore",
          stayReviews: this.stay.reviews,
        });
      },
      onReserve(){
        if(this.stay)this.$emit('isReserve')
        else this.$router.push('/')
      },
      toggleCalender(){
        this.isWhenStart = !this.isWhenStart
      },
      updateStart(update){
        this.dateStart = update
      },
      updateEnd(update){
        this.dateEnd = update
      },
      onClickAway() {
        this.isWhenStart = false
    }
    },
    computed: {
      reviewScore() {
        return this.$store.getters.reviewScore;
      },
      getDateStart(){
        return this.dateStart
      },
      getDateEnd(){
        return this.dateEnd
      }
    },
    components: {
      stayWhenSearch,
      detailsCalendar,
  }
  }
</script>