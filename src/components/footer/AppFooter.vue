<script>
  export default {
    props: ["length"],
  };
</script>
<template>
  <div>
    <p>Found {{ length }} characters</p>
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
