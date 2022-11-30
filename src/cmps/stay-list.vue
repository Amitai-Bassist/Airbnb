<template>
  <section class="stay-list">
    <div class="cards-layout">
      <div v-for="stay in stays" :key="stay._id" class="card">
        <stay-preview :stay="stay"></stay-preview>
      </div>
    </div>
  </section>
</template>
  
<script>
    // import { ref } from 'vue'
    import stayPreview from './stay-preview.vue';
    export default {
        props: {
            stays: Object
        },
        created(){
        },
        components: {
            stayPreview 
        }

   }
</script>
  
  
<style>
  /* .time {
    font-size: 12px;
    color: #999;
  } */
  
  /* .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .button {
    padding: 0;
    min-height: auto;
  } */
  
  /* .image {
    width: 100%;
    display: block;
  } */
  </style>
  