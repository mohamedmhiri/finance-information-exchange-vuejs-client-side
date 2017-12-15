<template>
  <div>
    <h1>Historique</h1>
    <table class="mui-table mui-table--bordered">
      <thead>
      <tr>
        <th>Etat</th>
        <th>Date</th>
        <th>Sens</th>
        <th>Symbole</th>
        <th>Quantité</th>
        <th>Prix</th>
        <th>Type</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in transactions">
        <td v-text="item.date"></td>
        <td v-text="item.updatedAt"></td>
        <td v-text="item.dir"></td>
        <td v-text="item.req"></td>
        <td v-text="item.qty"></td>
        <td v-text="item.price"></td>
        <td v-text="item.type"></td>
        <td>Modifier</td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import moment from 'moment'
  import axios from 'axios'
  export default {
    name: 'history',
    data () {
      return {
        transactions: []
      }
    },
    mounted () {
      axios.get(`http://localhost:5000/api/transactions`)
        .then(response => {
          this.transactions = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
