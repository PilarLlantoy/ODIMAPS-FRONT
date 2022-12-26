import axios from "axios";
import url from "./url";

export async function getPlanificacion7Dias(request) {
  const response = await axios.post(`${url}/simulacion7`, request);
  return response;
}

// Operaciones dia a dia (rutas de BD):
export async function getPlanificacionRutas() { 
  const response = await axios.get(`${url}/simulacionDD/rutas`);
  return response;
}

// Operaciones dia a dia (ejecucion del algoritmo para generacion de la planificacion):
export async function getPlanificacionDiaADia() { 
  const response = await axios.get(`${url}/simulacionDD/simulacion`);
  return response;
}