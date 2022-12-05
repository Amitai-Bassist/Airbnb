<template>
    <section class="user-nav-bar">
        <section v-if="loggedInUser._id">
            <router-link to="/stay/wishlist">Whishlist</router-link>
            <router-link :to="`/stay/dashboard/${loggedInUser._id}`">Account dashboard</router-link>
            <router-link @click="logout()" to="/stay">Logout</router-link>
        </section>
        <section v-else>
            <div @click="goToLogin()">Signup</div>
            <div @click="goToLogin()">Login</div>
            <div class="border-line-between"></div>
            <div>Dreambnb your home</div>
        </section>
        

        
        
        
    
    </section>
</template>


<script>
    export default {
        props: {
            loggedInUser: Object
        },
        methods: {
            goToLogin(){
                console.log('logon');
                this.$emit('goToLogin')
            },
            logout(){
                this.$store.dispatch({ type: "logout" });
                // this.router.push('/stay')
                this.$emit('logout')
            }
        },
    }
</script>