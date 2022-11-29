<template>
  <section v-if="stay" class="stay-details flex flex-col items-center gap-2">
    <article>
      <p><span class="fw-bold">ID:</span> {{ stay._id }}</p>
      <p><span class="fw-bold">Name:</span> {{ stay.name }}</p>
      <p><span class="fw-bold">address:</span> {{ stay.loc }}</p>
      <p><span class="fw-bold">Price:</span> ${{ stay.price }}</p>
      <img :src="stay.imgUrls[0]" alt="">
      <!-- <p><span class="fw-bold">Created at:</span> {{ formattedDate }}</p> -->
      <!-- <ul v-if="stay.reviews?.length>=1">
        <span class="fw-bold"> Reviews:</span>
        <li v-for="review in stay.reviews"> {{ review }} </li>
      </ul> -->
    </article>
    <button @click="goBack" class="btn btn-primary">go back</button>

    <!-- reviews -->
    <h2>Reviews</h2>
    <stay-reserve></stay-reserve>
    <section v-if="stay.reviews">
      <!-- <article
        v-editable="isEditMode"
        v-for="({ content, user, id }, idx) in stay.reviews"
        :key="id"
      >
        <button @click="toggleEditMode">edit review</button>
        <h3>{{ user }}</h3>
        <span @blur="updateReview($event, idx)">{{ content }}</span>
      </article> -->
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
      console.log('stay',stay);
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
  },
  components: {
    stayReserve,
  }
}
</script>
