import axios from "axios";
import url from "./url";

export async function getBloqueos() {
  const response = await axios.get(`${url}/bloqueo`);
  return response;
}

export async function postBloqueo(datos, idTramo) {
  const response = await axios.post(`${url}/bloqueo/${idTramo}`, datos);
  return response;
}

export async function postBloqueosMasivo(request) {
  const response = await axios.post(`${url}/bloqueo/masivo`, request);
  return response;
}

export async function parseBloqueos(lineas) {
  const response = await axios.post(`${url}/bloqueo/leer`, lineas);
  return response;
}