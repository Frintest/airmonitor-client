import axios from "axios";

const instance = axios.create({
   baseURL: "https://airmonitor.servermc.ru",
});

export const API = {
   getState() {
      return instance.get("/note").then((response) => response.data);
   },
};
