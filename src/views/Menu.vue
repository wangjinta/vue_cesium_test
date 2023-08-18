<template>
    <div class="flex menu">
        <router-link to="/">Menu</router-link> 
        <router-link to="/Home">原生Cesium调用</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/CesiumToolView">封装CesiumToolView调用</router-link>
    </div>
</template>
<script>
</script>
<style scoped>
a {
    color: #000000;
}

.menu {
    flex-direction: column;
}
</style>