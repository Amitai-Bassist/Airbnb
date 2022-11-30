<template>
    <Carousel>
      <Slide v-for="image in imgs" :key="image" @click="goToDetails">
        <div class="carousel__item"><img :src="image" ></div>
      </Slide>
      
      <template #addons>
        <Pagination />
        <Navigation class="navigate-filter-carousel"/>
      </template>
    </Carousel>
</template>
  
<script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  
//   import 'vue3-carousel/carousel.css'
import 'vue3-carousel/dist/carousel.css'

  
  export default defineComponent({
    name: 'Basic',
    props: {
        imgs: Array
    },
    methods: {
          goToDetails() {
            this.$emit('goToDetails')
          }
        },
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  })
</script>
  
<style>
  .carousel__item {
    height: 100%;
    min-width: 244px;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    /* padding: 10px; */
  }
  
  .slide {
    width: 250px;
  }
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
  .carousel__item img{
    height: 232px;
    min-width: 244px;
    object-fit: cover;
  
  }
  .carousel__pagination {
    z-index: 100;
    top: 85%;
    right: 35%;
   
    position: absolute;
  }
  .carousel__pagination-button {
    border-radius: 50%;
  }
  section.carousel {
    height: 100%;
    min-width: 244px;
    }
    .carousel__pagination-button::after {
  display: block;
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--vc-pgn-background-color);
}
</style>