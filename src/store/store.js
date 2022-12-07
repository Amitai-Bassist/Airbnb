import Vuex from 'vuex'

import { userModule } from './modules/user.module.js'
import { stayModule } from './modules/stay.module.js'
import { reviewModule } from './modules/review.module.js'
import { orderModule } from './modules/order.module.JS'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userModule,
    stayModule,
    reviewModule,
    orderModule
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
