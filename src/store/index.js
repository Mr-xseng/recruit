import Vuex from 'vuex'
import Vue from 'vue'
import Position from './modules/position'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Position
  },
  getters
})
