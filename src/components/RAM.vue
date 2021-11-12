<template>
  <div class="col-12 col-md-6 col-lg-4 mb-2" v-if="data">
    <div class="card-info">
      <h4>RAM</h4>
      <hr />
      <h5>Total: {{ data.total }}</h5>
      <h5>Used: {{ data.used }}</h5>
      <h5>Free: {{ data.available }}</h5>
    </div>
    <hr />
    <div>
      <p>Used RAM</p>
      <progress-bar :value="getRAMNum(data.percent)"></progress-bar>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  components: {
    ProgressBar,
  },
  props: ["data"],
  methods: {
    getRAMNum(val) {
      return parseFloat(val.slice(0, -1));
    },
  },
};
</script>

<style>
</style>