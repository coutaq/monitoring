<template>
<div class="card">
    <div class="card-info">
      <h1>Disks</h1>
      <div v-for="item in data">
        <hr>
        <h2>{{item.device}} at "{{item.mountpoint}}"</h2>
        <h3>{{item.fstype}}</h3>
      </div>
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
    getMemNum(val){
        return parseFloat(val.slice(0, -1));
    }
}
}
</script>

<style>

</style>