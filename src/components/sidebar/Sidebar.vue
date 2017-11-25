<template>
  <div id="sidedrawer" class="mui--no-user-select">
    <div id="sidedrawer-brand" class="mui--appbar-line-height">
      <span class="mui--text-title">PWA Exchange</span>
    </div>
    <div class="mui-divider"></div>
    <ul>
      <li>
        <strong><router-link to="/" >Home</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/market" >Marché</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/" >Home</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/" >Home</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/" >Home</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/" >Home</router-link></strong>
      </li>

    </ul>
  </div>
</template>
<script>
  export default {
    name: 'sidebar'
  }
</script>
<style scoped>
  /**
   * Side drawer CSS
   */
  #sidedrawer {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 200px;
    left: -200px;
    overflow: auto;
    z-index: 2;
    background-color: #fff;
    transition: transform 0.2s;
  }

  #sidedrawer-brand {
    padding-left: 20px;
  }



  #sidedrawer ul {
    list-style: none;
  }

  #sidedrawer > ul {
    padding-left: 0px;
  }

  #sidedrawer > ul > li:first-child {
    padding-top: 15px;
  }

  #sidedrawer strong {
    display: block;
    padding: 15px 22px;
    cursor: pointer;
  }

  #sidedrawer strong:hover {
    background-color: #E0E0E0;
  }

  #sidedrawer strong + ul > li {
    padding: 6px 0px;
  }

  /**
       * Toggle Side drawer
   */
  #sidedrawer.active {
    transform: translate(200px);
  }

  @media (min-width: 768px) {
    #sidedrawer {
      transform: translate(200px);
    }
    body.hide-sidedrawer #sidedrawer {
      transform: translate(0px);
    }
  }
</style>
