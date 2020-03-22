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
        result(state, payload) {
            state.commit('result', payload);
        }
    },
    getters: {
        weather(state) {
            return state.results
        }
    }
});
