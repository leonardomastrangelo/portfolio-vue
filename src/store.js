import { reactive } from "vue";

export const store = reactive({
  apiBaseUrl: "http://localhost:8000/api/",
  imgPath: "http://localhost:8000/storage/",
  technologies: [],
});
