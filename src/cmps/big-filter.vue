<template>
    <section>
      <button class="big-filter-btn grid column" @click="choseSearch('where')" v-bind:class="{isActive: WhereSearch}">
        <form action="" @submit="onSearchByName()">
          <div>Where</div>
          <input type="search" placeholder="search destination" v-model="filterBy.txt" >
          <button>submit</button>
        </form>
      </button>|
      <button class="big-filter-btn grid column"  v-bind:class="{isActive: WhenStart}"><div>Check in</div><div>Add dates</div></button>|
      <button class="big-filter-btn grid column"  v-bind:class="{isActive: WhenEnd}"><div>Check out</div><div>Add dates</div></button>|
      <div class="big-filter-btn grid" v-bind:class="{isActive:WhoSearch}" @click="choseSearch('who')">
        <button class="who-filter-btn grid column" ><div>Who</div><div>Add guests</div></button>
        <button class="main-filter-search-btn big"><div class="s1qcpybl dir dir-ltr" data-icon="true" data-testid="little-search-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg></div><div>search</div></button>
      </div>
    </section>    
</template>

<script>
    import { eventBus } from '../services/event-bus.service'
    export default {
        props: ['isWhereSearch','isWhenStart','isWhenEnd','isWhoSearch']
        ,
        data(){
          return{
            WhenStart: this.isWhenStart,
            WhenEnd: this.isWhenEnd,
            WhereSearch: this.isWhereSearch, 
            WhoSearch:this.isWhoSearch,
            filterBy: {txt:''}
          }
        },
        mounted() {
          this.addEventListeners()
        },
        methods: {
          onSearchByName(){
            console.log(this.filterBy);
            this.$emit('clickedScreen')
            this.$store.dispatch({ type: "loadStays", filterBy: this.filterBy });
            this.$router.push('/stay/explore')
          },
          choseSearch(chose){
            this.addEventListeners()
            this.WhereSearch= (chose === 'where') ? true : false
            this.WhoSearch= (chose === 'who') ? true : false
            this.WhenStart= (chose === 'when-start') ? true : false
            this.WhenEnd= (chose === 'when-end') ? true : false
            this.$emit('clickedMain',chose)
          },
          resetAll(){
            this.WhenStart = false
            this.WhenEnd = false
            this.WhereSearch = false 
            this.WhoSearch = false
          },
          addEventListeners(){
            const elInput = document.querySelectorAll('.el-range-input')
            const elStartInput = elInput[0]
            const elEndInput = elInput[1]
            elStartInput.addEventListener("click", this.openStartCalendar,false)
            elStartInput.addEventListener("focus", this.openStartCalendar,false)
            elEndInput.addEventListener("click", this.openEndCalendar,false)
            elEndInput.addEventListener("focus", this.openEndCalendar,false)
          },
          openStartCalendar(){
            // this.resetAll()
            this.WhenEnd = false
            this.WhereSearch = false 
            this.WhoSearch = false
            this.WhenStart = true
            const chose = 'when-start'
            this.$emit('clickedMain',chose)
            this.addEventListeners()
          },
          openEndCalendar(){
            // this.resetAll()
            this.WhenStart = false
            this.WhereSearch = false 
            this.WhoSearch = false
            this.WhenEnd = true
            const chose = 'when-end'
            this.$emit('clickedMain',chose)
            this.addEventListeners()
          }
        },
    }
</script>