<template>
    <section class="details-who-search flex column">
        <div class="flex row space-between">
            <div class="flex column">
                <h1>Adults</h1>
                <p>Ages 13 or above</p>
            </div>
            <add-guest-num @changeNum="changeNum" :number="1"></add-guest-num>
        </div>
        <div class="flex row space-between">
            <div>
                <h1>Children</h1>
                <p>Ages 2-12</p>
            </div>
            <add-guest-num @changeNum="changeNum" :number="0"></add-guest-num>
        </div>
        <div class="flex row space-between">
            <div>
                <h1>Infants</h1>
                <p>Under age 2</p>
            </div>
            <add-guest-num @changeNum="changeNum" :number="0"></add-guest-num>
        </div>
        <div class="flex row space-between">
            <div>
                <h1>Pets</h1>
                <p>Bringing a service animal?</p>
            </div>
            <add-guest-num @changeNum="changeNum" :number="0"></add-guest-num>
        </div>
    </section>
</template>

<script>
import addGuestNum from './add-guest-num.vue';

    export default {
        props: {
            
        },
        data(){
            return{
                totalGuest:0,
            }
        },
        methods:{
            changeNum(num){
                this.totalGuest += num
                if (this.num === -1 || this.num === 0){
                    this.totalGuest = 0
                }
                this.$emit('totalGuest',num)
            }
        },
        components:{
            addGuestNum 
        }
    }
</script>