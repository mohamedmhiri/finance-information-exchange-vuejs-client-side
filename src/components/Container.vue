<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header demo-layout-transparent">
    <sidebar></sidebar>
    <material-header></material-header>
    <material-content></material-content>
    <material-footer></material-footer>
  </div>
</template>
<script>
  import MaterialHeader from './header/Material-Header.vue'
  import Sidebar from './sidebar/Sidebar.vue'
  import MaterialContent from './content/Material-Content.vue'
  import MaterialFooter from './material-footer/Material-Footer.vue'
  export default {
    components: {MaterialHeader, Sidebar, MaterialContent, MaterialFooter}
  }
</script>
<style scoped>

</style>
