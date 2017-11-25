<template>
  <header id="header">
    <div class="mui-appbar mui--appbar-line-height">
      <div class="mui-container-fluid">
        <a class="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
        <a class="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a>
        <span class="mui--text-title mui--visible-xs-inline-block">PWA Exchange</span>
      </div>
    </div>
  </header>

</template>
<script>
  export default {
    name: 'material-header'
  }
</script>
<style scoped>
  #header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    transition: left 0.2s;
  }
  /**
       * Header CSS
       */
  .sidedrawer-toggle {
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    line-height: 20px;
    margin-right: 10px;
  }

  .sidedrawer-toggle:hover {
    color: #fff;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    #header {
      left: 200px;
    }
    body.hide-sidedrawer #header {
      left: 0;
    }
  }
</style>
