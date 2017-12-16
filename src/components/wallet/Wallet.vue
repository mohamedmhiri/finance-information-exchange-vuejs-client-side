<template>
  <div>
    <h1>Portefeuil</h1>
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
        <td v-text="item.state"></td>
        <td v-text="item.updatedAt"></td>
        <td v-text="item.toDo"></td>
        <td v-text="item.symbol"></td>
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
  import axios from 'axios'
  export default {
    name: 'wallet',
    data () {
      return {
        transactions: []
      }
    },
    mounted () {
      axios.get(`http://localhost:4000/api/transaction/getBy/state/done`)
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
