<template>
  <div class="card" v-if="data">
      <div class="card-info">
        <h1>RAM</h1>
        <h3>Total: {{data.total}}</h3>
        <h3>Used: {{data.used}}</h3>
        <h3>Free: {{data.available}}</h3>
      </div>
      <hr/>
      <div>
        <h2>Used RAM</h2>
       <progress-bar :value="getRAMNum(data.percent)"></progress-bar>
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
methods:{
    getRAMNum(val){
        return parseFloat(val.slice(0, -1));
    }
}
}
</script>

<style>

</style>