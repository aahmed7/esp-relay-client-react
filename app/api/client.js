import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.2.2:9010",
});

export default apiClient;
