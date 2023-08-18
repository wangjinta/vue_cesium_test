<template>
  <div id="sceneViewer" class="main-container">

  </div>
</template>
<script>
import CesiumView from '../cesium/CesiumTool';
// 引用cesium style
require('cesium/Widgets/widgets.css')
export default {
  mounted() {
    const cesiumView = new CesiumView('sceneViewer', {
      infoBox: false,//取消沙盒
      geocoder: true,//控制右上角第一个位置的查找工具，
      homeButton: true,//控制右上角第二个位置的home图标
      sceneModePicker: false,//控制右上角第三个位置的选择视角模式，2d，3d
      baseLayerPicker: false,//控制右上角第四个位置的图层选择器
      navigationHelpButton: false,//控制右上角第五个位置的导航帮助按钮
      animation: false,//控制左下角的动画器件
      timeline: false,//控制下方时间线
      fullscreenButton: true,//右下角全屏按钮
    });
    cesiumView.init();
  },
}
</script>
<style scoped lang="scss">
.main-container {
  height: 100%;
}
</style>