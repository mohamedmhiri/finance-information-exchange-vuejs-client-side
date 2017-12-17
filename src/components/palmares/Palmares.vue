<template>
  <div>
    <div class="ui icon input">
      <i class="search icon"></i>
      <input type="text" @keyup="onClick" @click="onClick" v-model="toSearch">
    </div>
    <table class="ui very compact celled table">
      <thead>
        <tr>
            <th>Nom</th>
            <th>Dernier</th>
            <th>Haut</th>
            <th>Bas</th>
            <th>Volume</th>
            <th>variation</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="item in elements">
          <td v-text="item.name"></td>
          <td v-text="item.dernier"></td>
          <td v-text="item.haut"></td>
          <td v-text="item.bas"></td>
          <td v-text="item.volume"></td>
          <td v-text="item.variation"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'palmares',
    data () {
      return {
        palmares: [],
        elements: [],
        toSearch: ''
      }
    },
    mounted () {
      axios.get(`http://localhost:3000/api/palmares`)
        .then(response => {
          this.palmares = response.data
          this.elements = this.palmares
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      onClick () {
        if (this.$data.toSearch.length == 0) {
          this.elements = this.palmares
          return this.elements
        } else {
          this.elements = this.palmares
          .filter(data => {
            return (RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.name)
              || RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.dernier)
              || RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.haut)
              || RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.bas)
              || RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.volume)
              || RegExp(`.*(${this.$data.toSearch}).*`, 'i').test(data.variation)
            )
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
