<template>
  <section v-if="stay" class="stay-details">
    <h1>{{ stay.name }} </h1>
    <p>{{ reviewScore }} &#183; <span>{{ stay.reviews.length }} reviews</span> . Superhost . <span>{{ stay.loc.city }}, {{ stay.loc.country }}</span></p>
    <div class="img-container" >
    <img :src="imgUrl" alt="" v-for="imgUrl in stay.imgUrls" :key="imgUrl">
    </div>

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
              <path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path></svg>            <div class="text">
            <h4>Self check-in</h4>
            <p>Check yourself in with the lockbox</p>
            </div>
          </div>
          <div class="line">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true" role="presentation" focusable="false" 
              style="display: block; height: 24px; width: 24px; fill: currentcolor;">
              <path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path></svg>            <div class="text">
            <h4>{{stay.host.fullname}} is a Superhost</h4>
            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
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
    </div>

    <!-- reviews -->
    <h2>Reviews</h2>
    <stay-reserve></stay-reserve>
    <section v-if="stay.reviews">
    </section>
  </section>
</template>

<script>
import { stayService } from '../services/stay.service.local.js'
import stayReserve from '../cmps/stay-reserve.vue'

export default {
  name: 'stay-detail',
  data() {
    return {
      stay: null,
      isEditMode: false,
    }
  },
  created() {
    const { id } = this.$route.params
    console.log(id);
    stayService.getById(id).then((stay) => {
      this.stay = stay
    })
    setTimeout(() => {
      this.getReviewScore()
    },500)
      
  },
  methods: {
    updateReview({ target }, idx) {
      this.stay.reviews[idx].content = target.innerText
      this.$store.dispatch({ type: 'saveStay', stay: this.stay })
    },
    toggleEditMode() {
      this.isEditMode = !this.isEditMode
    },
    goBack() {
      this.$router.push('/stay')
    },
    getReviewScore(){
      this.$store.commit({ type: 'getReviewScore', stayReviews: this.stay.reviews})
    }
  },
  computed: {
    formattedDate() {
      var currStayCreatedAt = this.stay.createdAt
      var formatedDate = new Date(currStayCreatedAt)
      return formatedDate
    },
    reviewScore(){
      return this.$store.getters.reviewScore
    }
  },
  components: {
    stayReserve,
  }
}
</script>
