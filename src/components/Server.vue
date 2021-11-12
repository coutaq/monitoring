<template>
  <div class="row container">
    <h3>{{ serverinfo.address }}</h3>
    <div class="row">
      <cpu-component :data="serverdata.cpu"></cpu-component>
      <ram-component :data="serverdata.mem"></ram-component>
      <temp-component :data="serverdata.temps"></temp-component>
      <!-- <network-component
        :data="serverdata.network"
        :speed="serverdata.speed"
      ></network-component> -->
      <disks-component :data="serverdata.disks"></disks-component>
    </div>
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
  props: ["serverinfo"],
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
    if (Object.keys(this.serverinfo).length > 0) {
      console.log("ws:", this.serverinfo.server);
      let vm = this;
      this.connection = new WebSocket(
        "ws://" +
          this.serverinfo.address +
          ":" +
          this.serverinfo.port +
          "/data?key=" +
          this.serverinfo.apikey
      );
      this.connection.onmessage = function (event) {
        vm.setData(event.data);
      };
    }
  },
};
</script>

<style>
</style>