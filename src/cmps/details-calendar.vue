<template>
  <section class="calender-container">
    <div class="date-picker">
      <div class="date-text">
        <h3>
          Select dates
        </h3>
        <p>
          Add your travel dates for exact pricing
        </p>
      </div>
      <div class="input-container">
        <div class="date-input start" :class="!start? 'focus': '' ">
          <div class="input-text">
            <h4>CHECK IN</h4>
            <input :value="getDateStart || 'Add date'">
          </div>
          <div class="cancel">
            <button class="btn-cancel" v-if="getDateStart">X</button>
          </div>
        </div>
        <div class="date-input end" :class="start? 'focus': '' ">
          <div class="input-text">
            <h4>CHECK OUT</h4>
            <input :value="getDateEnd || 'Add date'">
          </div>
          <div class="cancel">
            <button class="btn-cancel" v-if="getDateEnd">X</button>
          </div>
      </div>
        </div>
      </div>     
    <v-calendar :attributes="attributes" @dayclick="onDayClick" :columns="2" :min-date="minDate" color="gray" />

    <div class="calender-actions">
      <button class="clear-dates">Clear dates</button>
      <button class="close">Close</button>
    </div>
  </section>
</template>

<script>
  export default {
  data() {
    return {
      dates:[],
      start:null,
      end:null,
      minDate:new Date(),
      dateStart:null,
      dateEnd:null,
      calendarRef:null
    };
  },
  computed: {
    attributes() {
      return this.dates.map(date => ({
        highlight: true,
        dates: date,
      }));
    },
    getDateStart(){
      return this.dateStart
    },
    getDateEnd(){
      return this.dateEnd
    }
  },
  methods: {
    onDayClick(day) {
      if(!this.start){
        this.start = day.date
        this.dateStart = day.id.split("-").reverse().join("/")
        this.$emit('updateStart',this.dateStart)
        this.dates[0] = {
          start:this.start,
          end:this.start
        }
        this.minDate = new Date(day.date)
      }else if(!this.end && ((new Date(day.date) - new Date(this.start)) >= 0)){
        this.end = day.date
        this.dateEnd = day.id.split("-").reverse().join("/")
        this.$emit('updateEnd',this.dateEnd)
        this.dates[0] = {
          start: new Date(this.start),
          end: new Date(this.end)
        }
        this.start = null
        this.end = null
      }
    },
  },
};
</script>


