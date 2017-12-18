<template>
  <div>
    <material-header></material-header>
     <div class="ui grid">
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
    </div>
    <!--<div class="ui grid">
        
        
    </div> -->
    <div class="ui sidebar inverted vertical menu visible">
      <br>
      <br>
      <br>
      <a class="item"><router-link to="/" >Tableau de board</router-link></a>
      <a class="item"><router-link to="/profile" >Profil</router-link></a>
      <a class="item"><router-link to="/wallet" >Portefeuille</router-link></a>
      <a class="item"><router-link to="/market" >Marché</router-link></a>
      <a class="item"><router-link to="/order" >Ordre</router-link></a>
      <a class="item"><router-link to="/history" >Mouvements</router-link></a>
      <a class="item"><router-link to="/orderInProgress" >Ordres en cours</router-link></a>
      <a class="item"><router-link to="/palmares" >Palmares</router-link></a>
      <a class="item"><router-link to="/news" >News</router-link></a>
      <a class="item"><router-link to="/login">Logout</router-link></a>
    </div>
    <div class="pusher">
      <div class="ui text container">
        <div class="ui one column grid">
          <div class="column">
              <material-content></material-content>
          </div>
        </div>
      </div>
      
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
