<template>
    <section class="user-nav-bar">
        <router-link :to="`/user/${loggedInUser._id}`">
            Account
        </router-link>
        <router-link to="/login">Login / Signup</router-link>
    
    </section>
</template>


<script>
    export default {
        props: {
            loggedInUser: Object
        }
    }
</script>