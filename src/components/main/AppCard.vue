<script>
  export default {
    props: ["image", "name", "status", "species"],
  };
</script>

<template>
  <div class="card">
    <img :src="image" alt="ciaooooo" />
    <h3>{{ name }}</h3>
    <div>
      <p>{{ status }}</p>
      <p>{{ species }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    text-align: center;
    img {
      border-radius: 50%;
      margin-bottom: 25px;
    }
    h3 {
      margin-bottom: 50px;
    }
    div {
      margin-bottom: 20px;
    }
  }
</style>
