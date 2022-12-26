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
import { postBloqueo } from '../../services/bloqueos';

import * as React from 'react'; 
import { useState, useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const CustomModalBloqueos = (props) => {
  const [ tramos, setTramos ] = useState([]);
  const [ tramoIngresado, setTramoIngresado ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ loading2, setLoading2 ] = useState(false);

  const [inicioBloqueo, setInicioBloqueo] = React.useState(new Date());
  const [finBloqueo, setFinBloqueo] = React.useState(new Date());
  const [ openAlert, setOpenAlert ] = useState(false);
  const [ alertSeverity, setAlertSeverity ] = useState('warning');
  const [ alertTitle, setAlertTitle ] = useState('');
  const [ alertBody, setAlertBody ] = useState('');

  // llamada al servicio postBloqueo
  const handleSave = async () => {
    setLoading(true);
    try{
      
      // preparando los datos
      const datos = {
        "fechaInicio" : inicioBloqueo,
        "fechaFin" : finBloqueo
      }

      console.log('Datos enviados: ');
      console.log(inicioBloqueo);
      console.log(finBloqueo);

      const response = await postBloqueo(datos, tramoIngresado);

      console.log(response);
      handleClose();
      setLoading(false);
      props.onClose(0);
    }
    catch (error) {
      console.log(error);
      setAlertTitle('Error al registrar el bloqueo');
      setAlertBody(error.message);

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
  }

  
  const obtenerTramosDeServicio = async () => {
    setLoading2(true); 
    const response = await getTramos();
    setTramos(response.data); 
    setLoading2(false);
  }

  useEffect(() => {
    obtenerTramosDeServicio();
  }, []) //Runs only on the first render

  
  const handleClose = () => {
    props.onClose(false);
  };

  
  const handleTramoIngresadoChange = (e) => {
    setTramoIngresado(e.target.value); 
  } 


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
                <Spinner color='dark' style={{ alignItems: 'center' }} loading={loading2.toString()}></Spinner>
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
        PaperProps={{ sx: { width: "50rem", height: "25rem" } }}>

        <DialogTitle>
          <Title text={'Nuevo Bloqueo'}></Title>  
        </DialogTitle>
        
        <DialogContent>

          <FormControl required fullWidth sx={{ my: 1 }}>
            <InputLabel>Tramo</InputLabel>
            <Select
              margin="dense"
              id="select"
              label="Almacén de origen"
              fullWidth
              value={tramoIngresado}
              onChange={handleTramoIngresadoChange}
            >
              {tramos.map((tramo, index) => (
                <MenuItem key={index} value={tramo.id}>{tramo.origen.nombre + " => " + tramo.destino.nombre}</MenuItem>
                )
              )}
            </Select> 
          </FormControl>
          
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField fullWidth sx={{ my: 1 }} {...props} />}
              label="Inicio del Bloqueo"
              value={inicioBloqueo}
              onChange={(inicioBloqueo) => {
                setInicioBloqueo(inicioBloqueo);
              }}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField fullWidth sx={{ my: 1 }} {...props} />}
              label="Fin del Bloqueo"
              value={finBloqueo}
              onChange={(finBloqueo) => {
                setFinBloqueo(finBloqueo);
              }}
            />
          </LocalizationProvider>

        </DialogContent>
        
        <Box sx={{ p:'1rem', display: 'flex', justifyContent: 'space-between' }}>
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

export default CustomModalBloqueos;