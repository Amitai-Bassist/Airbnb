<template>
  <section class="stay-reserve order-container">
    <div class="order-form-header">
      <p>
        <span class="cost">${{ stay.price }}</span> / night
      </p>
      <p class="review-score flex row align-center">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
        &#160;{{ reviewScore }} &#183; &#160;
        <span class="span-reviews"> {{ stay.reviews.length }} reviews</span>
      </p>
    </div>

    <div :class="isWhenStart ? 'order-data open' : 'order-data'">
      <details-calendar
        v-click-away="onClickAway"
        @updateStart="updateStart"
        @updateEnd="updateEnd"
        v-if="isWhenStart || isWhenEnd"
      ></details-calendar>
      <div class="date-picker" v-if="!isWhenStart">
        <div class="date-input" @click="toggleCalender">
          <label>CHECK IN</label>
          <input :value="getDateStart || 'Add date'" />
        </div>
        <div class="date-input">
          <label>CHECK OUT</label>
          <input :value="getDateEnd || 'Add date'" />
        </div>
      </div>
      <div class="guest-input" v-if="!isWhenStart">
        <label>GUESTS</label>
        <input :value="myGuest" />
        <svg
          viewBox="0 0 320 512"
          width="100"
          title="angle-down"
          @click="guestsSelected = !guestsSelected"
          v-if="!guestsSelected"
        >
          <path
            d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
          />
        </svg>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style="
            display: block;
            fill: none;
            height: 16px;
            width: 16px;
            stroke: currentcolor;
            stroke-width: 4;
            overflow: visible;
          "
          v-else
          @click="guestsSelected = !guestsSelected"
        >
          <g fill="none">
            <path
              d="m4 20 11.2928932-11.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l11.2928932 11.29289322"
            ></path>
          </g>
        </svg>
      </div>
    </div>
    <div class="who-search-container">
      <details-who-search
        @totalGuest="totalGuest"
        v-if="guestsSelected"
      ></details-who-search>
    </div>

    <div class="btn-container" @click="onReserve" v-if="!isWhenStart">
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="content">
        <button class="action-btn">
          <span class="btn">Reserve</span>
        </button>
      </div>
    </div>

    <div class="reserve-total-price" v-if="TotalNights">
      <div class="reserve-price flex row space-between">
        <div class="text">${{ stay.price }} X {{ TotalNights }} nights</div>
        <div class="amount">${{ accommodationComma }}</div>
      </div>
      <div class="reserve-price flex row space-between">
        <div class="text">Service fee</div>
        <div class="amount">${{ ServiceFee }}</div>
      </div>
      <div class="total flex row space-between">
        <div class="text">Total</div>
        <div class="amount">${{ totalPrice }}</div>
      </div>
    </div>

    <!-- <stay-when-search class="" v-if="(isWhenStart || isWhenEnd)"></stay-when-search> -->
  </section>
</template>

<script>
import stayWhenSearch from "./stay-when-search.vue";
import detailsCalendar from "./details-calendar.vue";
import { eventBus } from "../services/event-bus.service";
import detailsWhoSearch from "../cmps/details-who-search.vue";

export default {
  props: {
    stay: Object,
  },
  data() {
    return {
      isWhenStart: false,
      isWhenEnd: false,
      dateEnd: "-",
      dateStart: "-",
      TotalNights: null,
      totalPrice: null,
      accommodation: null,
      ServiceFee: null,
      guestsSelected: false,
      gusetNum: 0,
    };
  },
  created() {
    setTimeout(() => {
      this.getReviewScore();
    }, 500);
  },
  mounted() {},
  methods: {
    getReviewScore() {
      this.$store.commit({
        type: "getReviewScore",
        stayReviews: this.stay.reviews,
      });
    },
    onReserve() {
      if (this.stay) this.$emit("isReserve");
      else this.$router.push("/");
    },
    toggleCalender() {
      this.isWhenStart = !this.isWhenStart;
    },
    updateStart(update) {
      this.dateStart = update;
    },
    updateEnd(update) {
      this.dateEnd = update;
      this.daysPriceCalc(this.dateStart.date, this.dateEnd.date);
    },
    onClickAway() {
      this.isWhenStart = false;
    },
    daysPriceCalc(date1, date2, price = this.stay.price) {
      const difference = date2.getTime() - date1.getTime();
      this.TotalNights = Math.ceil(difference / (1000 * 3600 * 24));
      this.accommodation = this.TotalNights * price;
      this.ServiceFee = (
        Math.ceil(difference / (1000 * 3600 * 24)) * 5.35
      ).toFixed(2);
      this.totalPrice = (
        parseFloat(this.accommodation) + parseFloat(this.ServiceFee)
      ).toLocaleString("en-US");
    },
    totalGuest(num) {
      this.gusetNum += num;
      if (this.num === -1 || this.num === 0) {
        this.gusetNum = 0;
      }
    },
  },
  computed: {
    myGuest() {
      return this.gusetNum;
    },
    reviewScore() {
      return this.$store.getters.reviewScore;
    },
    getDateStart() {
      return this.dateStart.id;
    },
    getDateEnd() {
      return this.dateEnd.id;
    },
    accommodationComma() {
      return this.accommodation.toLocaleString("en-US");
    },
  },
  components: {
    stayWhenSearch,
    detailsCalendar,
    detailsWhoSearch,
  },
};
</script>