<template>
  <div>
    <div class="inputs">
      <input type="text" v-model="serverinfo.add" placeholder="Address" />
      <input type="text" v-model="serverinfo.port" placeholder="Port" />
      <input type="text" v-model="serverinfo.key" placeholder="Key" />
      <button class="btn btn-secondary" v-on:click="addServer()">+</button>
    </div>
    <p v-for="server in servers">{{ server.add }}</p>
    <!-- <server-component
      v-for="server in servers"
      :key="server.server"
      :serverinfo="server"
      v-if="server"
    ></server-component> -->
  </div>
</template>

<script>
import ServerComponent from "./components/Server.vue";
import store from "./store";
export default {
  created() {
    this.servers = store.get("servers", []);
    console.log("servers:", this.servers);
  },
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
      console.log(this.servers);
      store.set("servers", this.servers);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.card {
  width: 225px;
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
