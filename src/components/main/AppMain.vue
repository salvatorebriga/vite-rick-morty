<script>
  import AppCard from "./AppCard.vue";
  import { store } from "../../store.js";
  export default {
    components: {
      AppCard,
    },
    data() {
      return {
        store,
      };
    },
  };
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col" v-for="cards in store.results">
        <AppCard
          :image="cards.image"
          :name="cards.name"
          :status="cards.status"
          :species="cards.species"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding-top: 50px;
    max-width: 1640px;
    margin: 0 auto;
    .row {
      display: flex;
      flex-wrap: wrap;

      .col {
        margin: 20px;
        width: calc(100% / 4 - 40px);
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .col {
      width: calc(100% / 3 - 40px);
    }
  }
  @media screen and (max-width: 720px) {
    .col {
      width: calc(100% / 2 - 40px);
    }
  }

  @media screen and (max-width: 520px) {
    .col {
      width: 100%;
    }
  }
</style>
