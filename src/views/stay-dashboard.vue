<template>
    <section style="margin-top:200px;" class="">
      <EasyDataTable
      :headers="headers"
      :items="items"
    
      />
    </section>
</template>

<script>
// import { Header, Item } from "vue3-easy-data-table";
export default {
  data() {
    return {
      headers: [
        { text: "Status", value: "status" },
        { text: "Guests", value: "guests"},
        { text: "Check-In", value: "checkIn"},
        { text: "Check-Out", value: "checkOut"},
        { text: "Booked", value: "booked"},
        { text: "Listing", value: "listing", sortable: true},
        { text: "Total Payout", value: "totalPrice", width: 200},
        { text: "", value: ""},
    ],
      items: [
        { status: "Approved", guests: 5, checkIn: "07/12/22", checkOut: "11/12/22", booked: "01/12/22", listing: "City View Apartment", totalPrice: "350", hostActions: "Approved"},
        { status: "Approved", guests: 5, checkIn: "07/12/22", checkOut: "11/12/22", booked: "01/12/22", listing: "City View Apartment", totalPrice: "350", hostActions: "Approved"},
        { status: "Approved", guests: 5, checkIn: "07/12/22", checkOut: "11/12/22", booked: "01/12/22", listing: "City View Apartment", totalPrice: "350", hostActions: "Approved"},
        { status: "Approved", guests: 5, checkIn: "07/12/22", checkOut: "11/12/22", booked: "01/12/22", listing: "City View Apartment", totalPrice: "350", hostActions: "Approved"},
        { status: "Approved", guests: 5, checkIn: "07/12/22", checkOut: "11/12/22", booked: "01/12/22", listing: "City View Apartment", totalPrice: "350", hostActions: "Approved"},
        { status: "Approved", guests: 5, checkIn: "07/12/22", checkOut: "11/12/22", booked: "01/12/22", listing: "City View Apartment", totalPrice: "350", hostActions: "Approved"},
        { status: "Approved", guests: 5, checkIn: "07/12/22", checkOut: "11/12/22", booked: "01/12/22", listing: "City View Apartment", totalPrice: "350", hostActions: "Approved"},
        { status: "Approved", guests: 5, checkIn: "07/12/22", checkOut: "11/12/22", booked: "01/12/22", listing: "City View Apartment", totalPrice: "350", hostActions: "Approved"},
        { status: "Approved", guests: 5, checkIn: "07/12/22", checkOut: "11/12/22", booked: "01/12/22", listing: "City View Apartment", totalPrice: "350", hostActions: "Approved"},
      ],
    }
  },
  created() {
    var isHost = false;
    var host = '';
    var hostActions = '';
    if(isHost) {
      host = 'host'
      hostActions = 'hostActions' 
    }
    this.headers = [
        { text: "Status", value: "status" },
        { text: "Guests", value: "guests"},
        { text: "Check-In", value: "checkIn"},
        { text: "Check-Out", value: "checkOut"},
        { text: "Booked", value: "booked"},
        { text: "Listing", value: "listing", sortable: true},
        { text: "Total Payout", value: "totalPrice", width: 200},
        { text: host, value: hostActions },
    ]
  },
  methods: {
    // headerItemClassNameFunction(ev) {
      // (header: header, index: number): string => {
      // if (header.value === 'hostActions') return 'is-host';
      // return '';
      // };
    //   this.headers.forEach(header=> {
    //     if(header.value === 'hostActions') {
    //       console.log(ev)
    //       return 'is-host';
    //     }
    //     else return ''; 
    //   })
    // },
    // bodyItemClassName() {
    //   (column: string, index: number): string => {
    //   if (column === 'hostActions') return 'is-host';
    //   return '';
    //   };
    // }
  }
}

// :body-item-class-name="bodyItemClassName"

</script>

<style>
.is-host {
  display: none;
}
</style>



