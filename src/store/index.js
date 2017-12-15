import Vue from 'vue'
import Vuex from 'vuex'

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'
const SIGNUP = 'SIGNUP'

Vue.use(Vuex)
import axios from 'axios'

export default new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        email: '',
        password: '',
        name: ''
    },
    // mutations are the equivalents of reducers in Redux
    mutations: {
        [LOGIN](state) {
            state.pending = true
        },
        [LOGIN_SUCCESS](state) {
            state.isLoggedIn = true
            state.pending = false
        },
        [LOGOUT](state) {
            state.isLoggedIn = false
        },
        [SIGNUP](state){
            state.isLoggedIn = false
        }
    },
    // commits are the equivalents of actions in Redux
    actions: {
        login({ commit }, creds) {
            this.state.email = creds.email,
            this.state.password = creds.password
            commit(LOGIN) // show spinner
            return axios.post(`http://localhost:5000/api/authenticate`, {
                email: this.state.email,
                password: this.state.password,
                
            })
                .then(resolve => {
                    setTimeout(() => {
                        localStorage.setItem('token', resolve.data.token)
                        commit(LOGIN_SUCCESS)
                        console.log(resolve)
                    }, 1000)
                })
                .catch(error => {
                    console.log(error)
                })
            /*return new Promise(resolve => {
                setTimeout(() => {
                    localStorage.setItem('token', 'JWT')
                    commit(LOGIN_SUCCESS)
                    resolve()
                }, 1000)
            })*/
        },
        logout({ commit }) {
            localStorage.removeItem('token')
            commit(LOGOUT)
        },
        signUp({ commit }, creds) {
            this.state.email = creds.email,
            this.state.password = creds.password
            this.state.name = creds.name
            commit(SIGNUP) // show spinner
            return axios.post(`http://localhost:5000/api/signup`, {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
                .then(resolve => {
                    setTimeout(() => {
                        localStorage.setItem('token', 'JWT')
                        commit(SIGNUP)
                        console.log(resolve)
                        //resolve()
                    }, 1000)
                })
                .catch(error => {
                    console.log(error)
                })
            /*return new Promise(resolve => {
                setTimeout(() => {
                    localStorage.setItem('token', 'JWT')
                    commit(LOGIN_SUCCESS)
                    resolve()
                }, 1000)
            })*/
        }
    },
    // getters are the equivalents of selectors in Redux
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn
        },
        email: state => {
            return state.email
        },
        password: state => {
            return state.password
        },
        name: state => {
            return state.name
        }
    }
})