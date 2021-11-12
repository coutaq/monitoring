<template>
  <div class="container body">
    <div class="row">
      <div class="sidebar col-1"></div>
      <div class="container flex-column justify-content-center col-11">
        <server-component
          :serverinfo="{
            address: '109.254.85.64',
            port: '5555',
            apikey: 'test',
          }"
        ></server-component>
      </div>
    </div>
    <!-- <div class="inputs mb-2">
      <input type="text" v-model="serverinfo.address" placeholder="Address" />
      <input type="text" v-model="serverinfo.port" placeholder="Port" />
      <input type="text" v-model="serverinfo.apikey" placeholder="Key" />
      <button class="btn btn-secondary" v-on:click="addServer()">+</button>
    </div> -->
  </div>
</template>

<script>
import ServerComponent from "./components/Server.vue";
export default {
  data() {
    return {
      serverinfo: {},
      servers: [],
    };
  },
  name: "App",
  components: {
    ServerComponent,
  },
  methods: {
    addServer() {
      this.servers.push(this.serverinfo);
    },
  },
};
</script>

<style>
html,
body,
.body,
.sidebar {
  width: 100vw;
  height: 100vh;
  margin: 0px !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}
.sidebar {
  background-color: #2c3e50;
}
.card {
  width: 250px;
}
.data {
  width: calc(3 * 300px);
  display: grid;
  grid-template-columns: repeat(3, 300px);
}
.inputs {
  display: flex;
  justify-content: space-evenly;
  widows: calc(2 * 300px);
}
</style>
