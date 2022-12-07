<template>
    <section style="margin-top:100px;" class="stay-reservation" v-if="myReservation">
      <h1>Reservation</h1>
      <h1>Reservation Success!</h1>
      <h2>Tour trip:</h2>
      <div class="your-trip">Check-In <span>{{myReservation.startDate}}</span></div>
      <div class="your-trip">Check-Out <span>{{myReservation.endDate }}</span></div>
      <!-- <div class="your-trip">Host name<span>{{stay.host.fullname}}</span></div> -->
      <div class="end"></div>
      <h2>Stay details:</h2>
      <div class="reservation-details">
        <!-- <img :src="stay.imgUrls[0]" alt=""> -->
        <div class="text">
          <p class="top">{{myReservation.stay.name}}</p>
          <!-- <p class="middle">{{stay.type}}</p> -->
          <!-- <p class="review">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
            4.0 &nbsp;<span>({{ stay.reviews.length }} reviews)</span>
          </p> -->
        </div>
      </div>
      <div class="end"></div>
      <div class="price-details">
        <h2>price-details</h2>
        <div class="your-trip">Adults: <span>{{myReservation.guests.adults }}</span></div>
        <div v-if="myReservation.guests.kids" class="your-trip">Kids: <span>{{myReservation.guests.kids}}</span></div>
        <div v-if="myReservation.guests.infants" class="your-trip">Infants:<span>{{reservmyReservation.guests.infants}}</span></div>
        <div v-if="myReservation.guests.pets" class="your-trip">Pets: <span>{{reservmyReservation.guests.pets}}</span></div>
        <div class="your-trip">Total price: <span>${{myReservation.totalPrice}}</span></div>
        <!-- <div class="your-trip">Total nights: <span>{{reservation.TotalNights}}</span></div> -->

      <div class="btn-container" @click="onReserve">
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
    </section> 
    
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
        
    } 
  }
</script>