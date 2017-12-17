<template>
  <div>
    <form class="mui-form" method="POST" @submit.prevent="updateChart()">
      <legend>Passer un ordre</legend>
      <div class="mui-select">
        <select v-model="month">
          <option v-for="item in months" v-bind:value="item">
            <p v-text="item"></p>
          </option>
        </select>
        <label>Mois</label>
      </div>
      <div class="mui-select">
        <select v-model="year">
          <option v-for="item in years" v-text="item.name"></option>
        </select>
        <label>Année</label>
      </div>
      <button type="submit" class="mui-btn mui-btn--raised">Afficher</button>
    </form>
    <div id="container" style="min-width: 310px;height: 400px; margin: 0 auto"></div>
  </div>
  <!-- <chartist
    ratio="ct-major-second"
    type="Line"
    :data="chartData"
    :options="qtyChartOptions" >
  </chartist> -->
</template>

<script>
import axios from "axios"
export default {
  name: "dashboard",
  data() {
    return {
      year: "2015",
      month: "01",
      years: [{ name: "2015", value: "15" }, { name: "2016", value: "2016" }],
      months: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12"
      ],
      cotations: [
        {
          name: "",
          value: 0,
          colorValue: 1
        },
        {
          name: "",
          value: 0,
          colorValue: 2
        },
        {
          name: "",
          value: 0,
          colorValue: 3
        },
        {
          name: "",
          value: 0,
          colorValue: 4
        },
        {
          name: "",
          value: 0,
          colorValue: 5
        },
        {
          name: "",
          value: 0,
          colorValue: 6
        },
        {
          name: "",
          value: 0,
          colorValue: 7
        }
      ],
      qtyChartOptions: {
        colorAxis: {
          minColor: "#FFFFFF",
          maxColor: Highcharts.getOptions().colors[0]
        },
        series: [
          {
            type: "treemap",
            layoutAlgorithm: "squarified",
            data: [
              {
                name: "a",
                value: 0,
                colorValue: 1
              },
              {
                name: "b",
                value: 0,
                colorValue: 2
              },
              {
                name: "c",
                value: 0,
                colorValue: 3
              },
              {
                name: "d",
                value: 0,
                colorValue: 4
              },
              {
                name: "e",
                value: 0,
                colorValue: 5
              },
              {
                name: "f",
                value: 0,
                colorValue: 6
              },
              {
                name: "g",
                value: 0,
                colorValue: 7
              }
            ]
          }
        ],
        title: {
          text: `Historique `
        }
      }
    }
  },
  watch: {
    // whenever question changes, this function will run
    cotations: function() {
      this.qtyChartOptions.series[0].data = this.cotations
    }
  },
  methods: {
    updateChart() {
      let histories = []
      if (this.year == "2015") {
        this.year = "15"
      }
      axios
        .get(`http://localhost:5000/history/${this.year}/${this.month}`)
        .then(response => {
          response.data.forEach(element => {
            histories.push(element[0])
          })
          histories.forEach((elem, key) => {
            this.cotations[key].name = elem.value
            this.cotations[key].value = elem.qty
          })
          this.qtyChartOptions.title.text = `Historique ${this.month}/${this.year}`
          this.qtyChartOptions.series[0].data = this.cotations
          Highcharts.chart("container", this.qtyChartOptions)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
