<template>
    <form class="ui form" method="POST" @submit.prevent="onSubmit">
      <h4 class="ui dividing header">Passer un ordre</h4>
      <div class="field">
        <label>Sens</label>
        <select v-model="toDo" class="ui fluid dropdown">
          <option v-for="item in sens" v-bind:value="item" v-text="item" value="">State</option>
        </select>
      </div>
      <div class="field">
        <label>Symbole</label>
        <select v-model="symbol" class="ui fluid dropdown">
          <option v-for="item in market" v-text="item.name"></option>
        </select>
      </div>
      <div class="field">
        <label>Quantité</label>
        <input v-model="qty" type="text" name="first-name">
      </div>
      <div class="field">
        <label>State</label>
        <select v-model="type" class="ui fluid dropdown">
          <option v-for="item in types" v-text="item"></option>
        </select>
      </div>
      <div v-if="type == 'Limité'" class="field">
        <label>Prix</label>
        <input type="text" v-model="price">
      </div>
      <button class="ui button" type="submit">Passer</button>
    </form>

</template>

<script>
import Errors from "../../utils/errors/errors.js";
import axios from "axios";
export default {
  name: "order",
  data() {
    return {
      market: [],
      types: ["Marché", "ATP", "Limité", "Stop", "Meilleure limite"],
      sens: ["Achat", "Vente"],
      type: "",
      symbol: "",
      toDo: "",
      price: "",
      qty: "",
      errors: new Errors()
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/api/market`)
      .then(response => {
        this.market = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    onSubmit() {
      console.log(`${this.$data.toDo} ${this.$data.type}`);
      let $price = undefined;
      if (this.$data.type === "Limité") {
        $price = this.$data.price;
      }
      axios
        .post(`http://localhost:4000/api/transaction`, {
          //email: this.$store.getters.email,
          //password: this.$store.getters.password,
          symbol: this.$data.symbol,
          price: $price,
          toDo: this.$data.toDo,
          qty: this.$data.qty,
          type: this.$data.type,
          state: "inProgress"
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
