import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Market from '../components/market/Market.vue'
import Order from '../components/order/Order.vue'
import Profile from '../components/profile/Profile.vue'
import Wallet from '../components/wallet/Wallet.vue'
import History from '../components/history/History.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Container,
      children: [
        {
          path: '/market',
          name: 'Market',
          component: Market
        },
        {
          path: '/order',
          name: 'order',
          component: Order
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: '/wallet',
          name: 'Wallet',
          component: Wallet
        },
        {
          path: '/history',
          name: 'History',
          component: History
        }
      ]
    }

  ]
})
