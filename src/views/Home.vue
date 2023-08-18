<template>
  <div id="sceneViewer" class="main-container">
    <!-- <SceneViewer/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import SceneViewer from '@/components/SceneViewer.vue';
import * as Cesium from 'cesium/Cesium'
// 引用cesium style
require('cesium/Widgets/widgets.css')
export default {
  name: 'Home',
  components: {
    // SceneViewer,
  },
  mounted () {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwOWRlNDdiOC01ZGRlLTQxYjUtODRkZS0wZDMwYzM2ZGJhYzUiLCJpZCI6MTYwOTUyLCJpYXQiOjE2OTIyNTc2NDB9.s3DSte-4kJ8_OBU5Ol-xGWHpRqkeP1ai6V_qE7DpXYg'
    const viewer = new Cesium.Viewer('sceneViewer', {
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      animation: false,
      timeline: false,
      fullscreenButton: false
    })
    return viewer
  }
}
</script>

<style scoped lang="scss">
.main-container {
  height: 100%;
}
</style>
