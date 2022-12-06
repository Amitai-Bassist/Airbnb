<template>
    <section style="margin-top:200px;" class="">
      <div class="mini-boards">
        <!-- <el-card class="box-card mini-board" shadow="always">
          <template #header>
            <div class="card-header">
              <span>WISHLIST</span>
              <el-button class="button" text>Go to whishlist</el-button>
            </div>
          </template>
          <div><p><span>24</span>saved stays</p></div>
        </el-card> -->
        <div class="mini-card flex row wrap">
          <div class="mini-card-header flex">
            <h1>WISHLIST</h1>
            <!-- <button class="mini-card-btn">Go to whishlist</button> -->
          </div>
          <h4><span>50</span>saved stays</h4>
          <button class="mini-card-btn">Go to whishlist</button>
        </div>
        </div>
      <EasyDataTable
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
// import { Header, Item } from "vue3-easy-data-table";
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
    this.getHostOrders(id)
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
    }
  }
}

</script>

<style>
.is-host {
  display: none;
}

/* //card - mini-boards */
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
  height: 180px;
  border-radius: 12px;
  padding: 18px 12px;
}
.mini-card h1 {
  font-size: 1.25rem;
}
.mini-card-btn {
  border: opx solid transparent;
  background-color: transparent;
  transition: 0.1s;
  padding:8px 15px;
  align-items: center;
  height: 32px;
  border-radius: 4px;
  color: #222222;

}
.mini-card-btn:hover {
  background-color: #eee;
}

.mini-card-header {
justify-content: space-between;
align-items: center;
width: 300px;
height: 42px;
padding: 20px 12px;
}
</style>





