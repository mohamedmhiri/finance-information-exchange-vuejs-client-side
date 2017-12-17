<template>
  <div>
    <material-header></material-header>
    <div class="ui grid">
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
    </div>
    <div class="ui grid">
        <sidebar></sidebar>
        <material-content></material-content>
    </div>
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
