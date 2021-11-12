<template>
  <div class="col-12 col-md-6 col-lg-4 mb-2" v-if="data">
    <div class="card-info">
      <h4>Connections</h4>
      <hr />
      <!-- <div>
        <h3>Speed</h3>
        <h2>Up:{{ speed.up }}</h2>
        <h2>Down:{{ speed.down }}</h2>
      </div> -->
      <div v-for="item in data">
        <h5>{{ item.name }}</h5>
        <p>{{ item.speed }}</p>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  components: {
    ProgressBar,
  },
  props: ["data", "speed"],
  methods: {
    getRAMNum(val) {
      return parseFloat(val.slice(0, -1));
    },
  },
};
</script>

<style>
</style>