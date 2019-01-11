import {cityLoad, setCity} from '../../client/until/until'
const state = () => ({
  city: cityLoad()
})

const mutations = {
  setPosition: (state, city) => {
    state.city = city
  }
}

const actions = {
  getPosition: ({commit}, city) => {
    commit('setPosition', setCity(city))
  }
}

export default {
  state,
  mutations,
  actions
}
