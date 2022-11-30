<template>
  <section v-if="stay" class="stay-details">
    <h1>{{ stay.name }} </h1>
    <p>{{ reviewScore }} &#183; <span>{{ stay.reviews.length }} reviews</span> . Superhost . <span>{{ stay.loc.city }}, {{ stay.loc.country }}</span></p>
    <div class="img-container" >
    <img :src="imgUrl" alt="" v-for="imgUrl in stay.imgUrls" :key="imgUrl">
    </div>

    <div class="stay-ferrites"> 
      <h3>Entire {{stay.type}} hosted by {{stay.host.fullname}}</h3>
      <p>{{stay.capacity}} guests &#183; </p>
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
