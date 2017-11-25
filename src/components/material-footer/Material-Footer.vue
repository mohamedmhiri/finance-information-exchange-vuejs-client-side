<template>
  <footer id="footer">
    <div class="mui-container-fluid">
      <br>
      Made by <a href="https://www.github.com/mohamedmhiri">Mohamed Mhiri</a> && <a href="https://github.com/nouhabahri">Nouha Bahri</a>
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
<style scoped>
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
