<template>
        <el-card :body-style="{ padding: '0px' }" class="stay-preview">
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


