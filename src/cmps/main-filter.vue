<template>
    <section @click="choseSearch('where')">
    <h1>Where to?</h1>
    <button class="main-filter-btn"  @click="choseSearch('where')">{{where}}</button>
    <div class="border-line-between" @click="choseSearch('where')"></div>
    <button class="main-filter-btn"  @click="choseSearch('when-start')">{{when}}</button>
    <div class="border-line-between" @click="choseSearch('when-start')"></div>
    <button class="main-filter-btn guest"  @click="choseSearch('who')">{{who}}</button>
    <button class="main-filter-search-btn" @click="choseSearch('where')"><div class="s1qcpybl dir dir-ltr" data-icon="true" data-testid="little-search-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg></div></button>
  </section>    
</template>

<script>
import { eventBus } from '../services/event-bus.service'
    export default {
        props: {
            
        },
        data() {
            return {
                // where: 'Anywhere',
                // when: 'Any week',
                // who: 'Add guests'
                whereToGo: null
            }
        },
        created() {
            eventBus.on('indicates-for-main-filter', this.putIndicates)
            
        },
        methods: {
            choseSearch(chose){
                this.$emit('clickedMain',chose)
            },
            putIndicates(indicates){
                console.log('hi');
                // this.where = 'aba'
                // this.when = indicates.when
                // this.who = indicates.who 
                // console.log(this.where,this.when,this.who);
                
                this.whereToGo = 'aba'
            }    
        },
        computed: {
            where(){
                console.log(this.whereToGo);
                return this.whereToGo ||  'Anywhere'
            },
            when(value = ''){
                return 'Any week'
            },
            who(value = ''){
                return 'Add guests'
            }
        },
    }
</script>

