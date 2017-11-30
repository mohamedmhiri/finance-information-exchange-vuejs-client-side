<template>
  <div>
    <input type="text" @click="onClick" v-model="toSearch">
    <table class="mui-table mui-table--bordered">
      <thead>
      <tr>
        <th>Nom</th>
        <th>Dernier</th>
        <th>Ouv</th>
        <th>Haut</th>
        <th>Bas</th>
        <th>Volume(titres)</th>
        <th>Volume(DT)</th>
        <th>variation</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in market">
        <td v-text="item.name"></td>
        <td v-text="item.dernier"></td>
        <td v-text="item.ouv"></td>
        <td v-text="item.haut"></td>
        <td v-text="item.bas"></td>
        <td v-text="item.volumeTitle"></td>
        <td v-text="item.volumeDT"></td>
        <td v-text="item.variation"></td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'market',
    data () {
      return {
        market: [],
        toSearch: ''
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
      onClick () {
        this.market = this.market
          .filter(data => {
            return (RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.name)
              || RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.dernier)
              || RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.ouv)
              || RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.haut)
              || RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.bas)
              || RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.volumeTitle)
              || RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.volumeDT)
              || RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.variation)
            )
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
