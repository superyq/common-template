import cMaster from "./c-master.vue";
import cEchart from "./c-echarts.vue";
import cScroll from "./c-scorll.vue";
import cPercentage from "./c-percentage.vue";
import autoScroll from "./auto-scroll.vue";
import cLoading from "./c-loading.vue";

let diyComponents = [
  cLoading,
  cMaster,
  cEchart,
  cScroll,
  cPercentage,
  autoScroll,
]

export default vue => {
  diyComponents.forEach(item => {
    vue.component(item.name, item)
  })
}