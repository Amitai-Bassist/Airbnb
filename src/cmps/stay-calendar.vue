<template>
    <div class="demo-date-picker">
      <div class="block is-active">
        <el-date-picker
          v-model="value"
          type="daterange"
          start-placeholder="Start date"
          end-placeholder="End date"
          ref="calendar"
          :disabled-date="disabledDate"
        />
      </div>
    </div>
</template>
  
<script>
  import { ref } from 'vue'
  export default {
    data(){
      return{
        value: ref('')
        
    }
  },
  mounted() {
    this.isFocus()  
  },
  methods: {
    isFocus(){
      const noteRef = this.$refs.calendar;
      noteRef.focus()

    }  
  },
  computed: {
  //   defaultTime(){
  //     return ref<[Date, Date]>([
  //   new Date(2000, 1, 1, 0, 0, 0),
  //   new Date(2000, 2, 1, 23, 59, 59),
  // ])
    // },
    disabledDate(){
      const time = new Date()
      //  return time < Date.now()
    }
  },
 }
//  :default-time="defaultTime"

</script>



  <style scoped>
  .demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
  }
  .demo-date-picker .block {
    /* display: flex; */
    padding: 0 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
  }
  .demo-date-picker .block:last-child {
    border-right: none;
  }
  .el-picker-panel__content{
    display: block !important;
  }
  </style>
  