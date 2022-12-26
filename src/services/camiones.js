import axios from "axios";
import url from "./url";

export default async function getCamiones() {
  const response = await axios.get(`${url}/vehiculo`);
  return response;
}

export async function postCamion(vehiculo) {
  const response = await axios.post(`${url}/vehiculo`, vehiculo);
  return response;
}

export async function postCamionesMasivo(request) {
  const response = await axios.post(`${url}/vehiculo/masivo`, request);
  return response;
}
