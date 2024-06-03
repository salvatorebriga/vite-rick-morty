import { reactive } from "vue";

export const store = reactive({
  info: {},
  results: [],
  apiUrl: "https://rickandmortyapi.com/api/character",
});
