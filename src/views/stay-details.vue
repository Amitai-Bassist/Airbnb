<template>
  <section v-if="stay" class="stay-details">
    <h1>{{ stay.name }} </h1>
    <div class="review">
      <div class="review-text">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
        {{ reviewScore }} &#183; &#160; <span class="review-num">{{ stay.reviews.length }} reviews</span> . Superhost . <span>{{ stay.loc.city }}, {{ stay.loc.country }}</span>
      </div>
      <div class="share-save">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;"><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></g></svg>
        &#160;
        <p class="under-line">Share</p>
        &#160;
        &#160;
        &#160;
        <svg class="heart" :class="[isSaved ? 'red' : 'white']" @click="toggleWishlist" 
          viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; stroke:#ffffff; stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
          <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        &#160;
        <p class="under-line">Save</p>
      </div>
    </div>
     <div class="img-container" ref="header">
      <img :src="imgUrl" alt="" v-for="imgUrl in stay.imgUrls.slice(0,5)" :key="imgUrl">
    </div>

    <div class="details-container">

      <div class="stay-ferrites">

        <div class="ferrites-header">

          <div class="header-text"> 
            <h3>Entire {{stay.type}} hosted by {{stay.host.fullname}}</h3>
            <p>{{stay.capacity}} guests &#183;</p>
          </div>
          
          <!-- change to host img after getting json -->
          <img src="https://a0.muscache.com/im/pictures/user/143723a2-07f4-4cb7-9754-d82d61930cf7.jpg?aki_policy=profile_large" alt="">

        </div>

        <div class="ferrites-main">
          <div class="line">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true" role="presentation" focusable="false" 
              style="display: block; height: 24px; width: 24px; fill: currentcolor;">
              <path d="M26 2a1 1 0 0 1 .922.612l.04.113 2 7a1 1 0 0 1-.847 1.269L28 11h-3v5h6v2h-2v13h-2l.001-2.536a3.976 3.976 0 0 1-1.73.527L25 29H7a3.982 3.982 0 0 1-2-.535V31H3V18H1v-2h5v-4a1 1 0 0 1 .883-.993L7 11h.238L6.086 8.406l1.828-.812L9.427 11H12a1 1 0 0 1 .993.883L13 12v4h10v-5h-3a1 1 0 0 1-.987-1.162l.025-.113 2-7a1 1 0 0 1 .842-.718L22 2h4zm1 16H5v7a2 2 0 0 0 1.697 1.977l.154.018L7 27h18a2 2 0 0 0 1.995-1.85L27 25v-7zm-16-5H8v3h3v-3zm14.245-9h-2.491l-1.429 5h5.349l-1.429-5z"></path></svg>
              
            <div class="text">
              <h4>Dedicated workspace</h4>
              <p>A private room with wifi that's well-suited for working.</p>
            </div>
              
          </div>

          <div class="line">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true" role="presentation" focusable="false" 
              style="display: block; height: 24px; width: 24px; fill: currentcolor;">
              <path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path></svg> 
              
            <div class="text">
              <h4>Self check-in</h4>
              <p>Check yourself in with the lockbox</p>
            </div>
              
          </div>
            
          <div class="line">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true" role="presentation" focusable="false" 
              style="display: block; height: 24px; width: 24px; fill: currentcolor;">
              <path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path></svg> 
              
            <div class="text">
                <h4>{{stay.host.fullname}} is a Superhost</h4>
                <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
            </div>

          </div> 

        </div>

      </div>

      <div class="aircover">
        <h2><span>air</span>cover</h2>
        <p>Every booking includes free protection from Host 
          cancellations, listing inaccuracies, and other 
          issues like trouble checking in.
        </p>
        <p class="learn-more">Learn more</p>
      </div>

      <div class="place-offers">
        <h2>What this place offers</h2>

        <div class="offer" v-for="amenitie in stay.amenities" :key="amenitie"> 
          <img :src="demoAmenities[findAmenitie(amenitie)].url" alt="" v-if="(demoAmenities.length > 0)" class="offer-img">
          <div class="text">{{amenitie}}</div>
        </div>

        <button>Show all 68 amenities</button>
      </div>

      <stay-reserve 
        :stay="stay" 
        @isReserve="toggleReserve"
        ref="nav" v-bind:style="{ position: stickyNav ? 'fixed' : 'static' }"
        :class="stickyNav? 'is-fixed': ''">
      </stay-reserve>
      <reserve-modal 
        v-if="isReserve" 
        :reservation="reservation" 
        :stay="stay"
        >
      </reserve-modal>

      <div class="rare-find">
        <p>
          <span>This is a rare find.</span> Halis's place on Airbnb is usually fully booked.
        </p>
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block;height: 32px;width: 32px;fill: rgb(227, 28, 95);stroke: currentcolor;"><g stroke="none"><path d="m32.62 6 9.526 11.114-18.146 23.921-18.147-23.921 9.526-11.114z" fill-opacity=".2"></path><path d="m34.4599349 2 12.8243129 14.9616983-23.2842478 30.6928721-23.28424779-30.6928721 12.82431289-14.9616983zm-17.9171827 16h-12.52799999l18.25899999 24.069zm27.441 0h-12.528l-5.73 24.069zm-14.583 0h-10.802l5.4012478 22.684zm-15.92-12.86-9.30799999 10.86h11.89399999zm19.253-1.141h-17.468l2.857 12.001h11.754zm1.784 1.141-2.586 10.86h11.894z"></path></g></svg>
      </div>

    </div>

    <!-- reviews -->
    <h2>Reviews</h2>
    <section v-if="stay.reviews"></section>

  </section>
</template>

<script>
  import { eventBus } from '../services/event-bus.service'
  import { stayService } from "../services/stay.service.local.js";
  import stayReserve from "../cmps/stay-reserve.vue";
  import reserveModal from "../cmps/reserve-modal.vue";

export default {
  name: "stay-detail",
  data() {
    return {
      stay: null,
      isSaved: false,
      isEditMode: false,
      isReserve: false,
      reservation: {
        checkIn:'', 
        checkOut:'', 
        totalPrice: null, 
        TotalNights: null, 
        adults:null,
        kids:null,
        pets:null,
        infants:null,
        reviewScore: this.$store.getters.reviewScore,
      },
      headerObserver: null,
      stickyNav: false,
    };
  },
  created() {
    const { id } = this.$route.params;
    stayService.getById(id).then((stay) => {
      this.stay = stay;
    });
    setTimeout(() => {
      this.getReviewScore();
    }, 500);
    this.totalDays(new Date('11/25/2022'),new Date('12/01/2022'),80)
    this.getDemoAmenities()
  },
  mounted() {
    setTimeout(() => {
      this.headerObserver = new IntersectionObserver(this.onHeaderObserved, {
        rootMargin: "-91px 0px 0px",
      });
      this.headerObserver.observe(this.$refs.header);
    }, 500);
  },
  methods: {
    updateReview({ target }, idx) {
      this.stay.reviews[idx].content = target.innerText;
      this.$store.dispatch({ type: "saveStay", stay: this.stay });
    },
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    },
    goBack() {
      this.$router.push("/stay");
    },
    getReviewScore() {
      this.$store.commit({
        type: "getReviewScore",
        stayReviews: this.stay.reviews,
      });
    },
    toggleReserve(){
      this.isReserve = !this.isReserve
    },
    totalDays(date1,date2,price=this.stay.price){
      const difference  = date2.getTime() - date1.getTime()
      this.reservation.totalPrice = Math.ceil(difference / (1000 * 3600 * 24)) * price
      this.reservation.TotalNights = Math.ceil(difference / (1000 * 3600 * 24))
    },
    getDemoAmenities(){
      this.$store.commit({type:"getDemoAmenities"})
    },
    findAmenitie(amenitie){
      const idx = this.demoAmenities.findIndex(Amenitie=> Amenitie.name === amenitie)
      return idx
    },
    toggleWishlist() {
        this.isSaved = !this.isSaved;
    },
    onHeaderObserved(entries) {
      console.log(entries);
      entries.forEach((entry) => {
        this.stickyNav = entry.isIntersecting ? false : true;
      });
    },

  },
  computed: {
    formattedDate() {
      var currStayCreatedAt = this.stay.createdAt;
      var formatedDate = new Date(currStayCreatedAt);
      return formatedDate;
    },
    reviewScore() {
      return this.$store.getters.reviewScore;
    },
    demoAmenities(){
      return this.$store.getters.demoAmenities;
    },
  },
  components: {
    stayReserve,
    reserveModal,
  },
};
</script>
