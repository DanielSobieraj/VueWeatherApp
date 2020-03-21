import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        results: []
    },
    mutations: {
        result(state, payload) {
            state.results = payload;
        }
    },
    actions: {

    },
    getters: {
        weather(state) {
            return state.results
        }
    }
});
