<template>
    <form class="mui-form" method="POST" @submit.prevent="onSubmit">
      <legend>Passer un ordre</legend>
      <div class="mui-select">
        <select v-model="req">
          <option v-for="item in sens" v-bind:value="item">
            <p v-text="item"></p>
          </option>
        </select>
        <label>Sens</label>
      </div>
      <div class="mui-select">
        <select v-model="marketName">
          <option v-for="item in market" v-text="item.name"></option>
        </select>
        <label>Nom</label>
      </div>
      <div class="mui-textfield mui-textfield--float-label">
        <input type="number" v-model="qty">
        <label>Quantité</label>
      </div>
      <div class="mui-select">
        <select v-model="type">
          <option v-for="item in types" v-text="item"></option>
        </select>
        <label>Type</label>
      </div>
      <div class="mui-textfield mui-textfield--float-label">
        <input type="text" v-model="price">
        <label>Prix</label>
      </div>
      <button type="submit" class="mui-btn mui-btn--raised">Passer</button>
    </form>

</template>

<script>
  import Errors from '../../utils/errors/errors.js'
  import axios from 'axios'
  export default {
    name: 'order',
    data () {
      return {
        market: [],
        types: [
          'Marché', 'ATP', 'Limité'
        ],
        sens: [
          'Achat', 'Vente'
        ],
        type: '',
        marketName: '',
        req: 'Achat',
        price: '',
        qty: '',
        errors: new Errors()
      }
    },
    mounted () {
      axios.get(`http://localhost:3000/api/market`)
        .then(response => {
          this.market = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      onSubmit () {
        console.log(`${this.$data.req} ${this.$data.type} ${this.$data.marketName}`)
        axios.post(`http://localhost:5000/api/logon`, {
          //code: this.article.code,
          //designation: this.article.designation,
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
