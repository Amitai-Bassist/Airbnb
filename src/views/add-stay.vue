<template>
    <section class="stay-details main-container">
    
  <h1 style="margin-top: 200px">host a new home</h1>
    <el-form class="add-stay-form" :model="form" label-width="120px">

      <el-form-item label="New place name">
        <el-input v-model="form.name" />
      </el-form-item>

      <el-form-item label="Place category">
        <el-select v-model="form.type" placeholder="Select a type">
          <el-option label="Lux" value="Lux" />
          <el-option label="Tropical" value="Tropical" />
        </el-select>
      </el-form-item>

   
      <el-form-item label="Available now">
        <el-switch v-model="form.delivery" />
      </el-form-item>

      <el-form-item label="Price per night">
        <el-input v-model="form.price" />
      </el-form-item>

      <el-form-item label="Place description">
        <el-input v-model="form.summary" type="textarea" />
      </el-form-item>

    <el-form-item label="Capacity">
        <el-input-number v-model="form.capacity" :min="1" :max="16" @change="handleChangeCapacity"/>
    </el-form-item>

    <el-form-item label="Amenities">
        <el-checkbox-group v-model="form.amenities">
          <el-checkbox label="TV" name="TV" />
          <el-checkbox label="Internet" name="Internet" />
          <el-checkbox label="Wifi" name="Wifi" />
          <el-checkbox label="Air conditioning" name="Air conditioning" />
          <el-checkbox label="Kitchen" name="Kitchen" />
          <el-checkbox label="Elevator" name="Elevator" />
          <el-checkbox label="Heating" name="Heating" />
          <el-checkbox label="Family/kid friendly" name="Family/kid friendly" />
          <el-checkbox label="Washer" name="Washer" />
          <el-checkbox label="Dryer" name="Dryer" />
          <el-checkbox label="Essentials" name="Essentials" />
          <el-checkbox label="Shampoo" name="Shampoo" />
          <el-checkbox label="Hangers" name="Hangers" />
          <el-checkbox label="Hair dryer" name="Hair dryer" />
          <el-checkbox label="Iron" name="Iron" />
          <el-checkbox label="Laptop friendly workspace" name="Laptop friendly workspace" />
          <el-checkbox label="Hot water" name="Hot water" />
          <el-checkbox label="Bed linens" name="Bed linens" />
          <el-checkbox label="Microwave" name="Microwave" />
          <el-checkbox label="Coffee maker" name="Coffee maker" />
          <el-checkbox label="Refrigerator" name="Refrigerator" />
          <el-checkbox label="Dishwasher" name="Dishwasher" />
        </el-checkbox-group>
    </el-form-item>

    <el-form-item label="Bathrooms">
        <el-input-number v-model="form.bathrooms" :min="1" :max="16" @change="handleChangeBathrooms"/>
    </el-form-item>

    <el-form-item label="Bedrooms">
        <el-input-number v-model="form.bedrooms" :min="1" :max="16" @change="handleChangeBedrooms"/>
    </el-form-item>  

    <el-form-item label="Place type">
        <el-select v-model="form.roomType" placeholder="Select a type">
          <el-option label="Entire home/apt" value="Entire home/apt" />
          <el-option label="Private room" value="Private room" />
          <el-option label="Shared room" value="Shared room" />
        </el-select>
    </el-form-item>

    <el-form-item label="Country">
        <el-input v-model="form.loc.country" />
    </el-form-item>

    <el-form-item label="Country code">
        <el-input v-model="form.loc.countryCode" />
    </el-form-item>

    <el-form-item label="City">
        <el-input v-model="form.loc.city" />
    </el-form-item>

    <el-form-item label="Address">
        <el-input v-model="form.loc.address" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm"
        >Create</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
    </el-form>
    <section class="img-container">
    <div class="img-gallery">
        <img-upload  v-if="!imgUrls[0]" @saved="saveImg"></img-upload>
        <img v-else :src="imgUrls[0]" alt="">
    </div>
    <div class="img-gallery">
        <img-upload v-if="!imgUrls[1]" @saved="saveImg"></img-upload>
        <img v-else :src="imgUrls[1]" alt="">
    </div>
    <div class="img-gallery">
        <img-upload v-if="!imgUrls[2]" @saved="saveImg"></img-upload>
        <img v-else :src="imgUrls[2]" alt="">
    </div>
    <div class="img-gallery">
        <img-upload v-if="!imgUrls[3]" @saved="saveImg"></img-upload>
        <img v-else :src="imgUrls[3]" alt="">
    </div>
    <div class="img-gallery">
        <img-upload v-if="!imgUrls[4]" @saved="saveImg"></img-upload>
        <img v-else :src="imgUrls[4]" alt="">
    </div>
    </section>
    <!-- <img-list-after-uploading :imgUrls="imgUrls"></img-list-after-uploading> -->
    </section>
</template>

<script>
import { reactive } from 'vue'
import { ref } from 'vue'
import imgUpload from '../cmps/img-upload.vue'
import imgListAtferUploading from '../cmps/img-list-after-uploading.vue'
import {imgService} from '../services/img-sevice'

export default {
    created() {

    },
    data() {
        return {
            imgUrls: [],
            loggedinUser: null,
            num: ref(1),
            form: reactive({
                name: '',
                type: '',
                price: '',
                summary: '',
                capacity: 1,
                delivery: '',
                amenities: [],
                bathrooms: 1,
                bedrooms: 1,
                roomType: '',
                loc: {
                    country: '',
                    countryCode: '',
                    city: '',
                    address: '',
                },
            })
        }
    },
    created(){
    },
    computed: {
        
    },
    methods: {
        saveImg(url) {
            this.imgUrls.push(url)
            console.log(this.imgUrls);
            // imgService.saveImg(url)
        },
        async submitForm(){
            console.log(this.form)
            var stay = this.form
            stay.reviews = []
            stay.loc.lan = 20.93792
            stay.loc.lat= 156.6917
            stay.imgUrls = ["http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg"]
            const newStay = await this.$store.dispatch({ type: "addStay" ,stay: stay });
            console.log('sucsses');
        },
        handleChangeBathrooms(value){
            this.form.bathrooms = value
        },
        handleChangeBedrooms(value){
            this.form.bedrooms = value
        },
        handleChangeCapacity(value){
            this.form.capacity = value
        },
    },
    components:{
        imgUpload,
        imgListAtferUploading
    }
}
</script>
