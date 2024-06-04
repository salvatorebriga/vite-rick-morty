<script>
  export default {
    props: ["founded"],
  };
</script>
<template>
  <div>
    <i class="fas fa-angle-left"></i>
    <p>Found {{ founded }} characters</p>
    <i class="fas fa-angle-right"></i>
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
