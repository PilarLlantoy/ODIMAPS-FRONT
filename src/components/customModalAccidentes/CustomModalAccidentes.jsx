//import React, { useState, useEffect } from 'react';
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

import { Title } from '..';
import getTramos from '../../services/tramos';
import getCamiones from '../../services/camiones';
import { postAccidente } from '../../services/accidentes';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const CustomModalAccidentes = (props) => {
  const [camiones, setCamiones] = useState([]);
  const [loading, setLoading] = useState(false);

  const [tramos, setTramos] = useState([]);

  const [tramoIngresado, setTramoIngresado] = useState([]);
  const [camionIngresado, setCamionIngresado] = useState([]);
  const [fechaIngresada, setFechaIngresada] = React.useState(new Date());
  const [tipoIngresado, setTipoIngresado] = React.useState(new Date());

  const [loading2, setLoading2] = useState(false);

  // llamada al servicio postPedido
  const handleSave = async () => {
    try {

      // preparando los datos
      const datos = {
        "fechaAccidente": fechaIngresada,
        "tipo": +tipoIngresado,
      }

      console.log('Datos enviados: ');
      console.log(datos);
      console.log(tramoIngresado);
      console.log(camionIngresado);

      const response = await postAccidente(datos, tramoIngresado, camionIngresado);

      console.log(response);
      handleClose();
      setLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }

  const obtenerTramosDeServicio = async () => {
    setLoading2(true);
    //console.log("t", props);
    const response = await getTramos();
    //setTramos(response.data);
    setTramos(props.rows);
    setLoading2(false);
  }


  const obtenerCamionesDeServicio = async () => {
    const response = await getCamiones();
    setCamiones(response.data);
  }


  useEffect(() => {
    obtenerCamionesDeServicio();
    obtenerTramosDeServicio();
  }, []) //Runs only on the first render


  const handleClose = () => {
    props.onClose(false);
  };




  const handleTramoIngresadoChange = (e) => {
    setTramoIngresado(e.target.value);
  }
  const handleTipoIngresadoChange = (e) => {
    setTipoIngresado(e.target.value);
  }
  const handleCamionIngresadoChange = (event: SelectChangeEvent) => {
    setCamionIngresado(event.target.value);
  };

  if (loading2) {
    return (

      <Box>
        <Dialog
          open={props.open}
          onClose={handleClose}
          PaperProps={{ sx: { width: "50rem", height: "30rem" } }}>

          <div className="container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '40vh'
            }}>
            <div className="abs-center">
              <div style={{ alignItems: 'center' }}>
                <Spinner color='dark' style={{ alignItems: 'center' }} loading={loading2}></Spinner>
              </div>
            </div>
          </div>

        </Dialog>
      </Box>


    )
  }


  return (
    <Box>
      <Dialog
        open={props.open}
        onClose={handleClose}
        PaperProps={{ sx: { width: "50rem", height: "30rem" } }}>

        <DialogTitle>
          <Title text={'Nuevo Accidente'}></Title>
        </DialogTitle>

        <DialogContent>

          <FormControl required fullWidth sx={{ my: 1 }}>
            <InputLabel>Tramo</InputLabel>
            <Select
              margin="dense"
              id="select"
              label="Tramo"
              fullWidth
              value={tramoIngresado}
              onChange={handleTramoIngresadoChange}
            >
              {tramos.map((tramo, index) => {
                return (
                  <MenuItem value={tramo.id}>{tramo.origen.nombre + " => " + tramo.destino.nombre}</MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl required fullWidth sx={{ my: 1 }}>
            <InputLabel>Camion</InputLabel>
            <Select
              margin="dense"
              id="select"
              label="Código del Camión"
              fullWidth
              value={camionIngresado}
              onChange={handleCamionIngresadoChange}
            >
              {camiones.map((camion, index) => {
                return (
                  <MenuItem value={camion.id}>{camion.codigo}</MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField fullWidth sx={{ my: 1 }} {...props} />}
              label="Fecha del Accidente"
              value={fechaIngresada}
              onChange={(fechaIngresada) => {
                setFechaIngresada(fechaIngresada);
              }}
            />
          </LocalizationProvider>

          <FormControl required fullWidth sx={{ my: 1 }}>
            <InputLabel>Tipo de Acidente</InputLabel>
            <Select
              margin="dense"
              id="select"
              label="Almacén de origen"
              fullWidth
              value={tipoIngresado}
              onChange={handleTipoIngresadoChange}
            >
              <MenuItem value={'1'}>Averías moderadas</MenuItem>
              <MenuItem value={'2'}>Averías fuertes</MenuItem>
              <MenuItem value={'3'}>Averías - siniestros</MenuItem>
            </Select>
          </FormControl>

        </DialogContent>

        <Box sx={{ p: '1rem', display: 'flex', justifyContent: 'space-between' }}>
          <Button
            size="large"
            startIcon={<CancelIcon />}
            onClick={handleClose}
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

      </Dialog>
    </Box>
  );
}

export default CustomModalAccidentes;