<template>
    <el-row>
      <el-col v-for="stay in stays" :key="stay._id" :span="10" :offset="2">
        <stay-preview :stay="stay"></stay-preview>
      </el-col>
    </el-row>
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
  