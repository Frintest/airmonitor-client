import axios from "axios";

const instance = axios.create({
   baseURL: "http://airmonitor.servermc.ru:8080/",
});

export const API = {
   getState() {
      return instance.get("/note").then((response) => response.data);
   },
};
