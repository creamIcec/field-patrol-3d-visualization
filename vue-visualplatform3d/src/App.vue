<script>
import Button from './components/Button.vue';
import ControlPad from "./components/ControlPad.vue";
import Header from './components/Header.vue';
import VideoCard from './components/VideoCard.vue';
import TrackingCard from './components/TrackingCard.vue';
import Popup from './components/Popup.vue';
import Switcher from "./components/Switcher.vue";
import { ak } from "./AkContainer";
import { MapHandler } from "./app/map_handler";
import "./lib/svg-inject";
function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    window.onLoaded = resolve;
    const scriptEl = document.createElement('script');
    scriptEl.type = 'text/javascript';
    scriptEl.src = src + "&callback=onLoaded";
    document.head.appendChild(scriptEl);
    scriptEl.onerror = reject;
  });
}
export default {
  components: {
    Button,
    Header,
    VideoCard,
    TrackingCard,
    Popup,
    ControlPad,
    Switcher
  },
  beforeMount() {
    loadExternalScript('https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=' + ak);
    loadExternalScript('https://api.map.baidu.com/library/TrackAnimation/src/TrackAnimation_min.js');
  },
  mounted() {
    const controlPad = this.$refs.controlPad;
    controlPad.toggle(0);
    this.updateTime();
    const leftArea = this.$refs.leftArea;
    leftArea.setAttribute("theme", this.dayNightTheme);
    document.documentElement.setAttribute("theme", "day");
    const header = this.$refs.header;
    header.theme = 'day';
    this.mapHandler.init();
  },
  data() {
    return {
      currentTime: '',
      dayNightTheme: 'day',
      mapHandler: new MapHandler()
    }
  },
  methods: {
    updateTime() {
      setInterval(() => {
        this.currentTime = new Date().toLocaleString('zh-CN');
      }, 1000);
    }
  }
}
</script>

<template>
  <Header ref="header" :mapHandler="this.mapHandler" :mainContent="this.currentTime" subContent="天气" />
  <div id="content">
    <div id="map-content"></div> <!--地图内容--->
    <div id="widget-content"> <!--非地图内容-->
      <div id="left-area" ref="leftArea" class="neumorphism">
        <div id="left-area-container">
          <Button id="navigator" pos="left" action="back" icon="src/resources/back.svg" :svgInject="true"></Button> <!--返回按钮-->
          <Button id="display-control" pos="left" action="control path" icon="src/resources/path.svg" :svgInject="true"></Button>
          <!--显示元素的控制按钮-->
          <Button id="menu-control" pos="left" action="menu" icon="src/resources/menu.svg" :svgInject="true"></Button> <!--展开菜单控制-->
          <Button id="timeline-control" pos="left" action="timeline" icon="src/resources/timeline.svg" :svgInject="true"></Button>
          <!--时间线控制-->
        </div>
        <ControlPad ref="controlPad" id="control-pad" type="vertical" icon1="src/resources/drone.svg"
            icon2="src/resources/car.svg" alt1="无人机" alt2="小车" :svgInject="true"></ControlPad>
      </div>
      <VideoCard /> <!--即时视频区域--->
      <TrackingCard /> <!--TODO: vue的自定义元素内容方法-->
      <Popup /> <!--展开菜单--> <!--TODO: vue的显示/隐藏元素的操作方法-->
    </div>
  </div>
  <noscript>该应用程序需要使用Javascript,请允许Javascript运行。</noscript>
</template>
<link rel="stylesheet" href="@/resources/main.css"/>
<style scoped>
#navigator {
  grid-row: 1;
}

#display-control {
  grid-row: 2;
}

#menu-control {
  grid-row: 3;
}

#timeline-control {
  grid-row: 6;
}

#content {
  width: 100%;
  height: 100%;
  position: fixed;
  /*border: 2px solid red;*/
}

#map-content {
  width: 100%;
  height: 100%;
}

#widget-content {
  width: 100%;
  height: calc(100% - 100px);
  position: fixed;
  top: 100px;
  z-index: 99;
  pointer-events: none;
}

#left-area {
  width: var(--left-area-button-size);
  height: 60%;
  padding: var(--left-area-padding);
  position: relative;
  margin-top: 1%;
  margin-left: 1%;
  justify-items: center;
  align-items: center;
  background: linear-gradient(135deg, var(--controller-color-start), var(--controller-color-end)),
              linear-gradient(270deg, var(--controller-color-end) 20%, var(--controller-color-start) 80%);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  pointer-events: all;
}

#left-area-container{
  width: calc(var(--left-area-button-size) - 2 * var(--left-area-padding));
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(8, calc(var(--left-area-button-size) - 2 * var(--left-area-padding))) calc(100% - 700px);
  row-gap: 5%;
}

#control-pad {
  position: absolute;
  bottom: -200px;
  left: 1px;
}
</style>
<style>
* {
  font-family: "思源黑体 CN", "Helvatica", "Microsoft YaHei UI"
}

:root {
  /*Night mode color definition */
  --night-header-color-start: #04353f;
  --night-header-color-end: #081552;
  --night-card-color-start: #04353f;
  --night-card-color-end: #081552;
  --night-controller-color-start: #2c2f3480;
  --night-controller-color-end: #2c2f3480;
  --night-button-color: #ffffff00;
  --night-shadow-start: #cacccd30;
  --night-shadow-end: #06070930;
  --night-button-icon-color: #A7B8C4;
  --night-font-color: #ffffff;
  /*Day mode color definition */
  --day-header-color-start: #EBEBF2; /*#FFF3DA90;*/
  --day-header-color-end: #DFF7F2; /*#fddcb690;*/
  --day-card-color-start: #EBEBF2;
  --day-card-color-end: #DFF7F2;
  --day-controller-color-start: #ECF0F380; /*#bdaaf060;*/
  --day-controller-color-end: #ECF0F380; /*#ab9aeb60;*/
  --day-button-color: #ffffff00; /*#ccb6ecaa;*/
  --day-shadow-start: #FFFFFFAA;/*#ecbcf1ee;*/
  --day-shadow-end: #758EA1AA; /*#bb6ec0ee;*/
  --day-button-icon-color: #263540;
  --day-font-color: #000000;

  --left-area-button-size: 70px;
  --left-area-padding: 10px;
}

:root[theme='day']{
  --header-color-start: var(--day-header-color-start);
  --header-color-end: var(--day-header-color-end);
  --card-color-start: var(--day-card-color-start);
  --card-color-end: var(--day-card-color-end);
  --controller-color-start: var(--day-controller-color-start);
  --controller-color-end: var(--day-controller-color-end);
  --button-color: var(--day-button-color);
  --shadow-start: var(--day-shadow-start);
  --shadow-end: var(--day-shadow-end);
  --font-color: var(--day-font-color);
  --button-icon-color: var(--day-button-icon-color);
}

:root[theme='night']{
  --header-color-start: var(--night-header-color-start);
  --header-color-end: var(--night-header-color-end);
  --card-color-start: var(--night-card-color-start);
  --card-color-end: var(--night-card-color-end);
  --controller-color-start: var(--night-controller-color-start);
  --controller-color-end: var(--night-controller-color-end);
  --button-color: var(--night-button-color);
  --shadow-start: var(--night-shadow-start);
  --shadow-end: var(--night-shadow-end);
  --font-color: var(--night-font-color);
  --button-icon-color: var(--night-button-icon-color);
}

*{
  box-sizing: border-box;
}

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.neumorphism{
  box-shadow: -3px -3px 3px -1px var(--shadow-start),
              3px 3px 3px -1px var(--shadow-end);
}

.svg-injected{
    fill: var(--button-icon-color);
}

</style>