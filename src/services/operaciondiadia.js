import axios from "axios";
import url from "./url";

export default async function getPlanificacionDiaADia() {
  console.log(request);
  const response = await axios.post(`${url}/simulacionDD`);
  return response;
}
