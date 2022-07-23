import { createStore } from "vuex";
import * as actionTypes from "@/store/types/action-types";
import * as mutationTypes from "@/store/types/mutation-types";
export default createStore({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {
    [mutationTypes.INCREMENT](state, payload: number) {
      state.count += payload;
    },
  },
  actions: {
    // context {commit dispatch getters state}
    [actionTypes.INCREMENT](context) {
      context.commit(mutationTypes.INCREMENT);
    },
  },
  modules: {},
});
