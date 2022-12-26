import axios from "axios";
import url from "./url";

export async function getPedidos() {
  const response = await axios.get(`${url}/pedido`);
  return response;
}

export async function postPedido(pedido, idDestino, idCliente) {
  const response = await axios.post(`${url}/pedido/0/${idDestino}/${idCliente}`, 
    pedido);
  return response;
}

export async function postPedidosMasivo(request) {
  const response = await axios.post(`${url}/pedidoMasivo`, request);
  return response;
}
