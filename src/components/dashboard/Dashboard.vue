<template>
  <div>
    <h1 class="ui dividing header">Dashboard</h1>
    <form class="ui form" method="POST" @submit.prevent="updateChart()">
        <div class="two fields">
          <div class="field">
            <label>Mois</label>
            <select v-model="month" class="ui fluid dropdown">
              <option v-for="item in months" v-text="item"></option>
            </select>
          </div>
          <div class="field">
            <label>Année</label>
            <select v-model="year" class="ui fluid dropdown">
              <option v-for="item in years" v-text="item.name"></option>
            </select>
          </div>
        </div>
      <button class="ui button" type="submit">Afficher</button>
    </form>
    <div id="container" style="min-width: 310px;height: 400px; margin: 0 auto"></div>
    <div id="container2" style="min-width: 310px;height: 400px; margin: 0 auto"></div>
    <div id="container3" style="min-width: 310px;height: 400px; margin: 0 auto"></div>
  </div>
  <!-- <chartist
    ratio="ct-major-second"
    type="Line"
    :data="chartData"
    :options="qtyChartOptions" >
  </chartist> -->
</template>

<script>
import axios from "axios";
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
      trans: [
        {
          name: "a",
          y: 0
        },
        {
          name: "b",
          y: 0
        },
        {
          name: "c",
          y: 0
        },
        {
          name: "d",
          y: 0
        },
        {
          name: "e",
          y: 0
        },
        {
          name: "f",
          y: 0
        },
        {
          name: "g",
          y: 0
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
      },
      nbrTransChartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        series: [
          {
            name: "Nombre de Transactions",
            colorByPoint: true,
            data: [
              {
                name: "a",
                y: 0
              },
              {
                name: "b",
                y: 0
              },
              {
                name: "c",
                y: 0
              },
              {
                name: "d",
                y: 0
              },
              {
                name: "e",
                y: 0
              },
              {
                name: "f",
                y: 0
              },
              {
                name: "g",
                y: 0
              }
            ]
          }
        ],
        title: {
          text: ``
        }
      },
      closeChartOptions: {
        chart: {
          polar: true,
          type: "line"
        },

        title: {
          text: "",
          x: -80
        },

        pane: {
          size: "80%"
        },

        xAxis: {
          categories: [
            "Sales",
            "Marketing",
            "Development",
            "Customer Support",
            "Information Technology",
            "Administration",
            "aze"
          ],
          tickmarkPlacement: "on",
          lineWidth: 0
        },

        yAxis: {
          gridLineInterpolation: "polygon",
          lineWidth: 0,
          min: 0
        },

        tooltip: {
          shared: true,
          pointFormat:
            '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
          align: "right",
          verticalAlign: "top",
          y: 70,
          layout: "vertical"
        },

        series: [
          {
            name: "Clôture",
            data: [43000, 19000, 60000, 35000, 17000, 10000, 1000],
            pointPlacement: "on"
          }
        ]
      }
    };
  },
  watch: {
    // whenever question changes, this function will run
    cotations: function() {
      this.qtyChartOptions.series[0].data = this.cotations;
    }
  },
  methods: {
    updateChart() {
      let histories = [];
      let transactins = [];
      let closes = []
      let names = []
      let values = []
      if (this.year == "2015") {
        this.year = "15";
      }
      axios
        .get(`http://localhost:5000/history/${this.year}/${this.month}/qty`)
        .then(response => {
          response.data.forEach(element => {
            histories.push(element[0]);
          });
          histories.forEach((elem, key) => {
            this.cotations[key].name = elem.value;
            this.cotations[key].value = elem.qty;
          });
          this.qtyChartOptions.title.text = `Top 7 Valeurs/quantité négociée en ${this
            .month}/${this.year}`;
          this.qtyChartOptions.series[0].data = this.cotations;
          Highcharts.chart("container", this.qtyChartOptions);
        })
        .catch(error => {
          console.log(error);
        });
      axios
        .get(
          `http://localhost:5000/history/${this.year}/${this.month}/tranNumb`
        )
        .then(response => {
          response.data.forEach(element => {
            transactins.push(element[0]);
          });
          console.log(response.data);
          transactins.forEach((elem, key) => {
            this.trans[key].name = elem.value;
            this.trans[key].y = elem.tranNumb;
          });
          this.nbrTransChartOptions.title.text = `Top 7 Valeurs/nombre de transactions en ${this
            .month}/${this.year}`;
          this.nbrTransChartOptions.series[0].data = this.trans;
          Highcharts.chart("container2", this.nbrTransChartOptions);
        })
        .catch(error => {
          console.log(error);
        });
      axios
        .get(`http://localhost:5000/history/${this.year}/${this.month}/close`)
        .then(response => {
          response.data.forEach(element => {
            closes.push(element[0]);
          });
          console.log(response.data);
          closes.forEach((elem, key) => {
            names.push(elem.value)
            values.push(elem.close)
          });
          this.closeChartOptions.title.text = `Top 7 Valeurs/Clôture en ${this
            .month}/${this.year}`;
          this.closeChartOptions.series[0].data = values;
          this.closeChartOptions.xAxis.categories = names
          Highcharts.chart("container3", this.closeChartOptions);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
