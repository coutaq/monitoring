<template>
  <div class="col-12 col-md-6 col-lg-4 mb-2" v-if="data">
    <div class="card-info">
      <h4>Disks</h4>
      <div v-for="item in data">
        <hr />
        <h5>{{ item.device }} at "{{ item.mountpoint }}"</h5>
        <p>{{ item.fstype }}</p>
        <hr />
        <h5>Storage</h5>
        <p>Total: {{ item.storage.total }}</p>
        <p>Used: {{ item.storage.used }}</p>
        <p>Free: {{ item.storage.available }}</p>
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