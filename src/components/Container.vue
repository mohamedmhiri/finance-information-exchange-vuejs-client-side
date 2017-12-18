<template>
  <div>
    <material-header></material-header>
    <div class="ui grid">
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
    </div>
    <div class="ui grid">
      <div class="four wide column">
        <div class="ui secondary vertical menu">
          <sidebar></sidebar>
        </div>
      </div>
      <div class="eleven wide stretched column">
        <div class="ui segment">
          <material-content></material-content>
        </div>
      </div>
    </div>
    
    <!-- <div class="ui grid">
      <div class="four wide column">
        <div class="ui vertical pointing menu">
          <sidebar></sidebar>
        </div>
      </div>
      <div class="twelve wide column">
        <div class="ui text container">
        <div class="ui one column grid">
          <div class="column">
              
          </div>
        </div>
      </div>
      </div>
    </div> -->
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
