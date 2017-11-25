<template>
  <footer id="footer">
    <div class="mui-container-fluid">
      <br>
      Made with ♥ by <a href="https://www.muicss.com">MUI</a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'material-footer',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #footer {
    height: 160px;
    margin-left: 0px;
    transition: margin-left 0.2s;
    background-color: #0288D1;
    color: #fff;
  }

  #footer a {
    color: #fff;
    text-decoration: underline;
  }
</style>
