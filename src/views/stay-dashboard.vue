<template>
    <section style="margin-top:200px;">
      <button class="user-menu" :class="onOrders ? 'active': ''" @click="showOrders">ORDERS</button>
      <button class="user-menu" :class="onStays ? 'active': ''" @click="showStays" >MY STAYS</button>
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
              <select @change="changeStatus($event,item.id)" :model="editingItem.status" class="host-actions" id="">
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
      <section class="host-stays" :class="onStays ? 'show' : 'none'">
        <section class="stay-stat">
          <h3>Avrege Price Of Product Category</h3>
          <!-- <DoughnutChart :chartData="getRevenue" /> -->
          <h3>Percentage Of Yoys That Are In Stock By Label</h3>
          <!-- <BarChart :chartData="getDataLabelStock" :options="options" /> -->
        </section>
        <table v-if="hostStay" class="host-stays">
          <thead>
            <tr class="thead">
              <th class="start">Stay Id</th>
              <th>Stay name</th>
              <th>View stay</th>
              <th>Edit stay</th>
              <th>Remove stay</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stay) in hostStay" :key="stay._id">
              <td class="start">{{ stay._id }}</td> 
              <td>{{ stay.name }}</td>  
              <td><button @click="goToStay(stay._id)" class="view-stay">Go to stay</button></td>
              <td><button @click="editStay(stay._id)" class="edit-stay">Edit</button></td>
              <td><button @click="removeStay(stay._id)" class="remove-stay">Remove</button></td>
            </tr>
          </tbody>
        </table>
    </section>
      </section>
</template>

<script>
  import { DoughnutChart } from "vue-chart-3";

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
    }
  },
  created() {
    const {id} = this.$route.params
    this.hostId = id
    this.getHostOrders(id)
    this.getHostStays(id)
    setTimeout(()=> {
      this.getRevenue()
    }, 500)
  
   
  },
  methods: {
    async getHostOrders(id) {
      const hostOrders =  await this.$store.dispatch({type: 'getHostOrders', userId: id})
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
      const hostStays =  await this.$store.dispatch({type: 'getHostStays', userId: id})
      if(hostStays) {
      }
      this.hostStay = hostStays
    },
    getRevenue() {
      const date = new Date()
      const currMonth = date.getMonth()
      // var res = [{stayName:'', stayId: '', total:0}];
      var res =[];
        this.orders.forEach(order =>  { 
        var stayMonth = order.startDate.slice(3,5)
        if(((+stayMonth)-1)=== currMonth) {
         var idx = res.findIndex(stay=> stay.id ===  order.stay._id)
         var payment = parseFloat(order.totalPrice.replace(/,/g, ''))
           if(idx === -1) {
            res.push({name: order.stay.name, id: order.stay._id, total: payment})
           } else {
            res[idx].total += payment           
          }
        }
      })
      console.log('res', res)
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
    
    // getDataPriceAvg() {
    //   const data = this.labels.map(label => {
    //     const filteredToys = this.toys.filter(toy =>
    //       toy.labels.includes(label)
    //     )
    //     return filteredToys.reduce(
    //       (avgPrice, toy) => avgPrice + (toy.price / filteredToys.length),
    //       0
    //     )
    //   })
      // console.log('data',data)
      // return {
      //   labels: this.labels,
      //   datasets: [
      //     {
      //       label: 'Price Avg',
      //       borderRadius: 6,
            //should be an array:
    //         data,
    //         backgroundColor: ["#77CEFF", "#0079AF", "#123E6B"],
    //       },
    //     ],
    //   }
    // },


},
components: { 
  DoughnutChart, 
},
  };

</script>

<style>
.is-host {
  display: none;
}

/* // easy data table */
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
  --easy-table-body-item-text-align: right;

  text-align: right;
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



.last-col {
  text-align: right !important;
}
.last-col .header-text{
  text-align: right !important;
  margin-inline-end: auto;
}

/* stays-table */
.host-stays {
  margin-block-start: 40px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.12);
  border-radius: 6px;
  width: 100%;
  border-collapse: collapse;
}
.host-stays th {
  font-size: 14px;
  text-align: left;
  color: #373737;
  border-bottom: 1px solid #e0e0e0;
  height: 40px;
}
/* .host-stays tr:not(:first-child):hover{ */
.host-stays tbody tr:hover{
  background-color:#F2F3F5;
} 
.host-stays td {
  font-size: 12px;
  height: 36px;
  color: #373737;
  border-bottom: 1px solid #e0e0e0;
}
.host-stays td:last-child, .host-stays th:last-child {
  text-align: right;
  padding-inline-end: 10px;
}
.host-stays .start {
  padding-inline-start: 10px;
}
button.edit-stay:hover, button.remove-stay:hover, .view-stay:hover {
/* background-color: #e0e0e0; */
/* background-color: aqua; */
background-color: #F0DBDB;
cursor: pointer;
}
.edit-stay, .remove-stay, .view-stay {
background-color: transparent;
border-radius: 4px;
color: #373737;
box-shadow: 0px 0px 5px rgba(0,0,0,0.12);
font-size: 12px;
}

.host-orders-list.show {
  display: block;
}
.host-orders-list.none {
  display: none;
}

.host-stays.show {
  display: block;
}
.host-stays.none {
  display: none;
}

.user-menu {
  background-color: transparent;
  border-bottom: 2px solid #373737;
  color:#373737;
  margin-block-end: 15px;
  margin-inline-end: 15px;
}

.user-menu:hover, .user-menu.active {
  color: #222222;
  border-bottom: 3px solid #222222;
  font-family: Airbnb-Cereal-Medium;
}
</style>





