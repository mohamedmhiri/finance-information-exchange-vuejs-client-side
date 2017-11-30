<template>
    <form class="mui-form">
      <legend>Passer un ordre</legend>
      <div class="mui-select">
        <select>
          <option>Achat</option>
          <option>Vente</option>
        </select>
        <label>Sens</label>
      </div>
      <div class="mui-select">
        <select>
          <option v-for="item in market" v-text="item.name"></option>
        </select>
        <label>Nom</label>
      </div>
      <div class="mui-textfield mui-textfield--float-label">
        <input type="number">
        <label>Quantité</label>
      </div>
      <div class="mui-select">
        <select>
          <option v-for="item in type" v-text="item"></option>
        </select>
        <label>Type</label>
      </div>
      <div class="mui-textfield mui-textfield--float-label">
        <input type="text">
        <label>Prix</label>
      </div>
      <button type="submit" class="mui-btn mui-btn--raised">Passer</button>
    </form>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'order',
    data () {
      return {
        market: [],
        type: [
          'Marché', 'ATP', 'Limité'
        ]
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
