<template lang="pug">
  .c-master {{ text }}
</template>

<script>
export default {
  name: "c-master",
  props: {
    text: {
      type: String,
      default: "遮罩",
    },
  },
};
</script>

<style lang="scss">
.c-master {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.24rem;
  background: rgba(0, 0, 0, 0.6);
  color: rgba(255, 255, 255, 0.8);
}
</style>
