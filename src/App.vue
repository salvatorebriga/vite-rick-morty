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
      };
    },
    created() {
      console.log("chiama api");

      axios.get(this.store.apiUrl).then((response) => {
        this.store.info = response.data.info;
        this.store.results = response.data.results;
      });
    },
  };
</script>

<template>
  <AppHeader />
  <AppNav />
  <AppMain />
  <AppFooter :length="store.results.length" />
</template>

<style lang="scss" scoped></style>
