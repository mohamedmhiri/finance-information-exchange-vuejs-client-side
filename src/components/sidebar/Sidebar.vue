<template>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Finance PWA</span>
    <nav class="mdl-navigation">
      <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
      <router-link class="mdl-navigation__link" to="/post" @click.native="hideMenu">Post a picture</router-link>
    </nav>
  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped>

</style>
