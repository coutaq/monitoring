<template>
  <div class="col-12 col-md-6 col-lg-4 mb-2" v-if="data">
    <div class="card-info">
      <h4>Temps</h4>
      <div v-for="item in data">
        <hr />
        <h5>{{ item.name }}</h5>
        <p>Current: {{ item.current }}<sup>o</sup>C</p>
        <p>Critical: {{ item.critical }}<sup>o</sup>C</p>
      </div>
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
  mounted() {
    console.log(this.data);
  },
};
</script>

<style>
</style>