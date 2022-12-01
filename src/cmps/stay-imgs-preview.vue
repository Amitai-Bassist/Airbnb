<template>
    <Carousel>
      <Slide v-for="image in imgs" :key="image" @click="goToDetails" @mouseover="toggleHover">
        <div class="carousel__item"><img :src="image" ></div>
      </Slide>
      
      <template #addons>

        <Pagination />
        <Navigation class="navigate-filter-carousel"/>
        <button class="add-to-wishlist" @click="toggleWishlist">
  <svg class="heart" :class="[isSaved ? 'red' : 'grey']" 
   viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; stroke:#ffffff; stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
  <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        </button>
      </template>

    </Carousel>
</template>
  
<script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  export default defineComponent({
    name: 'stay-imgs-preview',
    props: {
        imgs: Array
    },
    data() {
      return {
        isSaved: false,
        isHover: false,
      }
    },
    methods: {
          goToDetails() {
            this.$emit('goToDetails')
          },
          toggleWishlist() {
        this.isSaved = !this.isSaved;
      },
          toggleHover() {
        this.isHover = !this.isHover;
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
    border-radius: 10px;
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
    aspect-ratio: 1.05172414/1
  }
  .carousel__pagination {
    z-index: 1;
    top:88%;
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

/* TODO not working yet */
/* li.carousel__pagination-item:last-of-type button::after{
  height: 4px;
  width: 4px;
  } */

  button.add-to-wishlist {
    background-color: transparent;
    position: absolute;
    z-index: 2;
    top:1%;
    right:1%;
    
  }
  .grey{
    fill: rgba(0, 0, 0, 0.5);
  }
 .red{
    fill: #ff385c;
  }
</style>