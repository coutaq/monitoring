<template>
  <div class="card" v-if="data">
    <div class="card-info">
      <h1>CPU</h1>
      <hr />
      <h3>Cores: {{ data.cores }}</h3>
      <h3>Threads: {{ data.threads }}</h3>
    </div>
    <hr />
    <div>
      <h2>Total Load</h2>
      <progress-bar :value="data.total_load"></progress-bar>
    </div>
    <hr />
    <!-- <div>
      <h2>Load by threads</h2>
      <div v-for="item in data.threads_load" :key="item.id">
        <p>item</p>
         <progress-bar :value="data.total_load"></progress-bar> 
      </div>
    </div> -->
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  components: {
    ProgressBar,
  },
  props: ["data"],
};
</script>

<style>
</style>