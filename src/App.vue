<template>
  <div>
    <!-- <server-component
      address="localhost"
      port="5000"
      apikey="test"
    ></server-component> -->
    <server-component
      address="109.254.85.64"
      port="5555"
      apikey="test"
    ></server-component>
  </div>
</template>

<script>
import ServerComponent from "./components/Server.vue";
export default {
  name: "App",
  components: {
    ServerComponent,
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
</style>
