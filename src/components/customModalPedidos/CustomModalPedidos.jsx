import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';

import getCiudades from '../../services/ciudades';
import getClientes from '../../services/clientes';
import { postPedido } from '../../services/pedidos';

import { Title, CustomAlert } from '..';


const CustomModalPedidos = (props) => {
  const [ ciudades, setCiudades ] = useState([]);
  const [ clientes, setClientes ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const [ numPaquetesIngresado, setNumPaquetesIngresado ] = useState(1);
  const [ ciudadIngresada, setCiudadIngresada ] = useState('');
  const [ idCliente, setIdCliente ] = useState('');

  const [ openAlert, setOpenAlert ] = useState(false);
  const [ alertSeverity, setAlertSeverity ] = useState('warning');
  const [ alertTitle, setAlertTitle ] = useState('');
  const [ alertBody, setAlertBody ] = useState('');

  useEffect(() => {
    obtenerCiudadesDeServicio();
    obtenerClientesDeServicio();
  }, []) //Runs only on the first render

  // llamada al servicio postPedido
  const handleSave = async () => {
    setLoading(true);
    try{

      // create date
      const d1 = new Date();
      //console.log(d1);

      // converting to number
      const codigo = d1.getTime();

      // preparando los datos
      const datos = {
        "codigo": codigo.toString(),
        "numPaquetes": +numPaquetesIngresado,
      }

      const response = await postPedido(datos, ciudadIngresada, idCliente);

      //console.log(response);
      props.onClose(0);
    }
    catch (error) {
      setAlertSeverity('error')
      setAlertTitle('Error al registrar el pedido');
      setAlertBody(error.message);

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
    setLoading(false);
  }

  const obtenerCiudadesDeServicio = async () => {
    const response = await getCiudades();
    setCiudades(response.data);
  }

  const obtenerClientesDeServicio = async () => {
    const response = await getClientes();
    setClientes(response.data);
  }

  const handlePaquetesChange = (e) => {
    setNumPaquetesIngresado(e.target.value);
  }

  const handleCiudadChange = (e) => {
    setCiudadIngresada(e.target.value);
  }

  const handleClienteChange = (e) => {
    setIdCliente(e.target.value);
  }

  const orderCriteria = (a, b) => {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
  }

  return (
    <Box>
      <Dialog 
        open={props.open} 
        onClose={props.onClose} 
        PaperProps={{ sx: { width: "50rem" } }}>

        <DialogTitle>
          <Title text={'Nuevo Pedido'}></Title>
        </DialogTitle>
        
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="outlined-required"
            label="Número de paquetes"
            type="number"
            fullWidth
            variant="outlined"
            value={numPaquetesIngresado}
            onChange={handlePaquetesChange}
            InputProps={{ inputProps: { min: "1", step: "1" } }}
          />
          <FormControl required fullWidth sx={{ my: 1 }}>
            <InputLabel>Ciudad de destino</InputLabel>
            <Select
              margin="dense"
              id="select"
              label="Ciudad de destino"
              fullWidth
              value={ciudadIngresada}
              onChange={handleCiudadChange}
            >
              {ciudades.sort(orderCriteria).map((ciudad, index) => {
                return (
                <MenuItem key={index} value={ciudad.id}>{ciudad.nombre}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl required fullWidth sx={{ my: 1 }}>
            <InputLabel>Cliente</InputLabel>
            <Select
              margin="dense"
              id="select"
              label="Cliente"
              fullWidth
              value={idCliente}
              onChange={handleClienteChange}
            >
              {clientes.map((cliente, index) => {
                return (
                <MenuItem key={index} value={cliente.id}>{cliente.ruc}</MenuItem>
                );
              })}
            </Select> 
          </FormControl>
        </DialogContent>
        
        <Box sx={{ p:'1rem', display: 'flex', justifyContent: 'space-between' }}>
          <Button
            size="large" 
            startIcon={<CancelIcon />} 
            onClick={props.onClose}
            >
            Cancelar
          </Button>
          <LoadingButton
            size="large" 
            loading={loading}
            loadingPosition="start"
            startIcon={<CheckIcon />}
            onClick={handleSave}
          >
            Registrar
          </LoadingButton>
        </Box>

        <Box sx={{ p: '0.5rem' }}>
          <CustomAlert 
            open={openAlert} 
            severity={alertSeverity} 
            title={alertTitle}
            body={alertBody}
          />
        </Box>

      </Dialog>
    </Box>
  );
}

export default CustomModalPedidos;