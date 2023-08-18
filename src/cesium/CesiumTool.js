//cesiumclass/base.js
import * as Cesium from 'cesium/Cesium';
const cesiumConfig = {
  infoBox: false,//取消沙盒
  geocoder: false,//控制右上角第一个位置的查找工具，
  homeButton: false,//控制右上角第二个位置的home图标
  sceneModePicker: false,//控制右上角第三个位置的选择视角模式，2d，3d
  baseLayerPicker: false,//控制右上角第四个位置的图层选择器
  navigationHelpButton: false,//控制右上角第五个位置的导航帮助按钮
  animation: false,//控制左下角的动画器件
  timeline: false,//控制下方时间线
  fullscreenButton: false,//右下角全屏按钮
}
class CesiumView {
  viewer = ''
  constructor(cesiumContainerId,option) {
    this.cesiumContainerId = cesiumContainerId;
    this.option = option;
  }
  async init() {
    Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwOWRlNDdiOC01ZGRlLTQxYjUtODRkZS0wZDMwYzM2ZGJhYzUiLCJpZCI6MTYwOTUyLCJpYXQiOjE2OTIyNTc2NDB9.s3DSte-4kJ8_OBU5Ol-xGWHpRqkeP1ai6V_qE7DpXYg"
    if (this.option == null || JSON.stringify(this.option) === '{}') {
      this.option = cesiumConfig;
    }
    this.viewer = new Cesium.Viewer(this.cesiumContainerId, this.option)
    this.viewer._cesiumWidget._creditContainer.style.display="none"
  }
  async fly() {
    this.viewer.camera.flyTo({
      //飞往目的地的经度、纬度、高度
      destination: Cesium.Cartesian3.fromDegrees(111, 111, 111),
      //完成后更改相机的方向，航向、俯仰、和横滚分别相对于东、北和上
      orientation: {
        hedaing: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-60.0),
        roll: 0.0,
      }
    })
  }
}
export default CesiumView;