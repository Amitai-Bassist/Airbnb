<template>
    <section style="margin-top:200px;" class="">
      <div class="mini-boards flex row nowrap">
        <div class="mini-card flex row wrap">
          <div class="mini-card-header flex row wrap">
            <h1>Wishlist</h1>
          </div>
          <h4 v-if="loggedinUser"><span>{{loggedinUser.wishlist.length}}</span>&nbsp;saved stays</h4>
          <button @click="goToWishlist" class="mini-card-btn">Go to wishlist</button>
        </div>
        <div class="mini-card flex row wrap">
          <div class="mini-card-header flex row wrap">
            <h1>Messages</h1>
          </div>
          <h4 v-if="loggedinUser"><span></span>&nbsp;new messages</h4>
          <button @click="goToWishlist" class="mini-card-btn">Go to messages</button>
        </div>
        <div class="mini-card next-stay flex column wrap">
          <div class="next-stay-first flex row wrap">
            <div class="mini-card-header flex wrap">
              <h1>Your Next Stay</h1>
            </div>
            <h4 v-if="loggedinUser"><span></span>&nbsp;stay name</h4>
            <button @click="goToWishlist" class="mini-card-btn">Go to stay</button>
          </div>
          <div class="next-stay-img">
            <img src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663437349/thl7eoxar7dc7kpbahhj.jpg" alt="">
          </div>
        </div>
      </div>
      <EasyDataTable class="orders-table"
      :headers="headers"
      :items="items"
      >
      <template #item-hostActions="item">
    
        <select @change="changeStatus($event,item.id)" :model="editingItem.status" id="">
          <option :value="item.status">{{item.status}}</option>
          <option :value="statusValue[0]" v-if="item.status !== statusValue[0]">{{statusValue[0]}}</option>
          <option :value="statusValue[1]" v-if="item.status !== statusValue[1]">{{statusValue[1]}}</option>
          <option :value="statusValue[2]" v-if="item.status !== statusValue[2]">{{statusValue[2]}}</option>
        </select>

      </template>
      <template #item-status="item">
        {{item.status}} 
      </template>
    </EasyDataTable>
    </section>
</template>

<script>

export default {
  data() {
    return {
      headers: [
        { text: "Status", value: "status", sortable: true },
        { text: "Guests", value: "guests", sortable: true},
        { text: "Check-In", value: "checkIn", sortable: true},
        { text: "Check-Out", value: "checkOut", sortable: true},
        { text: "Booked", value: "booked", sortable: true},
        { text: "Listing", value: "listing", sortable: true},
        { text: "Total Payout", value: "totalPrice", width: 200},
    ],
      items:[],
      hostStay: null,
      orders: null,
      editingItem: {status:''},
      statusValue:['pending','approved','decline'],
    }
  },
  created() {
    const {id} = this.$route.params;
    this.getHostOrders(id);
  },
  methods: {
    async getHostOrders(id) {
      const hostOrders =  await this.$store.dispatch({type: 'getHostOrders', userId: id});
      this.items = []
        hostOrders.forEach(order => {
          this.items.push({
            id: order._id,
            status: order.status,
            guests: order.guests.adults,
            checkIn: order.startDate,
            checkOut: order.endDate,
            booked: new Date(order.createdAt).toLocaleDateString(),
            listing: order.stay.name,
            totalPrice: '$' + order.totalPrice
          })
        });
      if(hostOrders) {
        this.orders = hostOrders;
        this.headers.push({ text: "host", value: "hostActions" })
      }
    },
    changeStatus(val, id){
      const idx = this.items.findIndex(item=>item.id === id)
      this.items[idx].status = val.target.value
      console.log('idx',this.items[idx] )
    },
    async getHostStays(id) {
      const hostStays =  await this.$store.dispatch({type: 'getHostStays', userId: id});
      if(hostStays) {
      this.headers.push({ text: "host", value: "hostActions" })
      }
    },
    checkStatusValue(status){
      this.statusValue = ['pending','approved','decline']
      const idx = this.statusValue.findIndex(statu=>statu === status)
      this.statusValue.splice(idx,1)
      this.statusValue.unshift(status)
      console.log(this.statusValue)
    },
    goToWishlist() {
      this.$router.push('/stay/wishlist')
    },
    // bodyItemClassNameFunction(column, item) {
    //   if (column === 'status') {
    //     if((this.items[item].status) === "pending")return "orange";
    //     if((this.items[item].status) === "approved")return "green";
    //     if((this.items[item].status) === "decline")return "red";
    //   }
    // }
  },

  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
},
  };
  // :body-item-class-name="bodyItemClassNameFunction"

</script>

<style>
.is-host {
  display: none;
}

/* // easy data table */
.orders-table {
  border-radius: 16px;
  box-shadow: 0px 0px 12px rgba(0,0,0,0.12);

}
.orders-table th {
  font-size: 14px;
  font-family: Airbnb-Cereal-Medium;
}

thead.vue3-easy-data-table__header {
  height: 40px;
}

.orders-table table {
 border-radius: 12px;
}

/* //card - mini-boards */
.mini-boards {
  justify-content: space-between;
  max-width: 80%;
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
  box-shadow: 0px 0px 12px rgba(0,0,0,0.12);
  color: #222222;
  width: 244px;
  height: 190px;
  border-radius: 12px;
  padding: 18px 18px;
  margin-block-end: 50px;
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
  /* align-self:center; */
}
.mini-card-btn:hover {
  background-color: #e0e0e0;
}

.mini-card h4 {
  color:#717171;
  font-size: 1rem;
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

.mini-card:nth-child(3) {
  width: 400px;
}

.next-stay-img img {
  object-fit: cover;
  width: 200px;
  height: 130px;
  /* aspect-ratio:; */
  border-radius: 12px;
}
.next-stay, .next-stay-img {
  padding-block-start: 20px;
}
.next-stay-first {
  width: 150px;
  height: 170px;
}

item {
  color: green;
}
.red {
  color: red;
}
.orange {
  color: orange;
}
.green {
  color: green;
}

.status-column {
  color:aquamarine;
}
</style>





