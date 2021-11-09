<template>
  <div class="card" v-if="data">
    <div class="card-info">
      <h1>Temps</h1>
      <div v-for="item in data">
        <hr />
        <h2>{{ item.name }}</h2>
        <h3>Currenct: {{ item.current }}<sup>o</sup>C</h3>
        <h3>Critical: {{ item.critical }}<sup>o</sup>C</h3>
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