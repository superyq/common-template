<template>
  <div>demo</div>
</template>
<script>
import datas from "@/datas/信用卡/page2.js";
import { getData } from "@/api/page2.js";
 
export default {
  name: "demo",
  data() {
    return {
      datas
    }
  },
  methods: {
    dealData(obj) {
      return JSON.parse(obj.TX_BODY.ENTITY.Data_Enqr_Rslt).rows
    },
    getdatas() {
      getData().then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getdatas();
    let obj = {}
    Object.keys(datas).map(i => {
      obj[i] = this.dealData(datas[i]);
    })
    console.log(obj)
  }
};
</script>