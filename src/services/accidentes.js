import axios from "axios";
import url from "./url";

export async function postAccidente(data) {
  const response = await axios.post(`${url}/accidente/simulacion`, data);
  return response;
}

export async function postAccidentesMasivo(request) {
  const response = await axios.post(`${url}/accidente/masivo`, request);
  return response;
}