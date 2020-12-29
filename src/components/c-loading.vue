<template lang="pug">
  .c-loading(v-if='loading')
    .c-loading_img
      img.c-img-cover(src='../assets/common/loading.gif')
</template>

<script>
export default {
  name: "c-loading",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.c-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  &_img {
    width: 1.2rem;
    height: 1.2rem;
  }
}
</style>
