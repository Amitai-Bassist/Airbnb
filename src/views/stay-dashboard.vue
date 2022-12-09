<template>
    <section style="margin-top:200px;" class="">
      <div class="mini-boards flex row nowrap">
        <div class="mini-card flex row wrap">
          <div class="mini-card-header flex row wrap">
            <h1>Wishlist</h1>
          </div>
          <h4 v-if="loggedinUser"><span>{{(loggedinUser.wishlist ? loggedinUser.wishlist.length: 0)}}</span>&nbsp;saved stays</h4>
          <button @click="goToWishlist" class="mini-card-btn">Go to wishlist</button>
        </div>
        <div class="mini-card flex row wrap">
          <div class="mini-card-header flex row wrap">
            <h1>Messages</h1>
          </div>
          <h4 v-if="loggedinUser"> order #o1226 has been approved</h4>
          <button @click="goToWishlist" class="mini-card-btn">Go to messages</button>
        </div>
        <div class="mini-card next-stay flex column wrap">
          <div class="next-stay-first flex row wrap">
            <div class="mini-card-header flex wrap">
              <h1>Your Next Stay</h1>
            </div>
            <h4 v-if="loggedinUser">Entire amazing views hosted by Patty And Beckett</h4>
            <button @click="goToStay" class="mini-card-btn">Go to stay</button>
          </div>
          <div class="next-stay-img">
            <img src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663437349/thl7eoxar7dc7kpbahhj.jpg" alt="">
          </div>
        </div>
      </div>
      <section class="host-orders-list">
          <EasyDataTable class="orders-table"
          :headers="headers"
          :items="items"
          :body-row-class-name="bodyRowClassNameFunction"
          :rows-per-page="10"
          no-hover
          >
          
          <template #item-hostActions="item">
            <select @change="changeStatus($event,item.id)" :model="editingItem.status" class="host-actions" id="">
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
      <section class="host-stays">

      </section>
        <table v-if="hostStay" class="host-stays">
          <thead>
            <tr class="thead">
              <th class="start">Stay Id</th>
              <th>Stay name</th>
              <th>Edit stay</th>
              <th>Remove stay</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stay) in hostStay" :key="stay._id">
              <td class="start">{{ stay._id }}</td> 
              <td>{{ stay.name }}</td>  
              <td><button @click="editStay(stay._id)" class="edit-stay">Edit</button></td>
              <td><button @click="removeStay(stay._id)" class="remove-stay">Remove</button></td>
            </tr>
          </tbody>
        </table>
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
      statusValue:['pending','approved','declined'],
    }
  },
  created() {
    const {id} = this.$route.params;
    this.getHostOrders(id);
    this.getHostStays(id)
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
        this.headers.push({ text: "Actions", value: "hostActions" })
      }
    },
    changeStatus(val, id){
      const idx = this.items.findIndex(item=>item.id === id)
      this.items[idx].status = val.target.value
    },
    async getHostStays(id) {
      const hostStays =  await this.$store.dispatch({type: 'getHostStays', userId: id});
      if(hostStays) {
      }
      this.hostStay = hostStays
     
    },
    checkStatusValue(status){
      this.statusValue = ['pending','approved','declined']
      const idx = this.statusValue.findIndex(statu=>statu === status)
      this.statusValue.splice(idx,1)
      this.statusValue.unshift(status)
    },
    goToWishlist() {
      this.$router.push('/stay/wishlist')
    },
    editStay(stayId) {
      this.$router.push('/host/' + stayId)
    },
    async removeStay(stayId) {
      try {
       await this.$store.dispatch({type: 'removeStay', stayId})
        this.getHostStays(this.id)
      }
      catch (err) {
        console.log('sorry! cannot remove stay', err);
        throw err;
      }
    },
    goToStay() {
      this.$router.push('/stay/622f337a75c7d36e498aaaf8')
    },
    bodyRowClassNameFunction(item,index) {
      if(item.status === "pending")return "orange"
      if(item.status === "approved")return "green"
      if(item.status === "declined")return "red"
    }
  },

  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
},
  };

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
  /* justify-content: space-between; */
  max-width: 90%;
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
  height: 215px;
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
  width: 430px;
  margin-inline-start: 25px;
}
.mini-card:nth-child(3) h4 {
 padding-block-start: 8px;
}
.mini-card:nth-child(2) {
  margin-inline-start: 25px;
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

.red {
  --easy-table-body-row-background-color: #FAEBE0;
  --easy-table-body-row-font-color: #222222;
}
.orange {
  --easy-table-body-row-background-color: #FAF7F0;
  --easy-table-body-row-font-color: #222222;
}
.green {
  --easy-table-body-row-background-color: #DEF5E5;
  --easy-table-body-row-font-color: #222222;
}

.status-column {
  color:aquamarine;
}

.host-actions {
  border: 0.6px solid #e0e0e0;
  color: #373737;
  height: 22px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.12);
  padding-inline-start: 4px;

}
/* stays-table */
.host-stays {
  margin-block-start: 40px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.12);
  border-radius: 6px;
  width: 100%;

}
.host-stays th {
  font-size: 14px;
  text-align: left;
  color: #373737;
  border-bottom: 1px solid #e0e0e0;
  height: 40px;
}
.host-stays .thead th{
 
} 
.host-stays td {
  font-size: 12px;
  height: 36px;
  border-bottom: 1px solid #e0e0e0;
  color: #373737
}

.host-stays .start {
  padding-inline-start: 10px;
}
button.edit-stay:hover, button.remove-stay:hover {
background-color: #e0e0e0;
cursor: pointer;
}
.edit-stay, .remove-stay {
background-color: transparent;
border-radius: 4px;
color: #373737;
box-shadow: 0px 0px 5px rgba(0,0,0,0.12);
font-size: 12px;
}
</style>





