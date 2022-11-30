<template>
    <Carousel :itemsToShow="8" :wrapAround="true" :transition="500">
      <Slide v-for="icon in icons" :key="icon">
        <img class="icon-filter-img" :src="icon" alt="1">

      </Slide>
      
        <template #addons>
        <Navigation class="navigate-filter-carousel"/>
        </template>
      ...
    </Carousel>
</template>
  
<script>
  import { defineComponent } from 'vue'
  import { Carousel,  Navigation,Pagination, Slide } from 'vue3-carousel'
  
//   import 'vue3-carousel/carousel.css'
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Autoplay',
    data(){
        return {
            icons: [
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758835/tropical_fgverw.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758830/trending_dc5gh8.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758826/top_of_the_world._jpg_b8wzyu.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758821/private_room_bdwxkv.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758817/play_v8l9un.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758812/omg_effgok.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758807/new_sfipxe.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758802/mansions_u4xctw.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758796/luxe_r6kico.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758792/iconic_cities_zij7ek.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758786/hanoks_aywmtj.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758781/design_mmixeo.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758775/castles_uwp3vj.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758770/cabins_hsuyh5.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758762/amazing_views_gixu8h.jpg",
                "https://res.cloudinary.com/airbnb22/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669758752/adapted_qivady.jpg",
                // "",
                // "",

        ]
        }
    },
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation
    },
  })
</script>
  
<style scoped>
  .carousel__slide {
    padding: 5px;
  }
  
  .carousel__viewport {
    perspective: 2000px;
  }
  
  .carousel__track {
    transform-style: preserve-3d;
  }
  
  .carousel__slide--sliding {
    transition: 0.5s;
  }
  
  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }
  
  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }
  
  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }
  
  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }
  
  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }
</style>