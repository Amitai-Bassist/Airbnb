<template>
    <section style="margin-top:100px;" class="user-page full">
        <!-- <button class="user-menu">TRIPS</button> -->
        <h1 class="trips">Trips</h1>
        <section class="user-trips">
          
            <div class="mini-card flex row wrap">
              <div class="mini-card-header flex row wrap grid-item-2">
                <h1>Wishlist</h1>
              </div>
              <h4 v-if="loggedinUser"><span>{{(loggedinUser.wishlist ? loggedinUser.wishlist.length: 0)}}</span>&nbsp;saved stays</h4>
              <button @click="goToWishlist" class="mini-card-btn">Go to wishlist</button>
            </div>
            <div class="mini-card flex row wrap grid-item-3">
              <div class="mini-card-header flex row wrap">
                <h1>Messages</h1>
              </div>
              <h4 v-if="loggedinUser"> order #o1226 has been approved</h4>
              <button @click="goToWishlist" class="mini-card-btn">Go to messages</button>
            </div>
            <div class="mini-card next-stay flex column wrap grid-item-1">
              <div class="next-stay-first flex row wrap">
                <div class="mini-card-header flex wrap">
                  <h1 class="">Your Next Stay</h1>
                </div>
                <h4 v-if="loggedinUser">Entire amazing views hosted by Patty And Beckett</h4>
                <button @click="goToStay" class="mini-card-btn">Go to stay</button>
              </div>
              <div class="next-stay-img">
                <img src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663437349/thl7eoxar7dc7kpbahhj.jpg" alt="">
              </div>
            </div>
            <section class="old-trips grid-item-4">
                <h2>Where you've been</h2>
            </section>
        </section>
    </section>
</template>

<script>

export default {

    created() {
            const {id} = this.$route.params;
    },
    methods: {
        goToStay() {
            this.$router.push('/stay/622f337a75c7d36e498aaaf8')
        },
        goToWishlist() {
            this.$router.push('/stay/wishlist')
        },
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser;
        },
    }
}
</script>

<style>
.user-trips {
display: grid;
height: 70vh;
/* min-height: auto; */
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(2, 2fr) 1.6fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.grid-item-1 {
    grid-column: 1/5;
    grid-row: 1/3;
   
    /* margin-block-start: 2px; */
}
.grid-item-2 {
    grid-column: 5/7;
    grid-row: 1/2;
    width:100%;
    /* margin-block-start: 2px; */
}
.grid-item-3 {
    grid-column: 5/7;
    grid-row: 2/3;
    width:100%;
    /* margin-block-start: 2px; */
}
.grid-item-4 {
    grid-column: 1/7;
    grid-row: 3/4; 
}
.old-trips h2 {
    font-size: 22px;
    color: #222222;
}


.user-page h1.trips {
    font-size: 32px;
    color: #222222;
    margin-block-start: 36px;
    margin-block-end: 24px;
}
/* //card - mini-boards */
.mini-boards {
  /* justify-content: space-between; */
  /* max-width: 90%;
  margin-block-start: 40px; */
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.box-card {
  width: 480px;
}
.mini-card {
  /* box-shadow: 0px 0px 12px rgba(0,0,0,0.12); */
  border: 1px solid #DDDDDD;
  color: #222222;
  width: 244px;
  height: 215px;
  border-radius: 12px;
  padding: 18px 18px;
  margin-block-end: 50px;
  margin-block-start: 25px;
}
.mini-card h1 {
  font-size: 1.25rem;

}
.mini-card-btn {
  border: opx solid transparent;
  background-color: #f7f7f7;
  transition: 0.1s;
  padding:8px;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  color: #222222;
  width: 130px;
  margin-inline-start: 0;
  font-size: 14px;
  font-family: Airbnb-Cereal-Medium;
  align-self: flex-end;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.12);
}
.mini-card-btn:hover {
  background-color: #e0e0e0;
}

.mini-card h4 {
  color:#717171;
  font-size: 14px;
  line-height: 18px;
}

.mini-card h4 span {
  font-family: Airbnb-Cereal-Medium;
}
.mini-card-header {
justify-content: space-between;
align-items: center;
width: 300px;
height: 42px;
padding: 20px 0px;
align-self: flex-start;
}

.mini-card:nth-child(3)  {
    width: 800px; 
    height: 400px;
}
.mini-card:nth-child(3) h4 {
 padding-block-start: 8px;
}
.mini-card:nth-child(2){
 /* width:100%; */
}
.next-stay-img img {
  object-fit: cover;
  width: 200px;
  height: 147px;
  /* aspect-ratio:; */
  border-radius: 12px;
}
.next-stay, .next-stay-img {
  padding-block-start: 20px;
}
.next-stay-first {
  width: 150px;
  height: 215px;
}
</style>