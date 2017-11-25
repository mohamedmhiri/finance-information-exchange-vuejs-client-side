<template>
  <form>
    <mui-textfield type="text" label="Email address" floating></mui-textfield>
    <mui-textfield type="text" value="Value on load" label="Label" floating></mui-textfield>
    <mui-textfield type="textarea" value="Value on load" label="Textarea" floating></mui-textfield>
    <mui-btn style="raised">Submit</mui-btn>
  </form>
</template>

<script>
  export default {
    name: 'material-login',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
