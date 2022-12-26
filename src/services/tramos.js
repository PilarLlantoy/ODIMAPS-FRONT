import axios from "axios";
import url from "./url";

export default async function getTramos() {
  const response = await axios.get(`${url}/tramo`);
  return response;
}
