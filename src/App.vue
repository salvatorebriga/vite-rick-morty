<script>
  import AppHeader from "./components/header/AppHeader.vue";
  import AppNav from "./components/nav/AppNav.vue";
  import AppMain from "./components/main/AppMain.vue";
  import AppFooter from "./components/footer/AppFooter.vue";
  import axios from "axios";
  import { store } from "./store";
  export default {
    components: {
      AppHeader,
      AppNav,
      AppMain,
      AppFooter,
    },
    data() {
      return {
        store,
        loading: true,
      };
    },
    created() {
      console.log("chiama api");

      //funziona ma la chiamata è troppo veloce quindi ho messo mezzo secondo di timeout
      setTimeout(() => {
        axios
          .get(this.store.apiUrl)
          .then((response) => {
            this.store.info = response.data.info;
            this.store.results = response.data.results;
            this.loading = false;
          })
          .catch((error) => {
            console.error("Error fetching data", error);
            this.loading = false;
          });
      }, 500);
    },
  };
</script>

<template>
  <AppHeader />
  <AppNav />
  <div v-if="loading">
    <div class="loadingScreen">
      <h2>Loading...</h2>
    </div>
  </div>
  <div v-else>
    <AppMain />
    <AppFooter :length="store.results.length" />
  </div>
</template>

<style lang="scss" scoped>
  .loadingScreen {
    padding-top: 150px;
    font-size: 30px;
    display: flex;
    justify-content: center;
  }
</style>
