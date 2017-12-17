import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Market from '../components/market/Market.vue'
import Order from '../components/order/Order.vue'
import Profile from '../components/profile/Profile.vue'
import Wallet from '../components/wallet/Wallet.vue'
import History from '../components/history/History.vue'
import MaterialLogin from '../components/material-login/Material-Login.vue'
import MaterialSignup from '../components/material-signup/Material-Signup'
import Palmares from '../components/palmares/Palmares.vue'
import News from '../components/news/News.vue'
import Dashboard from '../components/dashboard/Dashboard.vue'
import orderInProgress from '../components/order-in-progress/OrderInProgress'
import Store from '../store/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Container,
      beforeEnter: (to, from, next) => {
        if (Store.getters.isLoggedIn) {
          console.log('1')
          next ()
        }
      },
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/market',
          name: 'Market',
          /*beforeEnter: requireAuth,*/
          component: Market
        },
        {
          path: '/order',
          name: 'order',
          /*beforeEnter: requireAuth,*/
          component: Order
        },
        {
          path: '/profile',
          name: 'Profile',
          /*beforeEnter: requireAuth,*/
          component: Profile
        },
        {
          path: '/wallet',
          name: 'Wallet',
          /*beforeEnter: requireAuth,*/
          component: Wallet
        },
        {
          path: '/history',
          name: 'History',
          /*beforeEnter: requireAuth,*/
          component: History
        },
        {
          path: 'orderInProgress',
          name: 'orderInProgress',
          /*beforeEnter: requireAuth,*/
          component: orderInProgress
        },
        {
          path: '/palmares',
          name: 'Palmares',
          /*beforeEnter: requireAuth,*/
          component: Palmares
        },
        {
          path: '/news',
          name: 'News',
          /*beforeEnter: requireAuth,*/
          component: News
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: MaterialLogin
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: MaterialSignup
    }

  ]
})
