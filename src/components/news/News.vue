<template>
  <div>
    <h1 class="ui dividing header">News</h1>
    
    <table class="ui very compact celled table">
      <thead>
        <tr>
            <th>Date</th>
            <th>Nouvelle</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="item in news">
          <td v-text="item.date"></td>
          <td v-text="item.info"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'news',
    data () {
      return {
        news: []
      }
    },
    mounted () {
      axios.get(`http://localhost:3000/api/news`)
        .then(response => {
          this.news = response.data
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
