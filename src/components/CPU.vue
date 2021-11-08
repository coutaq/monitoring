<template>
  <div v-if="cpudata">
      <p> {{cpudata}}</p>
      <h1>CPU LOAD: {{cpudata.total_load}}</h1>
  </div>
</template>

<script>
export default {
props:['cpudata', 'test'],
mounted(){
  console.log("test: ",this.cpudata["'cpu'"])
  // console.log(this.test)
}
}
</script>

<style>

</style>