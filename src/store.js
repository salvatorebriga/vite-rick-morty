import { reactive } from "vue";

export const store = reactive({
  info: {},
  results: [],

  name: "",
  status: "",
  page: 1,

  apiInfo: {
    url: "https://rickandmortyapi.com/api",

    endpoints: {
      character: "/character",
    },
  },
});
