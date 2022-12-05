<template>
    <section >
      <button class="big-filter-btn grid column" @click="choseSearch('where')" v-bind:class="{isActive: WhereSearch}">
          <form action="" @submit="choseSearch('when-start')">
            <div>Where</div>
            <input class="input-search-big-filter" type="search" :placeholder="wherePlaceholder" v-model="filterBy.txt" >
          </form>
      </button>
      <div class="border-line-between"></div>
      <button class="big-filter-btn date grid"  v-bind:class="{isActive: whenStart}" @click="choseSearch('when-start')">
        <div>Check in</div>
        <button v-bind:class="resetActiveStart" @click="resetDate()" class="reset-date">x</button>
        <div>{{dateStart}}</div>
      </button>
      <div class="border-line-between"></div>
      <button class="big-filter-btn date grid"  v-bind:class="{isActive: WhenEnd}" @click="choseSearch('when-end')">
        <div>Check out</div>
        <button v-bind:class="resetActiveEnd" @click="resetDate()" class="reset-date">x</button>
        <div>{{dateEnd}}</div>
      </button>
      <div class="border-line-between"></div>
      <div class="big-filter-btn grid" v-bind:class="{isActive:WhoSearch}" @click="choseSearch('who')">
        <button class="who-filter-btn grid column" >
          <div>Who</div>
          <div>Add guests</div>
        </button>
        <button @click="onSearch()" class="main-filter-search-btn big">
          <div class="s1qcpybl dir dir-ltr" data-icon="true" data-testid="little-search-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg></div>
          <div>Search</div>
        </button>
      </div>
    </section>    
</template>

<script>
    import { eventBus } from '../services/event-bus.service'
    export default {
        props: ['isWhereSearch','iswhenStart','isWhenEnd','isWhoSearch']
        ,
        data(){
          return{
            whenStart: this.isWhenStart,
            WhenEnd: this.isWhenEnd,
            WhereSearch: this.isWhereSearch, 
            WhoSearch:this.isWhoSearch,
            filterBy: {
              txt:'',
              type: '',
              dateStart: '',dateEnd: '',
              guest: {adults: 0, children: 0, infants: 0, pets: 0}},
            dateStart: 'Add dates',
            dateEnd: 'Add dates',
            mainland: 'Search destination'
          }
        },
        mounted() {
          eventBus.on('chose-day-start', this.setDateStart)
          eventBus.on('chose-day-end', this.setDateEnd)
          eventBus.on('chose-where-mainland', this.setWhereMainland)
        },
        computed: {
          wherePlaceholder(){
            return this.mainland
          },
          resetActiveStart(){
            return {'reset-active':(this.whenStart & this.dateStart !== 'Add dates')}
          },
          resetActiveEnd(){
            return {'reset-active':(this.WhenEnd & this.dateEnd !== 'Add dates')}
          },
        },
        methods: {
          onSearch(){
            console.log(this.filterBy);
            this.$emit('clickedScreen')
            this.$store.dispatch({ type: "loadStays", filterBy: this.filterBy });
            this.$router.push('/stay/explore')
          },
          choseSearch(chose){
            this.WhereSearch= (chose === 'where')
            this.WhoSearch= (chose === 'who')
            this.whenStart= (chose === 'when-start') 
            this.WhenEnd= (chose === 'when-end') 
            this.$emit('clickedMain',chose)
          },
          setDateStart(date){
            this.dateStart = date.id
            this.filterBy.dateStart = date.date
            this.choseSearch('when-end')
          },
          setDateEnd(date){
            this.dateEnd = date.id
            this.filterBy.dateEnd = date.date
          },
          resetDate(){
            console.log('reset');
            this.dateStart = 'Add dates'
            this.filterBy.dateStart = ''
            this.dateEnd = 'Add dates'
            this.filterBy.dateEnd = ''
            this.choseSearch('when-start')
            eventBus.emit('reset-day-chose')
          },
          setWhereMainland(mainland){
            this.mainland = (mainland) ? mainland : 'search destination'
            this.choseSearch('when-start')
            this.filterBy.txt = mainland
          },
        },
    }
</script>