<template>
  <div style="width:100%">
    <line-chart :height='250' :labels='labels' :timbre='tim' :idx="idx" :key="idx" v-for="(tim, idx) in timbre"/>
  </div>
</template>
<script>
import Vue from 'vue'
import VueChartJs from 'vue-chartjs'
import Component from 'vue-class-component'

@Component({
  props: {
    'track': Object
  }
})
export default class TrackAnalyzerComponent extends Vue {
  constructor() {
    super();
    this.labels   = [];
    this.timbre   = [];
    for(let i=0; i<12; i++) {
      this.timbre[i] = [];
    }
  }

  created() {
    this.track.segments.map(track => {
      this.labels.push(track.start)
    });
    this.track.segments.map(track => {
      track.timbre.map((value, idx) => {
        this.timbre[idx].push(value);
      });
    });
  }
}

TrackAnalyzerComponent.component('line-chart', {
  props: ['idx', 'labels', 'timbre'],
  extends: VueChartJs.Line,
  mounted () {
    const datasets = [];
    datasets.push({
      label: 'key' + this.idx,
      backgroundColor: '#f87979',
      data: this.timbre,
      fill: false,
      borderColor: "#a51f54",
      radius: 0
    });
    this.renderChart(
      {
        labels: this.labels,
        datasets: datasets,
      },
      // options
      {
        responsive: true,
        maintainAspectRatio: false,
        pointDot: false,
        scales: {
          xAxes: [{display: false}],
          yAxes: [{display: false}]
        },
        legend: {
          display: false
        },
      }
    )
  }
})
</script>
