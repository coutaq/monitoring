<template>
  <div class="col-12 col-md-6 col-lg-4 mb-4" v-if="data">
    <div class="card-info">
      <h4>CPU</h4>
      <hr />
      <h5>Cores: {{ data.cores }}</h5>
      <h5>Threads: {{ data.threads }}</h5>
    </div>
    <hr />
    <div>
      <p>Total Load</p>
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