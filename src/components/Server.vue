<template>
  <h1>{{ address }}</h1>
  <div class="data">
    <cpu-component :data="serverdata.cpu"></cpu-component>
    <ram-component :data="serverdata.mem"></ram-component>
    <temp-component :data="serverdata.temps"></temp-component>
    <network-component
      :data="serverdata.network"
      :speed="serverdata.speed"
    ></network-component>
    <disks-component :data="serverdata.disks"></disks-component>
  </div>
</template>

<script>
import CpuComponent from "./CPU.vue";
import RamComponent from "./RAM.vue";
import TempComponent from "./Temps.vue";
import DisksComponent from "./Disks.vue";
import NetworkComponent from "./Network.vue";
import fixJSON from "../utils/json";
export default {
  props: ["address", "port", "apikey"],
  components: {
    NetworkComponent,
    CpuComponent,
    RamComponent,
    TempComponent,
    DisksComponent,
  },
  data: function () {
    return {
      connection: null,
      serverdata: {},
    };
  },
  methods: {
    setData(data) {
      this.serverdata = fixJSON(data.replaceAll("'", '"'));
    },
  },
  created() {
    let vm = this;
    this.connection = new WebSocket(
      "ws://" + this.address + ":" + this.port + "/data?key=" + this.apikey
    );
    this.connection.onmessage = function (event) {
      vm.setData(event.data);
    };
  },
};
</script>

<style>
</style>