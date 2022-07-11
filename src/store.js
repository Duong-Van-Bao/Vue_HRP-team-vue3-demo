// @ts-ignore
import { createStore } from "vuex";

const store = createStore({
    state () {
      return {
        count: 1000
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  }) 

export default store;
