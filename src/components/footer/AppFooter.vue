<script>
  import { store } from "../../store.js";
  export default {
    props: ["founded"],
    emits: ["prev", "next"],
    data() {
      return {
        store,
      };
    },
  };
</script>
<template>
  <div class="content">
    <div class="arrow" @click="$emit('prev')" v-show="this.store.page > 1">
      <i class="fas fa-angle-left"></i>
      <p>prev</p>
    </div>
    <p>Found {{ founded }} characters</p>
    <div
      class="arrow"
      @click="$emit('next')"
      v-show="this.store.page < this.store.info.pages"
    >
      <p>next</p>
      <i class="fas fa-angle-right"></i>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    .arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding: 5px;
      &:hover {
        cursor: pointer;
      }
      p {
        font-size: 15px;
        font-weight: 400;
      }
    }
    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>
