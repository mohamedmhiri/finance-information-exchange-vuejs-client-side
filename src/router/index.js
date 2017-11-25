import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Market from '../components/market/Market.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Container
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    }
  ]
})
