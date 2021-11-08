<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div v-if='serverdata'>
    <cpu-component :cpudata="serverdata['cpu']"></cpu-component>
  </div>
 
</template>

<script>
import CpuComponent from './components/CPU.vue'
export default {
  name: 'App',
  components: {
    CpuComponent
  },
  data:function(){
    return{
      connection:null,
      serverdata: {}
    }
  },
  methods:{
    setData(data){
      this.serverdata = JSON.parse(data)
      console.log(this.serverdata)
    },
  },
   created() {
     let vm = this;
    console.log("Starting connection to WebSocket Server")
    this.connection = new WebSocket("ws://192.168.0.105:5000/data?key=test")

    this.connection.onmessage = function(event) {
      vm.setData(event.data)
    }

    this.connection.onopen = function() {
      // console.log(this)
      console.log("Successfully connected to the echo websocket server...")
    }

  }
   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
