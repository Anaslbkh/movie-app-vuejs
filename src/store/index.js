import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    apiKey: 'a1e2f11c0d3b65fa777b28af7b739dd0',
  },
  mutations: {
  },
  actions: {
    async getTodayTrends(data, { url, query }) {
      const res = await axios.get(`https://api.themoviedb.org/3/${url}?api_key=${this.state.apiKey}&query=${query}`);
      return res.data;
    }
  },
  modules: {
  }
})
