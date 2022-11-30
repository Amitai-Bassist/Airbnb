<template>
  <section v-if="stay" class="stay-details">
    <h1>{{ stay.name }} </h1>
    <p class="review">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
       {{ reviewScore }} &#183; <span>{{ stay.reviews.length }} reviews</span> . Superhost . <span>{{ stay.loc.city }}, {{ stay.loc.country }}</span></p>
    <div class="img-container" >
      <img :src="imgUrl" alt="" v-for="imgUrl in stay.imgUrls" :key="imgUrl">
    </div>
    <reserve-modal v-if="isReserve"></reserve-modal>  

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
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true" role="presentation" focusable="false" 
          style="display: block; height: 24px; width: 24px; fill: currentcolor;">
          <path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path></svg>
          <div class="text">{{amenitie}}</div>
        </div>

        <button>Show all 68 amenities</button>
      </div>

      <stay-reserve :stay="stay" @isReserve="toggleReserve"></stay-reserve>

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
import { stayService } from "../services/stay.service.local.js";
import stayReserve from "../cmps/stay-reserve.vue";
import reserveModal from "../cmps/reserve-modal.vue";

export default {
  name: "stay-detail",
  data() {
    return {
      stay: null,
      isEditMode: false,
      isReserve: false,
    };
  },
  created() {
    const { id } = this.$route.params;
    console.log(id);
    stayService.getById(id).then((stay) => {
      this.stay = stay;
    });
    setTimeout(() => {
      this.getReviewScore();
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
    }
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
  },
  components: {
    stayReserve,
    reserveModal,
  },
};
</script>
