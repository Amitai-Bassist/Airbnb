<template>
    <section class="filter-modal-container">
        <h1>modal</h1>
        <price-slider-for-filter></price-slider-for-filter>
    </section>
</template>


<script>
    import priceSliderForFilter from './price-slider-for-filter.vue';
    export default {
        props: {
            
        },
        components:{
            priceSliderForFilter
        }
    }
</script>