<template>
  <div class="c-scroll" @scroll='toBottom'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-scroll',
  methods: {
    toBottom(e) {
      const ele = e.srcElement ? e.srcElement : e.target;
      if(ele.scrollTop + ele.offsetHeight > ele.scrollHeight - 100) {
        this.$emit('toBottom')
      }
    }
  }
}
</script>

<style>
.c-scroll {
  width: calc(100% + 0.5rem);
  height: 100%;
  overflow: auto;
}
</style>