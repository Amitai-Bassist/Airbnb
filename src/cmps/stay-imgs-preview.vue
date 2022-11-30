<template>
    <Carousel>
      <Slide v-for="image in imgs" :key="image">
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
    height: 400px;
    width: 100%;
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
<<<<<<< HEAD

  .carousel__item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
=======
  .carousel__item img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  
>>>>>>> 7ca1ea60c0d728287dc26fbcd6a7abf9221337bc
</style>