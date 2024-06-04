<script>
  export default {
    props: ["founded"],
  };
</script>
<template>
  <div>
    <p>Found {{ founded }} characters</p>
  </div>
</template>
<style lang="scss" scoped>
  div {
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>
