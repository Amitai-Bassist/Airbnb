<template>
    <section class="user-nav-layout user-nav-bar">
        <section v-if="loggedInUser._id">
            <router-link to="/stay/wishlist">Whishlist</router-link>
            <router-link :to="`/stay/dashboard/${loggedInUser._id}`">Account dashboard</router-link>
            <div @click="goUserEdit()">Edit my account</div>
            <router-link @click="logout()" to="/stay">Logout</router-link>
        </section>
        <section v-else>
            <div @click="goToLogin()">Login</div>
            <div @click="goSignup()">Signup</div>
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
                this.$emit('goToLogin')
            },
            goSignup(){
                this.$emit('goToSignup')
            },
            goUserEdit(){
                this.$emit('goUserEdit')
            },
            logout(){
                this.$store.dispatch({ type: "logout" });
                // this.router.push('/stay')
                this.$emit('logout')
            }
        },
        
    }
</script>