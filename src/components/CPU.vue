<template>
  <div class="card" v-if="data">
     <div class="card-info">
      <h1>CPU</h1>
      <h3>Cores: {{data.cores}}</h3>
      <h3>Threads: {{data.threads}}</h3>
      </div>
      <hr/>
      <div>
        <h2>Total Load</h2>
       <progress-bar :value="data.total_load"></progress-bar>
      </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue'
export default {
  components: {
    ProgressBar
  },
props:['data'],
}
</script>

<style>

</style>