<template>
  <div class="card" v-if="data">
    <div class="card-info">
      <h1>Connections</h1>
      <hr />
      <div>
        <h3>Speed</h3>
        <h2>Up:{{ speed.up }}</h2>
        <h2>Down:{{ speed.down }}</h2>
      </div>
      <div v-for="item in data">
        <h3>{{ item.name }}</h3>
        <h2>{{ item.speed }}</h2>
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