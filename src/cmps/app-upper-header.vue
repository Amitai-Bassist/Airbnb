<template>
  <header>
      <nav>
        <router-link to="/stay" class="flex router-logo-link">
          <img class="airbnb-logo" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669976706/bdcvkjwqkucgzr2bka5x.svg" alt="logo">
          <h1>staybnb</h1> 
        </router-link>
      </nav>
      <main-filter @clickedMain="clickedMain" v-if="isMainFilter" class="main-filter-btns"></main-filter>
      <big-filter @clickedMain="clickedMain" :isWhereSearch="isWhereSearch" :isWhoSearch="isWhoSearch" :isWhenEnd="isWhenEnd" :isWhenStart="isWhenStart"
       v-if="isBigFilter" class="big-search-filter flex row"></big-filter>
      <section @click="openUserNav=!openUserNav" class="loggedin-user" v-if="loggedInUser">
        <img src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669794047/airbnb/dgxtegsrfyrdcywi0vij.png" alt="">
        <img :src="loggedInUser.imgUrl" />
      </section>
      
  </header>
  <div class="full screen-shadow" @click="clickedScreen" v-if="isBigFilter"></div>
  <user-nav-bar v-if="openUserNav" :loggedInUser="loggedInUser"></user-nav-bar>
  <stay-where-search class="" v-if="isWhereSearch"></stay-where-search>
  <stay-when-search class="" v-if="(isWhenStart || isWhenEnd)"></stay-when-search>
  <stay-calendar v-if="isBigFilter"></stay-calendar>
  <stay-who-search class="" v-if="isWhoSearch"></stay-who-search>
    
</template>
<script>
import stayCalendar from './stay-calendar.vue';
import userNavBar from './user-nav-bar.vue';
import stayWhereSearch from './stay-where-search.vue'
import stayWhenSearch from './stay-when-search.vue'
import stayWhoSearch from './stay-who-search.vue'
import mainFilter from './main-filter.vue'
import bigFilter from './big-filter.vue'
export default {
  data(){
    return {
      openUserNav: false,
      isMainFilter: true,
      isBigFilter:false,
      isWhereSearch: false,
      isWhoSearch: false,
      isWhenStart: false,
      isWhenEnd: false,
      
    }
  },
  methods:{
    clickedMain(chose){
      this.isMainFilter = false
      this.isBigFilter = false
      this.isBigFilter = true
      this.isWhereSearch = false
      this.isWhoSearch = false
      this.isWhenStart = false
      this.isWhenEnd = false
      if (chose === 'where') this.isWhereSearch = true
      if (chose === 'when-start') this.isWhenStart = true
      if (chose === 'when-end') this.isWhenEnd = true
      if (chose === 'who') this.isWhoSearch = true
      
    },
    clickedScreen(){
      this.isMainFilter = true
      this.isBigFilter = false
      this.isWhereSearch = false
      this.isWhenStart = false
      this.isWhenEnd = false
      this.isWhoSearch = false
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  },
  components: {
    userNavBar,
    stayWhereSearch,
    mainFilter,
    bigFilter,
    stayWhenSearch,
    stayWhoSearch,
    stayCalendar
  }
}
</script>