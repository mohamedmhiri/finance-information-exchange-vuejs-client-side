<template>
  <div id="sidedrawer" class="mui--no-user-select">
    <div id="sidedrawer-brand" class="mui--appbar-line-height">
      <span class="mui--text-title">Brand.io</span>
    </div>
    <div class="mui-divider"></div>
    <ul>
      <li>
        <strong>Category 1</strong>
        <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
        </ul>
      </li>
      <li>
        <strong>Category 2</strong>
        <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
        </ul>
      </li>
      <li>
        <strong>Category 3</strong>
        <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
        </ul>
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
</style>
