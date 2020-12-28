<template lang="pug">
.c-echarts(:id="cId")
</template>

<script>
import echarts from "echarts";
import "echarts-liquidfill/src/liquidFill.js";
import "echarts/lib/chart/map";
import "echarts/map/js/china.js";
import "echarts/map/js/world.js";
import "echarts/lib/component/markPoint.js";
import "echarts/map/json/province/beijing";

export default {
  name: "c-echarts",
  props: {
    cId: {
      type: String,
      required: true,
    },
    option: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      resizefun: null
    };
  },
  watch: {
    option() {
      this.myEcharts();
    },
  },
  mounted() {
    this.myEcharts();

    // 根据屏幕缩放echarts自适应
    this.resizefun = () => {
      this.$echarts.init(document.getElementById(this.cId)).resize();
    };
    window.addEventListener("resize", this.resizefun);
  },
  //移除事件监听，避免内存泄漏
  beforeDestroy() {
    window.removeEventListener("resize", this.resizefun);
    this.resizefun = null;
  },
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(this.cId));

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(this.option);

      myChart.on("click", (a) => {
        this.$emit("eClick", a);
      });
    },
    toCity(name) {
      import(`echarts/map/json/province/${name}`).then((module) => {
        echarts.registerMap(name, module.default);
      });
    },
  },
};
</script>

<style lang="scss">
.c-echarts {
  width: 100%;
  height: 100%;
}
</style>
