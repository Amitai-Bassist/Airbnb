import Vuex from 'vuex'

import { userModule } from './modules/user.module.js'
import { stayModule } from './modules/stay.module.js'
import { reviewModule } from './modules/review.module.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userModule,
    stayModule,
    reviewModule
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
