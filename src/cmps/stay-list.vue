<template>
    <el-row>
      <el-col v-for="stay in stays" :key="stay._id" :span="10" :offset="2">
        <el-card :body-style="{ padding: '0px' }">
            <stay-imgs-preview :imgs="stay.imgUrls"></stay-imgs-preview>
          <div style="padding: 14px">
            <div class="bottom">
                <p>{{ stay.name }} </p>
                <p>${{ stay.price?.toLocaleString() }}</p>
                <button @click="removeStay(stay._id)">x</button>
                <button @click="updateStay(stay)">Update</button>
                <router-link :to="`/stay/${stay._id}`">details</router-link>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
</template>
  
<script>
    // import { ref } from 'vue'
    import stayImgsPreview from './stay-imgs-preview.vue';
    export default {
        props: {
            stays: Object
        },
        created(){
        },
        components: {
            stayImgsPreview 
        }

   }
</script>
  
  
<style>
  .time {
    font-size: 12px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .button {
    padding: 0;
    min-height: auto;
  }
  
  .image {
    width: 100%;
    display: block;
  }
  </style>
  