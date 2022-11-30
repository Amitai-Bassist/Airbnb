<template>
  <section>
    <user-msg/>
    <app-upper-header />
    <app-second-header/>
    <router-view/>
  </section>
</template>

<script>


import { store } from './store/store'
import appUpperHeader from './cmps/app-upper-header.vue'
import appSecondHeader from './cmps/app-second-header.vue'
import userMsg from './cmps/user-msg.vue'
import { userService } from './services/user.service'


export default {

  created() {
    console.log('Vue App created')
    const user = userService.getLoggedinUser()
    if (user)  store.commit({type: 'setLoggedinUser', user})
  },
  components: {
    appUpperHeader,
    appSecondHeader,
    userMsg
  },
}
</script>