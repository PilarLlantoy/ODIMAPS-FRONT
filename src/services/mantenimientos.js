import axios from "axios";
import url from "./url";

export default async function getMantenimientos() {
  const response = await axios.get(`${url}/mantenimiento`);
  return response;
}

export async function postMantenimiento(datos, idVehiculo) {
  const response = await axios.post(`${url}/mantenimiento/${idVehiculo}`, datos);
  return response;
}

export async function postMantenimientosMasivo(request) {
  const response = await axios.post(`${url}/mantenimiento/masivo`, request);
  return response;
}