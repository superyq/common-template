var fs = require("fs");

// page模板
const pageTmp = `<template lang='pug'>
  .demo demo
</template>

<script>
export default {
  name: 'demo'
}
</script>

<style lang='scss'>

</style>`

fs.writeFile("./src/pages/demo/index.vue", pageTmp, err => {
  if(err) return console.log(`报错信息: ${err.code}`);
  console.log("重置demo页成功");
})