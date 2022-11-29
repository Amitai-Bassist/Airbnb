<template>
        <p>{{ stay.name }} </p>
        <p>${{ stay.price?.toLocaleString() }}</p>
        <button @click="removeStay(stay._id)">x</button>
        <button @click="updateStay(stay)">Update</button>
        <hr />
        <router-link :to="`/stay/${stay._id}`">details</router-link>
        <button @click="addStayMsg(stay._id)">Add stay msg</button>
        <button @click="printStayToConsole(stay)">Print msgs to console</button>
</template>

<script>
    export default{
        props:{
            stay: Object
        }
    }
</script>


