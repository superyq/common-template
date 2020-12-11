<template lang='pug'>
.demo
  .box
    .box_item
</template>

<script>
import { getData } from "@/api/page2.js";

export default {
  name: "demo",
  methods: {
    getData() {
      getData()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMoney() {
      let arrFive = [];
      let arrTwo = [];
      let five;
      let two;
      five = setInterval(() => {
        var a = Math.floor(Math.random() * 35);
        if (arrFive.length < 5 && !arrFive.includes(a)) {
          arrFive.push(Math.floor(a));
        } else {
          clearInterval(five);
          console.log(arrFive);
        }
      }, 100);

      two = setInterval(() => {
        var b = Math.floor(Math.random() * 12);
        if (arrTwo.length < 2 && !arrTwo.includes(b)) {
          arrTwo.push(b);
        } else {
          clearInterval(two);
          console.log(arrTwo);
        }
      }, 100);
    }
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang='scss'>
.demo {
  width: 100%;
  height: 100vh;
}
.box {
  // width: 500px;
  // height: 500px;
  // margin: 0 auto;
  border: 1px solid;
}
.box_item {
  width: 100px;
  height: 100px;
  margin-top: 20px;
  // margin: 20px auto;
  border: 1px solid;
}
</style>