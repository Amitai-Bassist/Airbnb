<template>
    <section class="stay-who-search">
    <div>
        <h2>Adults</h2>
        <p>Ages 13 or above</p>
    </div>
    <add-guest-num :number="guests.adults" @changeNum="setAdultsGuests"></add-guest-num>
    <div>
        <h1>Children</h1>
        <p>Ages 2-12</p>
    </div>
    <add-guest-num  :number="guests.children" @changeNum="setChildrenGuests"></add-guest-num>
    <div>
        <h1>Infants</h1>
        <p>Under age 2</p>
    </div>
    <add-guest-num :number="guests.infants" @changeNum="setInfantsGuests"></add-guest-num>
    <div>
        <h1>Pets</h1>
        <p>Bringing a service animal?</p>
    </div>
    <add-guest-num  :number="guests.pets" @changeNum="setPetsGuests"></add-guest-num>
    </section>
</template>

<script>
import { eventBus } from '../services/event-bus.service'
import addGuestNum from './add-guest-num.vue';

    export default {
        props: {
            
        },
        data(){
            return{
                guests: {
                    adults: 0, 
                    children: 0, 
                    infants: 0, 
                    pets: 0
                }
            }
        },
        methods: {
            setAdultsGuests(num){
                console.log(num);
                this.guests.adults = num    
                console.log(this.guests);
                eventBus.emit('chose-who-guests', this.guests)
            },
            setChildrenGuests(num){
                console.log(num);
                this.guests.children = num 
                console.log(this.guests);   
                eventBus.emit('chose-who-guests', this.guests)
            },
            setInfantsGuests(num){
                console.log(num);
                this.guests.infants = num
                console.log(this.guests);    
                eventBus.emit('chose-who-guests', this.guests)
            },
            setPetsGuests(num){
                console.log(num);
                this.guests.pets = num   
                console.log(this.guests); 
                eventBus.emit('chose-who-guests', this.guests)
            },

            
        },
        components:{
            addGuestNum 
        }
    }
</script>