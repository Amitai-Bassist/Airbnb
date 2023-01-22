<template>
  <section class="mobile-search-modal">
    <button @click="goBack" class="btn-back">Back</button>
    <where-to-modal v-if="searchTabToggle.isWhereOn"/>
    <section class="where-to-modal-close flex space-between" v-else @click="toggleSearchTab('isWhereOn')">
      <div>Where</div> 
      <div>{{ mainland }}</div>
    </section>
    <section class="when-modal" v-if="searchTabToggle.isWhenOn">hi</section>
    <section class="who-modal"></section>
    <div class="action-container flex space-between">
        <div>
            clear
        </div>
      <div class="btn-search" @click="onSearch">
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
            <span class="btn">Search</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { eventBus } from '../services/event-bus.service'
import whereToModal from "./where-to-modal.vue"
export default {
  data() {
    return {
      searchTabToggle:{isWhereOn: true,isWhenOn:false,isWhoOn:false},
      mainland:'I\'m flexible',
    };
  },
  created() {},
  mounted(){
    eventBus.on('chose-where-mainland',this.changeMainland)
  },
  methods: {
    onSearch(){
        console.log('search');
        eventBus.emit('search-stays')
    },
    goBack(){
        eventBus.emit('go-back')
    },
    changeMainland(mainland){
      this.mainland = mainland === ''? 'I\'m flexible' : mainland
      this.searchTabToggle.isWhereOn = false
      this.searchTabToggle.isWhenOn = true
    },
    toggleSearchTab(tab){
      for (const property in this.searchTabToggle) {
        this.searchTabToggle[property] = false
      }
      this.searchTabToggle[tab] = true
    }
    
  },
  computed: {},
  components: {
    whereToModal,
  },
};
</script>
