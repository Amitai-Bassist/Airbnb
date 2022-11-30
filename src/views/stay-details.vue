<template>
  <section v-if="stay" class="stay-details flex flex-col items-center gap-2">
    <article>
      <p><span class="fw-bold">Reviews</span> {{ reviewScore }}</p>
      <p><span class="fw-bold">Name:</span> {{ stay.name }}</p>
      <p><span class="fw-bold">address:</span> {{ stay.loc }}</p>
      <p><span class="fw-bold">Price:</span> ${{ stay.price }}</p>
      <img :src="stay.imgUrls[0]" alt="">
    </article>
    <button @click="goBack" class="btn btn-primary">go back</button>

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
  },
  computed: {
    formattedDate() {
      var currStayCreatedAt = this.stay.createdAt
      var formatedDate = new Date(currStayCreatedAt)
      return formatedDate
    },
    reviewScore(){
      return this.$store.dispatch({ type: 'getReviewScore', stayReviews: this.stay.reviews})
    }
  },
  components: {
    stayReserve,
  }
}
</script>
