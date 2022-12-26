import axios from "axios";
import url from "./url";

export default async function getCiudades() {
  const response = await axios.get(`${url}/ciudad`);
  return response;
}
