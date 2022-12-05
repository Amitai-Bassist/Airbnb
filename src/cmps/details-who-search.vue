<template>
    <section class="details-who-search">
    <div>
        <h2>Adults</h2>
        <p>Ages 13 or above</p>
    </div>
    <add-guest-num></add-guest-num>
    <div>
        <h1>Children</h1>
        <p>Ages 2-12</p>
    </div>
    <add-guest-num></add-guest-num>
    <div>
        <h1>Infants</h1>
        <p>Under age 2</p>
    </div>
    <add-guest-num></add-guest-num>
    <div>
        <h1>Pets</h1>
        <p>Bringing a service animal?</p>
    </div>
    <add-guest-num></add-guest-num>
    </section>
</template>

<script>
import addGuestNum from './add-guest-num.vue';

    export default {
        props: {
            
        },
        components:{
            addGuestNum 
        }
    }
</script>