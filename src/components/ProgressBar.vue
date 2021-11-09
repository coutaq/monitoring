<template>
  <div class="bar-container">
    <div class="bar-wrapper">
      <div class="bar">
        <div v-bind:style="bar_style" class="bar-text"></div>
      </div>
    </div>
    <h3 class="value">{{ value }}%</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bar_style: "",
    };
  },
  props: ["value"],
  methods: {},
  beforeUpdate() {
    this.bar_style = "width:" + this.value + "%;";
  },
};
</script>

<style>
.bar {
  width: 100%;
  background: repeating-linear-gradient(
    to right,
    grey,
    grey 14px,
    #ffffff 1px,
    #ffffff 15px
  );
  border: solid black 2px;
}
.bar-text {
  width: 10%;
  height: 30px;
  background: repeating-linear-gradient(
    to right,
    #606dbc,
    #606dbc 14px,
    #ffffff 1px,
    #ffffff 15px
  );
  text-align: center; /* To center it horizontally (if you want) */
  line-height: 30px; /* To center it vertically */
  color: white;
}
.bar-wrapper {
  display: inline-block;
  width: 150px;
}
.value {
  display: inline-block;
  width: 80px;
  text-align: center;
  height: 30px;
  margin-top: 0.75ch;
}
.bar-container {
  display: flex;
  height: 30px;
}
</style>