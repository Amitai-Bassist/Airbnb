<template>
        <el-card :body-style="{ padding: '0px' }" class="stay-preview">
          <router-link :to="`/stay/${stay._id}`">
            <stay-imgs-preview :imgs="stay.imgUrls"></stay-imgs-preview>
          <div class="stay-desc" style="padding: 14px">
            <div class="bottom">
                <p>{{ stay.name }} </p>
                <p>${{ stay.price?.toLocaleString() }}</p>
              
               
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </router-link>
        </el-card>
</template>

<script>
    // import { ref } from 'vue'
    import stayImgsPreview from './stay-imgs-preview.vue';
    export default {
        props: {
            stay: Object
        },
        created(){
        },
        components: {
            stayImgsPreview 
        }

   }
</script>


