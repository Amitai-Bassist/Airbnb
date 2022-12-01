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
    name: 'stay-imgs-preview',
    props: {
        imgs: Array
    },
    methods: {
          goToDetails() {
            this.$emit('goToDetails')
          }
        },
    computed: {

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
  .carousel__viewport {
    border-radius: 20px;
    /* min-height: 232px; */
  }
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
  
  .slide {
    width: 250px;
  }
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
    width: 25px;
  height: 25px;
  }
  .carousel__item img{
   min-height: 232px;
    min-width: 244px;
    object-fit: cover;
    vertical-align: bottom;
    border-radius: rem(20px);
    aspect-ratio: 1/1
  }
  .carousel__pagination {
    z-index: 1;
    top:90%;
    right: 42%;
   
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
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: white;
  opacity: 50%;
}

/* TODO not working yer */
.carousel__pagination-button::after:last-of-type{
    height: 2px;
    width: 2px;
  }

button.carousel__pagination-button {
  padding: 2.2px;
}
.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: #fffefe;
  opacity: 100%;
}

.carousel__next--disabled,
.carousel__prev--disabled {
  cursor: not-allowed;
  opacity: 0.0;
}

.carousel__item:hover {
}
</style>