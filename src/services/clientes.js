import axios from "axios";
import url from "./url";

export default async function getClientes() {
  const response = await axios.get(`${url}/cliente`);
  return response;
}
