<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header demo-layout-transparent">
    <material-header></material-header>
    <sidebar></sidebar>
    <material-content></material-content>
  </div>
</template>
<script>
  import MaterialHeader from './header/Material-Header.vue'
  import Sidebar from './sidebar/Sidebar.vue'
  import MaterialContent from './content/Material-Content.vue'
  export default {
    components: {MaterialHeader, Sidebar, MaterialContent}
  }
</script>
<style scoped>
  .demo-layout-transparent {
    background: url('../../static/img/transparent.jpg') center / cover;
  }
  .demo-layout-transparent .mdl-layout__header,
  .demo-layout-transparent .mdl-layout__drawer-button {
    /* This background is dark, so we set text to white. Use 87% black instead if
       your background is light. */
    color: white;
  }
</style>
