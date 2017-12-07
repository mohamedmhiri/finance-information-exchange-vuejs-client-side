import Vue from 'vue'
import Vuex from 'vuex'

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token')
    },
    // mutations are the equivalents of reducers in Redux
    mutations: {
        [LOGIN](state) {
            state.pending = true;
        },
        [LOGIN_SUCCESS](state) {
            state.isLoggedIn = true;
            state.pending = false;
        },
        [LOGOUT](state) {
            state.isLoggedIn = false;
        }
    },
    // commits are the equivalents of actions in Redux
    actions: {
        login({ commit }, creds) {
            commit(LOGIN); // show spinner
            return new Promise(resolve => {
                setTimeout(() => {
                    localStorage.setItem("token", "JWT");
                    commit(LOGIN_SUCCESS);
                    resolve();
                }, 1000);
            });
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            commit(LOGOUT);
        }
    },
    // getters are the equivalents of selectors in Redux
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn
        }
    }
});