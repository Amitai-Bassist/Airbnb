<template>
    <section>
    <button class="main-filter-btn" @click="choseSearch('where')">Anywhere</button>
    <div class="border-line-between"></div>
    <button class="main-filter-btn" @click="choseSearch('when-start')">Any week</button>
    <div class="border-line-between"></div>
    <button class="main-filter-btn guest" @click="choseSearch('who')">Add guests</button>
    <button class="main-filter-search-btn" @click="choseSearch('where')"><div class="s1qcpybl dir dir-ltr" data-icon="true" data-testid="little-search-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg></div></button>
  </section>    
</template>

<script>
import { eventBus } from '../services/event-bus.service'
    export default {
        props: {
            
        },
        methods: {
            choseSearch(chose){
                this.$emit('clickedMain',chose)
                if (chose === 'when-start'){
                    console.log('when');
                    setTimeout(()=>{
                        eventBus.emit('when-selected')
                    },250)
                }
            }    
        },
    }
</script>

