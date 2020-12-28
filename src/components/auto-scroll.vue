<template lang="pug">
  vue-scroll.auto-scroll(:class-option="options", :data='tables')
    slot
</template>

<script>
import vueScroll from "vue-seamless-scroll";

export default {
  name: "auto-scroll",
  props: {
    option: {
      type: Object,
      default() {
        return {};
      },
    },
    tables: {
      type: Array,
    },
  },
  data() {
    return {
      baseOption: {
        step: 0.8, // 数值越大速度滚动越快
        limitMoveNum: 5, // 开启无缝滚动的数据量
        hoverStop: true, // 是否启用鼠标hover控制
        direction: 1, // 方向 0 往下 1 往上 2向左 3向右
        openTouch: false, // 移动端开启touch滑动
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步停止等待时间(默认值1000ms)
        switchOffset: 30, // 左右切换按钮距离左右边界的边距(px)
        autoPlay: true, // 1.1.17版本前手动切换时候需要置为false
        switchSingleStep: 134, // 手动单步切换step值(px)
        switchDelay: 400, // 单步切换的动画时间(ms)
        switchDisabledClass: "disabled", // 不可以点击状态的switch按钮父元素的类名
        isSingleRemUnit: false, // singleHeight and singleWidth是否开启rem度量
      },
    };
  },
  computed: {
    options() {
      return Object.assign({}, this.baseOption, this.option);
    },
  },
  components: {
    vueScroll,
  },
};
</script>

<style lang="scss">
.auto-scroll {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
