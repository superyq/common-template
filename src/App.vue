<template lang='pug'>
  #app
    transition(name='fade')
      router-view
</template>

<script>
export default {
  name: "App"
};
</script>
