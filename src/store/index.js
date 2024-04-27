import { createStore } from 'vuex'

export default createStore({
  state: {
    User: {
      HashId: '',
      type: '',
    }
  },
  getters: {
    USER(state){
      return state.User
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
