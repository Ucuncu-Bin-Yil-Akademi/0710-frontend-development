import { createStore } from "vuex";

export const exampleStore = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    resetCount(state) {
      state.count = 0;
    },
  },
});
