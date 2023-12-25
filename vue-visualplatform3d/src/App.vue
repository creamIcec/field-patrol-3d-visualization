<script>
import Button from './components/Button.vue';
import ControlPad from "./components/ControlPad.vue";
import Header from './components/Header.vue';
import VideoCard from './components/VideoCard.vue';
import TrackingCard from './components/TrackingCard.vue';
import Popup from './components/Popup.vue';
import Switcher from "./components/Switcher.vue";
import NotificationCard from './components/NotificationCard.vue';
import "./lib/svg-inject";
import { WidgetThemeManager } from "./app/widgetThemeManager";
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
    Switcher,
    NotificationCard
  },
  beforeMount() {
    //loadExternalScript('https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=' + ak);
    //loadExternalScript('https://api.map.baidu.com/library/TrackAnimation/src/TrackAnimation_min.js');
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
  },
  data() {
    return {
      currentTime: '',
      dayNightTheme: 'day',
      widgetThemeManager: new WidgetThemeManager()
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
  <Header ref="header" :widgetThemeManager="this.widgetThemeManager" :mainContent="this.currentTime" subContent="室内温度 室内湿度" />
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
      <NotificationCard class="notification-card" id="notification-card-test-1" category="warn" content="在您不在线的时候，我们检测到了2处可疑高温" instruct="点击此对话框查看详情" />  <!--TODO: unique id-->
      <NotificationCard class="notification-card" id="notification-card-test-2" category="alert" content="无法连接到监控设备:设备号001" instruct="点击此对话框查看详情" />  <!--TODO: unique id-->
      <NotificationCard class="notification-card" id="notification-card-test-3" category="info" content="已计划定时重启, 下次重启在2023-12-26 23:59:59" instruct="点击此对话框查看详情" />  <!--TODO: unique id-->
      <!--<VideoCard id="video-card"/>--> <!--即时视频区域--->
      <TrackingCard /> <!--TODO: vue的自定义元素内容方法-->
      <Popup /> <!--展开菜单--> <!--TODO: vue的显示/隐藏元素的操作方法-->
    </div>
  </div>
  <noscript>该应用程序需要使用Javascript,请允许Javascript运行。</noscript>
</template>
<link rel="stylesheet" href="@/resources/main.css"/>
<style scoped>
.notification-card{
  position: absolute;
  right: var(--right-area-pos);
  
  width: 300px;
  height: 85px;
  cursor: pointer;
  pointer-events: all;
}

#notification-card-test-1{
  top: 10px;
}

#notification-card-test-2{
  top: calc(10px + 85px);
  margin-top: 10px;
}

#notification-card-test-3{
  top: calc(10px + 85px + 10px + 85px);
  margin-top: 10px;
}

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
  grid-row: 7;
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
  grid-template-rows: repeat(6, calc(var(--left-area-button-size) - 2 * var(--left-area-padding))) calc(100% - 700px);
  row-gap: 5%;
}

#control-pad {
  position: absolute;
  bottom: -200px;
  left: 1px;
}

#video-card{
  position: absolute;
  right: var(--right-area-pos);
  top: 105px;
  margin-top: 10px;
  width: 300px;
  height: 300px;
}
</style>
<style>
* {
  font-family: "思源黑体 CN", "Helvatica", "Microsoft YaHei UI"
}

:root {
  --night-bkg-color: #04353f;
  /*Night mode color definition */
  --night-header-color-start: #04353f;
  --night-header-color-end: #081552;
  --night-card-color-start: #04353f;
  --night-card-color-end: #081552;
  --night-controller-color-start: #2c2f3480;
  --night-controller-color-end: #2c2f3480;
  --night-button-color: #ffffff00;
  --night-shadow-start: #cacccdA0;
  --night-shadow-end: #06070970;
  --night-button-icon-color: #A7B8C4;
  --night-font-color: #ffffff;
  --night-tip-font-color: #fffccc;
  --night-warn-card-color: #E6A622;
  --night-alert-card-color: #E64F24;
  --night-info-card-color: #2591F0;
  
  /*Day mode color definition */
  --day-bkg-color: #EBEBF2;
  --day-header-color-start: #EBEBF2; /*#FFF3DA90;*/
  --day-header-color-end: #DFF7F2; /*#fddcb690;*/
  --day-card-color-start: #EBEBF2;
  --day-card-color-end: #DFF7F2;
  --day-controller-color-start: #ECF0F380; /*#bdaaf060;*/
  --day-controller-color-end: #ECF0F380; /*#ab9aeb60;*/
  --day-button-color: #ffffff00; /*#ccb6ecaa;*/
  --day-shadow-start: #FFFFFFA0;/*#ecbcf1ee;*/
  --day-shadow-end: #758EA180; /*#bb6ec0ee;*/
  --day-button-icon-color: #263540;
  --day-font-color: #383531;
  --day-tip-font-color: #89837A;
  --day-warn-card-color: #E6D623;
  --day-alert-card-color: #d25239;
  --day-info-card-color: #2FBDEB;
  

  --left-area-button-size: 70px;
  --left-area-padding: 10px;

  --header-top-pos: 25px;
  --right-area-pos: 20px;

  --top-button-size: 54px;
}

:root[theme='day']{
  --bkg-color: var(--day-bkg-color);
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
  --tip-font-color: var(--day-tip-font-color);
  --button-icon-color: var(--day-button-icon-color);
  --warn-card-color: var(--day-warn-card-color);
  --alert-card-color: var(--day-alert-card-color);
  --info-card-color: var(--day-info-card-color);
}

:root[theme='night']{
  --bkg-color: var(--night-bkg-color);
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
  --tip-font-color: var(--night-tip-font-color);
  --button-icon-color: var(--night-button-icon-color);
  --warn-card-color: var(--night-warn-card-color);
  --alert-card-color: var(--night-alert-card-color);
  --info-card-color: var(--night-info-card-color);
}

*{
  box-sizing: border-box;
}

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bkg-color);
}

.neumorphism{
  box-shadow: -3px -3px 3px -1px var(--shadow-start),
              3px 3px 3px -1px var(--shadow-end);
}

.svg-injected{
    fill: var(--button-icon-color);
}

</style>