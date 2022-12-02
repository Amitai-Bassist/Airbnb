<template>
        <el-card :body-style="{ padding: '0px' }" class="stay-preview">
        
            <stay-imgs-preview :imgs="stay.imgUrls" @goToDetails="goToDetails"></stay-imgs-preview>
          <div class="stay-desc" @click="goToDetails">
            <div class="bottom">
                <p class="stay-name grid-item-1">{{ stay.name }} </p>
                <div class="grid-item-3 flex row">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>  
                  <p>&nbsp;4.67</p>
                </div>
             
                <p class="grid-item-2">{{ stay.loc.address +" "+ stay.loc.city + "," + " " + stay.loc.country }} </p>
                <p class="grid-item-5">1 bed</p>
                <p class="grid-item-4"><span class="price">${{ stay.price?.toLocaleString() }}</span> night</p>
              
               
              <!-- <el-button text class="button">Operating</el-button> -->
            </div>
          </div>
  
        </el-card>
</template>

<script>
    // import { ref } from 'vue'
    import stayImgsPreview from './stay-imgs-preview.vue';
    import { eventBus } from '../services/event-bus.service';
    export default {
        props: {
            stay: Object
        },
        data() {
          return {
            newStayName: null,
          }
        },
        methods: {
          goToDetails() {
            eventBus.emit('go-to-details')
            this.$router.push( `/stay/${this.stay._id}`) 
          }
        },
        computed: {
          stayName() {
            var newName = this.stay.name.splice(0,25);

            newStayName = newName;
            // this.stay.name = newStayName;
          //  return newStayName

          }
        },
        components: {
            stayImgsPreview 
        }

   }
</script>


