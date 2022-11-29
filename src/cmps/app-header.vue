<template>
  <header>
    <nav>
      <router-link to="/">
        <span role="img" aria-label="logo">🙏</span>
      </router-link>
      <router-link to="/stay">Stays</router-link>
      <router-link to="/review">Reviews</router-link>
      <router-link to="/chat">Chat</router-link>
      <router-link to="/login">Login / Signup</router-link>
    </nav>
    <section class="loggedin-user" v-if="loggedInUser">
      <router-link :to="`/user/${loggedInUser._id}`">
        {{ loggedInUser.fullname }}
      </router-link>
      <img :src="loggedInUser.imgUrl" />
      <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="" width="24" height="24">
    </section>
  </header>
</template>
<script>
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  }
}
</script>