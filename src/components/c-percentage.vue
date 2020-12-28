<template lang="pug">
.c-percentage_wrapper(:style='{"background": haveBg ? "#2c3449" : "none"}')
  .c-percentage_number(:style='style')
</template>

<script>
export default {
  name: "c-percentage",
  props: {
    width: {
      type: String,
      default: "50%",
    },
    background: {
      type: Array,
      default() {
        return ["#002adb", "#04f7fb"];
      },
    },
    haveBg: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    style() {
      return `width: ${this.width}; background: -webkit-linear-gradient(left, ${this.background[0]}, ${this.background[1]});`;
    },
  },
};
</script>

<style lang="scss">
.c-percentage_wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  // background: #2c3449;
  border-radius: 0.2rem;
  .c-percentage_number {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 0.2rem;
  }
}
</style>
