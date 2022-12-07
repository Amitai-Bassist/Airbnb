<template>
    <section style="margin-top:100px;" class="stay-reservation main-container" v-if="myReservation">
      <div class="your-trip">
        <!-- <h1>Reservation Success!</h1> -->
        <h2>Your trip:</h2>
        <div class="flex row">Check-In <span> &nbsp;{{myReservation.startDate}}</span></div>
        <div class="flex row">Check-Out <span> &nbsp;{{myReservation.endDate }}</span></div>
        <div class="flex row">Host name <span> &nbsp;{{myReservation.hostName}}</span></div>
        <!-- <div class="end"></div> -->
      </div>
      <div class="reservation-details">
        <h2 class="h2">Stay details:</h2>
        <div class="text">
          <p class="top">{{myReservation.stay.name}}</p>
          <p class="middle">{{myReservation.stay.type}}</p>
          <p class="review flex row align-center">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
            <span class="review-text">  
              &nbsp;{{myReservation.stay.reviewScore}} &nbsp;<span>({{ myReservation.stay.reviews.length }} reviews)</span>
            </span> 
          </p>
        </div>
      </div>
      <!-- <div class="end"></div> -->
      <div class="price-details">
        <h2>price-details</h2>
        <div class="flex row">Adults: {{myReservation.guests.adults }}</div>
        <div v-if="myReservation.guests.kids" class="flex row">Kids: {{myReservation.guests.kids}}</div>
        <div v-if="myReservation.guests.infants" class="flex row">Infants:{{reservmyReservation.guests.infants}}</div>
        <div v-if="myReservation.guests.pets" class="flex row">Pets: {{reservmyReservation.guests.pets}}</div>
        <div class="flex row">Total price: <span> &nbsp;${{myReservation.totalPrice}}</span></div>
        <div class="flex row">Total nights: <span> &nbsp;{{myReservation.totalNights}}</span></div>
        <div class="btn-container" @click="moveToHomePage">
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
          <span class="btn">Look for more places to stay</span>
        </button>
      </div>
        </div>
      </div>
    <div class="img-container">
          <img :src="imgUrl" :class="('img'+index)" alt=""  v-for="(imgUrl,index) in myReservation.stay.imgUrls.slice(0,4)" :key="imgUrl">
        </div>
    </section> 
    <!-- <pre>{{myReservation}}</pre> -->
    
</template>
  
<script>
// reservation
import { eventBus } from "../services/event-bus.service";

  export default {
    name: 'reservation',
    data() {
      return {
        reservation:null
      }
    },
    created(){
      this.$store.getters.currOrder
    },
    computed: {
      myReservation(){
        return this.$store.getters.currOrder
      }
    },
    methods: {
      moveToHomePage(){
        eventBus.emit('go-to-main')
        this.$router.push('/stay')
      }
    } 
  }
</script>