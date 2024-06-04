import { reactive } from "vue";

export const store = reactive({
  info: {},
  results: [],

  name: "",
  status: "",

  apiInfo: {
    url: "https://rickandmortyapi.com/api",

    endpoints: {
      character: "/character",
    },
  },
});
