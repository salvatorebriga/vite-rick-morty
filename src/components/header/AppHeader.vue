<script>
  export default {};
</script>

<template>
  <header>
    <h1>Rick and Morty App</h1>
  </header>
</template>

<style lang="scss" scoped>
  header {
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    h1 {
      font-size: 50px;
    }
  }

  @media screen and (max-width: 440px) {
    header {
      h1 {
        font-size: 40px;
      }
    }
  }
</style>
