<template>
  <div id="content-wrapper">
    <div class="mui--appbar-height"></div>
    <div class="mui-container-fluid">
      <br>
      <div class="mui-panel">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'material-content'
  }
</script>
<style scoped>
  #content-wrapper {
    min-height: 100%;
    overflow-x: hidden;
    margin-left: 0px;
    transition: margin-left 0.2s;

    /* sticky bottom */
    margin-bottom: -160px;
    padding-bottom: 160px;
  }

  @media (min-width: 768px) {
    #content-wrapper {
      margin-left: 200px;
    }
    body.hide-sidedrawer #content-wrapper {
      margin-left: 0;
    }
  }
</style>
