<template>
  <footer id="footer">
    <div class="mui-container-fluid">
      <br>
      Made by <a href="https://github.com/mohamedmhiri">Mohamed Mhiri</a> && <a href="https://github.com/nouhabahri">Nouha Bahri</a>
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
    bottom:0;
  }

  #footer a {
    color: #fff;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    #footer {
      margin-left: 200px;

    }
    body.hide-sidedrawer #footer {
      margin-left: 0;
    }
  }
</style>
