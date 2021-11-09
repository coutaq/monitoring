<template>
  <div class="card" v-if="data">
    <div class="card-info">
      <h1>Disks</h1>
      <div v-for="item in data">
        <hr />
        <h2>{{ item.device }} at "{{ item.mountpoint }}"</h2>
        <h3>{{ item.fstype }}</h3>
        <hr />
        <h2>Storage</h2>
        <h3>Total: {{ item.storage.total }}</h3>
        <h3>Used: {{ item.storage.used }}</h3>
        <h3>Free: {{ item.storage.available }}</h3>
        <progress-bar :value="getMemNum(item.storage.percent)"></progress-bar>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  components: {
    ProgressBar,
  },
  props: ["data"],
  methods: {
    getMemNum(val) {
      return parseFloat(val.slice(0, -1));
    },
  },
};
</script>

<style>
</style>