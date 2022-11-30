<template>
    <section class="user-nav-bar">
        <router-link :to="`/user/${loggedInUser._id}`">
            Account dashboard
        </router-link>
        <router-link to="/login">Login / Signup</router-link>
        <router-link to="/login">Logout</router-link>
        <router-link to="/login">Whishlist</router-link>
    
    </section>
</template>


<script>
    export default {
        props: {
            loggedInUser: Object
        }
    }
</script>