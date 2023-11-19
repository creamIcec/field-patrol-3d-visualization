<script>
import { ak } from "./AkContainer";
import Button from './components/Button.vue';
import Header from './components/Header.vue';
import VideoCard from './components/VideoCard.vue';
import TrackingCard from './components/TrackingCard.vue';
import Popup from './components/Popup.vue';
import "./app/point_processor";
function loadExternalScript(src){
  return new Promise((resolve, reject) => {
        window.onLoaded = resolve;
        const scriptEl = document.createElement('script');
        scriptEl.type = 'text/javascript';
        scriptEl.src = src + "&callback=onLoaded";
        document.head.appendChild(scriptEl);
        scriptEl.onerror = reject;
    });
}
export default{
  components: {
    Button,
    Header,
    VideoCard,
    TrackingCard,
    Popup
  },
  beforeMount(){
    loadExternalScript('https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=' + ak);
    loadExternalScript('https://api.map.baidu.com/library/TrackAnimation/src/TrackAnimation_min.js');
  },
  mounted(){

  },
}
</script>

<template>
  <Header title="智能巡检实时3D监控平台"/>
  <div id="content">
    <div id="map-content"></div> <!--地图内容--->
    <div id="widget-content"> <!--非地图内容-->
      <div id="left-area">
        <Button id="navigator" action="back" icon="src/resources/back.svg"></Button>  <!--返回按钮-->
        <Button id="display-control" action="control path" icon="src/resources/path.svg"></Button>  <!--显示元素的控制按钮-->
        <Button id="menu-control" action="menu" icon="src/resources/menu.svg"></Button>  <!--展开菜单控制-->
        <Button id="timeline-control" action="timeline" icon="src/resources/timeline.svg" style="grid-row: 7;"></Button>  <!--时间线控制-->
      </div>
      <VideoCard/> <!--即时视频区域--->
      <TrackingCard/> <!--TODO: vue的自定义元素内容方法-->
      <Popup/> <!--展开菜单-->  <!--TODO: vue的显示/隐藏元素的操作方法-->
    </div>
  </div>
  <noscript>该应用程序需要使用Javascript,请允许Javascript运行。</noscript>
</template>
<link rel="stylesheet" href="@/resources/main.css"/>
<style scoped>
#content{
    width: 100%;
    height: 100%;
    position: fixed;
    /*border: 2px solid red;*/
}
#map-content{
    width: 100%;
    height: 100%;
}
#widget-content{
    width: 100%;
    height: calc(100% - 100px);
    position: fixed;
    top: 100px;
    z-index: 99;
    pointer-events: none;
}
#left-area{
    width: 90px;
    height: 80%;
    margin-top: 1%;
    margin-left: 1%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(8, 100px) calc(100% - 700px);
    justify-items: center;
    align-items: center;

    background: linear-gradient(135deg, var(--controller-color-start), var(--controller-color-end)),
                linear-gradient(270deg, var(--controller-color-end) 20%, var(--controller-color-start) 80%);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    box-shadow: 0px 8px 32px 0px rgba(0,0,0,0.37);
}
</style>
<style>
:root{
    --header-color-start: #04353f90;
    --header-color-end: #08155290;
    --controller-color-start: #2ab8d460;
    --controller-color-end: #21ad7a60;
    --night-font-color: #ffffff;
}
</style>