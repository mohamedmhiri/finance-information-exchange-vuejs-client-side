<template>
  <div>
    <h1>Bienvenu</h1>
    <div>
      <h2 v-text="username"></h2>
    </div>
    <div class="mui-divider"></div>
    <div>
      <h2 v-text="email"></h2>
    </div>
  </div>
  

</template>

<script>
import Vuex from "vuex";
import axios from 'axios'
export default {
  name: "profile",
  data() {
    return {
      username: "",
      email: ""
    };
  },
  mounted () {
    console.log(this.$store.getters.name+1)
      axios.get(`http://localhost:4000/api/get/${this.$store.getters.email}`)
        .then(response => {
          this.$data.username = response.name
          this.$data.email = this.$store.getters.email
        })
        .catch(error => {
          console.log(error)
        })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
