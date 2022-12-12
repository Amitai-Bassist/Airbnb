<template>
    <section style="margin-top:100px;">
      <button class="user-menu" :class="onOrders ? 'active': ''" @click="showOrders">Orders</button>
      <button class="user-menu" :class="onStays ? 'active': ''" @click="showStays" >Stays</button>
      <section class="host-orders-list" :class="onOrders ? 'show' : 'none'">
          <EasyDataTable class="orders-table"
          :headers="headers"
          :items="items"
          :body-row-class-name="bodyRowClassNameFunction"
          :body-item-class-name="bodyItemClassNameFunction"
          :header-item-class-name="headerItemClassNameFunction"
          :rows-per-page="10"
          no-hover
          >
          
          <template #item-hostActions="item">
            <div class="host-actions-select">
              <select @change="changeStatus($event,item)" :model="editingItem.status" class="host-actions" id="">
                <option :value="item.status">{{item.status}}</option>
                <option :value="statusValue[0]" v-if="item.status !== statusValue[0]">{{statusValue[0]}}</option>
                <option :value="statusValue[1]" v-if="item.status !== statusValue[1]">{{statusValue[1]}}</option>
                <option :value="statusValue[2]" v-if="item.status !== statusValue[2]">{{statusValue[2]}}</option>
              </select>
            </div>
          </template>
          <template #item-status="item">
            {{item.status}} 
          </template>
        </EasyDataTable>
      </section>
      <!-- <section class="host-stays-container flex column wrap" :class="onStays ? 'show' : 'none'"> -->
        <!-- <h1>Monthly stats</h1> -->
      <section class="host-stays-container" :class="onStays ? 'show' : 'none'">
        <div class="stays-grid-3 flex row wrap space-between">
          <!-- <h1>Monthly stats</h1> -->
            <div class="mini-stat">
              <div v-if="orders" class="stat-info"><h2>{{this.orders.length}}</h2></div>
              <div><h2 class="desc">Total orders</h2></div>
            </div>
            <div class="mini-stat">
              <div class="stat-info"><h2>${{this.payment}}</h2></div>
              <div v-if="orders"><h2 class="desc">Total payment</h2></div>
              <div class="stat-info"><h3>The most profitable month this year !</h3></div>
            </div>
            <div class="mini-stat">
              <div v-if="orders" class="stat-info"><h2>2</h2></div>
              <div><h2 class="desc">Occupied stays</h2></div>
            </div>
        </div>
        <div class="stays-grid-1">
          <table v-if="hostStay" class="host-stays">
            <thead>
              <tr class="thead">
                <th colspan="2">Stay name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(stay) in hostStay" :key="stay._id">
                <td>{{ stay.name }}</td>  
                <td><button @click="goToStay(stay._id)" class="view-stay">Go to stay</button>
                <button @click="editStay(stay._id)" class="edit-stay">Edit</button>
               <button @click="removeStay(stay._id)" class="remove-stay">Remove</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <section class="stay-stat flex row "> -->
          <div class="doughnut-chart stays-grid-2 stay-stat">
            <h3>Monthly revenue</h3>
            <DoughnutChart class="chart" v-if="chartData" :chartData="getData" :options="options"/>
          </div>
          <div class="bar-chart stays-grid-4 stay-stat">
            <h3>Pending orders</h3> 
            <BarChart class="chart" v-if="barData" :chartData="getBarData" :options="{plugins: {legend: {display: false}}}"/>
          </div>
        <!-- </section> -->
    </section>
      </section>
</template>

<script>
  import { DoughnutChart } from "vue-chart-3";
  import { BarChart } from "vue-chart-3";
  import { Chart, registerables } from "chart.js";
  import { eventBus } from '../services/event-bus.service'
Chart.register(...registerables);

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
      onOrders: true,
      onStays: false,
      hostId: null,
      chartData: null,
      barData: null,
      payment: 0,
      options: {
        plugins: { 
          legend: {
            position: "bottom",
          },
        },
      },
    }
  },
  async created() {
    eventBus.emit('go-to-user-pages')
    const {id} = this.$route.params
    this.hostId = id
    await this.getHostOrders(id)
    await this.getHostStays(id)
    this.getRevenue()
    this.getPendingOrders()
  },
  methods: {
    async getHostOrders(id) {
      const hostOrders =  await this.$store.dispatch({type: 'getHostOrders', userId: id})
      this.items = []
        hostOrders.forEach(order => {
          this.items.push({
            _id: order._id,
            status: order.status,
            guests: order.guests.adults,
            checkIn: order.startDate,
            checkOut: order.endDate,
            booked: new Date(order.createdAt).toLocaleDateString("en-GB"),
            listing: order.stay.name,
            totalPrice: '$' + order.totalPrice
          })
        });
      if(hostOrders) {
        this.orders = hostOrders;
        this.headers.push({ text: "Actions", value: "hostActions" })
      }
    },
    changeStatus(val, item){
      var idx = this.items.findIndex(currItem=>currItem._id === item._id)
      this.items[idx].status = val.target.value
      idx = this.orders.findIndex(order=>order._id === item._id)
      this.orders[idx].status =  val.target.value
      this.$store.dispatch({type: 'addOrder', order: this.orders[idx]})
    },
    async getHostStays(id) {
      const hostStays =  await this.$store.dispatch({type: 'getHostStays', userId: id})
      console.log(hostStays);
      if(hostStays) {
      }
      this.hostStay = hostStays
    },
    getRevenue() {
      const date = new Date()
      const currMonth = date.getMonth()
      // var data = [{stayName:'', stayId: '', total:0}];
      var res =[];
        this.orders.forEach(order =>  { 
        var stayMonth = order.startDate.slice(3,5)
        if(((+stayMonth)-1)=== currMonth) {
         var idx = res.findIndex(stay=> stay.id ===  order.stay._id)
         var payment = parseFloat(order.totalPrice.replace(/,/g, ''))
           if(idx === -1) {
            res.push({name: order.stay.name, id: order.stay._id, total: payment,})
           } else {
            res[idx].total += payment           
          }
        }
      })
      console.log('res', res)
      var labels = []
      res.map(stay => labels.push(stay.name))
      var data = []
      res.map(stay => data.push(stay.total))
      var totalPayment = 0
      res.map(stay => totalPayment += stay.total)

      totalPayment =parseInt(totalPayment) 
      totalPayment =totalPayment.toLocaleString("en-US")
      this.payment = totalPayment
        this.chartData = {
        labels,
        datasets: [
          {
            label: '$',
            borderRadius: 6,
            //should be an array:
            data,
            backgroundColor: ["#DEF5E5", "#BCEAD5", "#9ED5C5", "#8EC3B0"],
          },
        ], 
    }
    console.log('chartData', this.chartData)
    },
    getPendingOrders() {
      const data = this.hostStay.map(stay => {
        return this.orders.reduce(
          (acc, order) =>
            order.stay._id===stay._id && order.status==="pending"
              ? acc + 1
              : acc,
          0
        )
      })
      var labels = []
      this.hostStay.map(stay=> labels.push(stay.name))
      // console.log('data', data)
      this.barData = {
        labels,
        datasets: [
          {
            borderRadius: 6,
            data,
            label: 'Pending orders',
            backgroundColor: ["#98A8F8", "#BCCEF8", "#CDFCF6","#FAF7F0", ]
            // backgroundColor: ["#DAE2B6", "#CCD6A6", "#F4EAD5","#FFFBE9", ]
          },
        ],
      }
    },
    checkStatusValue(status){
      this.statusValue = ['pending','approved','declined']
      const idx = this.statusValue.findIndex(statu=>statu === status)
      this.statusValue.splice(idx,1)
      this.statusValue.unshift(status)
    },
    editStay(stayId) {
      this.$router.push('/host/' + stayId)
    },
    goToStay(stayId) {
      this.$router.push('/stay/' + stayId)
    },
    async removeStay(stayId) {
      try {
       await this.$store.dispatch({type: 'removeStay', stayId})
        this.getHostStays(this.hostId)
      }
      catch (err) {
        console.log('sorry! cannot remove stay', err)
        throw err
      }
    },
    bodyRowClassNameFunction(item,index) {
      if(item.status === "pending")return "orange"
      if(item.status === "approved")return "green"
      if(item.status === "declined")return "red"
    },
    bodyItemClassNameFunction(item, index) {
      if(item === 'hostActions') {
        return "last-col"
      }
    },
    headerItemClassNameFunction(header, index) {
      if(header.value === 'hostActions') {
        return "last-col"
      }
    },
    showOrders() {
      this.onOrders = true
      this.onStays = false
    },
    showStays() {
      this.onOrders = false
      this.onStays = true
    }
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser
    },
    getData() {
      return this.chartData
    },
    getBarData() {
      return this.barData
    }
  },
components: { 
  DoughnutChart, 
  BarChart
},
  };

</script>

<style>
.is-host {
  display: none;
}

/* // easy data table - orders table*/
.host-orders-list {
  margin-block-start: 40px;
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
.orders-table {
  border-radius: 16px;
  --easy-table-border: transparent;
  box-shadow: 0px 0px 12px rgba(0,0,0,0.12);
}

.orders-table th {
  font-size: 14px;
  font-family: Airbnb-Cereal-Medium;
}

.orders-table td:last-child, .orders-table th:last-child {
  padding-inline-end: 10px;
}

thead.vue3-easy-data-table__header {
  height: 40px;
}

.orders-table table {
 border-radius: 12px;
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


/* stays-table */
.host-stays {
  /* box-shadow: 0px 0px 5px rgba(0,0,0,0.12); */
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  width: 100%;
  border-collapse: collapse;
}
.host-stays th {
  font-size: 14px;
  text-align: left;
  color: #222222;
  border-bottom: 1px solid #e0e0e0;
  height: 40px;
  background-color: #e0e0e0;
}

.host-stays tbody tr:hover{
  background-color:#F2F3F5;
} 
.host-stays td {
  font-size: 12px;
  height: 36px;
  color: #373737;
  border-bottom: 1px solid #e0e0e0;
}
.host-stays tr td:first-of-type, .host-stays tr th:first-of-type {
  padding-inline-start: 10px;
}
.host-stays td:last-child {
  text-align: center;
  padding-inline-end: 10px;
}
.host-stays .start {
  padding-inline-start: 10px;
}

button.edit-stay:hover, button.remove-stay:hover, .view-stay:hover {
background-color: #e0e0e0;
cursor: pointer;
}
.edit-stay {
  background-color: #B8E8FC;
}
.view-stay {
  background-color: #B6E2A1;
}
.remove-stay {
  background-color: #F7A4A4;
}

.edit-stay, .remove-stay, .view-stay {
border-radius: 4px;
color: #222222;
box-shadow: 0px 0px 5px rgba(0,0,0,0.12);
font-size: 12px;
}

.host-orders-list.show {
  display: block;
}
.host-orders-list.none {
  display: none;
}
.host-stays-container {
  margin-block-start: 40px;
}

.host-stays-container.show {
  display: grid;
}
.host-stays-container.none {
  display: none;
}

.user-menu {
  background-color: transparent;
  border-bottom: 2px solid #717171;
  color:#717171;
  margin-block-end: 15px;
  margin-inline-end: 15px;
  font-size: 14px;
  padding-bottom: 5px;
  width:min-content;
}

.user-menu:hover, .user-menu.active {
  color: #222222;
  border-bottom: 3px solid #222222;
  font-family: Airbnb-Cereal-Medium;
}
.stay-stat {
  /* flex-wrap: wrap; */
}
.mini-stat-container {
  min-height: 100%;
}
.stay-stat h3 {
  font-size: 16px;
  text-align: left;
  color: #222222;
  margin-block-end: 20px;
}
.mini-stat {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  width: 32%;
  min-height:100%;
}
.stat-info h3 {
  font-size: 16px;
  margin-block-start: 20px;
  color:#373737;
  font-family: Airbnb-Cereal-Medium;
  line-height: 24px;
}
/* .mini-stat:not(:first-of-type) {
  margin-inline-start: 20px;
} */
.mini-stat h2.desc {
  font-size: 16px;
  padding-block-start: 15px;
  border-top: 1px solid #222222;
  width:fit-content;
}
.bar-chart, .doughnut-chart {
  /* height: 200px; */
  /* width:15vw; */
}
.bar-chart, .doughnut-chart {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  height: fit-content;
}
.chart {
  height: 200px;
}
.host-stays-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 20px;
}

.stays-grid-3 {
  grid-column: 1/3;
  grid-row: 1/3; 
  align-self: start;
  justify-self: stretch;
  min-height: 100%;
  /* background-color: antiquewhite; */
}

.stays-grid-3 h1 {
  color: #222222;
  font-size: 16px;
}
.stays-grid-1 {
  grid-column: 1/3;
  grid-row: 3/5; 
  align-self: start;
  justify-self: stretch;
}
.stays-grid-2 {
  grid-column: 3/4;
  grid-row: 1/3; 
}
.stays-grid-4 {
  grid-column: 3/4;
  grid-row: 3/5; 
  /* border: 1px solid #e0e0e0 */
}
</style>





