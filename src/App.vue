<template>
  <div>
    <div class="inputs">
      <input type="text" v-bind="server" placeholder="Address" />
      <input type="text" v-bind="port" placeholder="Port" />
      <input type="text" v-bind="key" placeholder="Key" />
      <button class="btn btn-secondary" v-on="addServer">+</button>
    </div>
    <server-component
      v-for="server in servers"
      :key="server.address"
      :address="server.address"
      :port="server.port"
      :apikey="server.key"
    ></server-component>
  </div>
</template>

<script>
import ServerComponent from "./components/Server.vue";
export default {
  data() {
    return {
      server: "",
      port: "",
      key: "",
      servers: [],
    };
  },
  name: "App",
  components: {
    ServerComponent,
  },
  methods: {
    addServer() {
      this.servers.append({
        address: this.address,
        port: this.port,
        key: this.key,
      });
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
