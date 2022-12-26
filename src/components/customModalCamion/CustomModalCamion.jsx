import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import LoadingButton from '@mui/lab/LoadingButton';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

import { postCamion } from '../../services/camiones';


import { Title, CustomAlert } from '..'; 

const CustomModalCamion = (props) => {

  const [ numCamionIngresado, setNumCamion ] = useState();
  const [ tipoCamionIngresado, setTipoCamion ] = useState();
  const [ capacidadIngresada, setCapacidad ] = useState();
  const [ almacenIngresado, setAlmacen ] = useState();

  const [ loading, setLoading ] = useState(false);
  
  const [ openAlert, setOpenAlert ] = useState(false);
  const [ alertSeverity, setAlertSeverity ] = useState('warning');
  const [ alertTitle, setAlertTitle ] = useState('');
  const [ alertBody, setAlertBody ] = useState('');

  // llamada al servicio postVehiculo
  const handleSave = async () => {
    setLoading(true);
    try{  
      const vehiculo = {
        "codigo": tipoCamionIngresado+numCamionIngresado,
        "estado": 0,
        "tipo": tipoCamionIngresado,
        "capacidad": +capacidadIngresada,
        "almacenAsignado": almacenIngresado
      }

      const response = await postCamion(vehiculo);

      console.log(response);
      props.onClose(0); 
    }
    catch (error) {
      setAlertSeverity('error')
      setAlertTitle('Error al registrar el camion');
      setAlertBody(error.message);

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
    //handleClose();
    setLoading(false);
  }


  const handleClose = () => {
    props.onClose(false);
  };

  const handleNumCamionChange = (e) => {
    setNumCamion(e.target.value);
  }
  const handleTipoCamionChange = (event: SelectChangeEvent) => {
    setTipoCamion(event.target.value);
  };
  const handleCapacidadChange = (e) => {
    setCapacidad(e.target.value);
  };
  const handleAlmacenChange = (event: SelectChangeEvent) => {
    setAlmacen(event.target.value);
  };

  return (
    <div>
      <Dialog 
        open={props.open} 
        onClose={handleClose}
        PaperProps={{ sx: { width: "50rem", height: "27rem" } }}>
        
        <DialogTitle>
          <Title text={'I. Nuevo Camion'}></Title>
        </DialogTitle>
        
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="numero"
            label="Número"
            fullWidth
            variant="outlined"
            value={numCamionIngresado}
            onChange={handleNumCamionChange}
            InputProps={{ inputProps: { min: "1", step: "1" } }}
          /> 
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Tipo
              </InputLabel>
              <NativeSelect
                defaultValue={' '}
                value={tipoCamionIngresado}
                onChange={handleTipoCamionChange}
                inputProps={{
                  name: 'tipo',
                  id: 'select',
                }}
              >
                <option disabled  value={' '}>Seleccione una opción</option>
                <option value={'A'}>A</option>
                <option value={'B'}>B</option>
                <option value={'C'}>C</option>
              </NativeSelect>
            </FormControl>
          </Box> 
          <Box sx={{ minWidth: 120 }}>
            <TextField 
              margin="dense"
              id="capacidad"
              label="Capacidad"
              type="number"
              fullWidth
              variant="standard"
              value={capacidadIngresada}
              onChange={handleCapacidadChange}
            />
          </Box> 
          <Box style={{ marginTop: '20px' }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Almacen asignado
              </InputLabel>
              <NativeSelect 
                defaultValue={' '}
                value={almacenIngresado}
                onChange={handleAlmacenChange}
                inputProps={{
                  name: 'almacen',
                  id: 'select',
                }}
              >
                <option disabled  value={' '}>Seleccione una opción</option>
                <option value={'LIMA'}>LIMA</option>
                <option value={'TRUJILLO'}>TRUJILLO</option>
                <option value={'AREQUIPA'}>AREQUIPA</option>
              </NativeSelect>
            </FormControl>
          </Box> 
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

        <Box sx={{ p: '0.5rem' }}>
          <CustomAlert 
            open={openAlert} 
            severity={alertSeverity} 
            title={alertTitle}
            body={alertBody}
          />
        </Box>

      </Dialog>
    </div>
  );
}

export default CustomModalCamion;