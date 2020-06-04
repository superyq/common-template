<template lang='pug'>
  #app
    transition(name='fade')
      router-view
    .demo1(@click='go("demo1")') demo1
    .demo2(@click='go("demo2")') demo2
</template>

<script>
export default {
  name: "App",
  methods: {
    go(path) {
      this.$router.push(`/${path}`);
    }
  }
};
</script>
