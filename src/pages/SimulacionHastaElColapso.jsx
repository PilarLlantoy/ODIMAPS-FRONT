import React, { useState, useEffect, useRef, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import RouteIcon from '@mui/icons-material/Route';
import LinearProgress from '@mui/material/LinearProgress';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { Title, MapaSimulacion, FileInput, DataTableDiaADia } from '../components';
import { getPlanificacion7Dias } from '../services/simulaciones';
import Collapse from '@mui/material/Collapse';
import { parseBloqueos } from '../services/bloqueos';
import CloseIcon from '@mui/icons-material/Close';
import ClockContext from "../context/clockContext";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AccessTimeIcon from "@mui/icons-material/AccessTime";

let pedidosADevolver;
let rutasADevolver;
let clockSecundario;
const intervalo = 4; // horas entre llamadas al algoritmo

let nroRutasCumplidas = 0;
let pedidoColapso;

const SimulacionHastaElColapso = () => {
  
  const clock = useContext(ClockContext);
  const buttonStopRef = useRef(null);
  const timerRef = useRef(null);
  const algorithmRef = useRef(null);
  const firstAlgorithmRef = useRef(null);

  const [ filePedidos, setFilePedidos ] = useState();
  const [ fileMant, setFileMant ] = useState();
  const [ fileBloqueos, setFileBloqueos ] = useState();
  const [ filePedidosName, setFilePedidosName ] = useState('');
  const [ fileMantName, setFileMantName ] = useState('');
  const [ fileBloqueosName, setFileBloqueosName ] = useState('');
  const [ filasPedidos, setFilasPedidos ] = useState();
  const [ filasMant, setFilasMant ] = useState();
  const [ filasBloqueos, setFilasBloqueos ] = useState();
  const [ loading, setLoading ] = useState(false);
  const [ enableDatePicker, setEnableDatePicker ] = useState(false);
  const [ enablePlayBtn, setEnablePlayBtn ] = useState(false);
  const [ enablePauseBtn, setEnablePauseBtn ] = useState(false);
  const [ enableStopBtn, setEnableStopBtn ] = useState(false);
  const [ enableSlowerBtn, setEnableSlowerBtn ] = useState(false);
  const [ enableFasterBtn, setEnableFasterBtn ] = useState(false);
  const [ planifReady, setPlanifReady ] = useState(false);
  const [ displayTime, setDisplayTime ] = useState();
  const [ simIsRunning, setSimIsRunning ] = useState(false);
  const [ rutasLeidas, setRutasLeidas ] = useState([]);
  const [ rutasAMostrar, setRutasAMostrar ] = useState([]);
  const [ rutasActivas, setRutasActivas ] = useState([]);

  const [ bloqueosAMostrar, setBloqueosAMostrar ] = useState([]);

  const [ timePickerValue, setTimePickerValue ] = useState(new Date());
  const [ feedback, setFeedback ] = useState('');
  const [ openAlert, setOpenAlert ] = useState(false);
  const [ isReportOpen, setIsReportOpen ] = useState(false);

  const [ rutaResaltada, setRutaResaltada ] = useState([]);

  // Revisa si los 3 archivos han sido subidos y son correctos para habilitar el bot??n de Planificaci??n
  useEffect(() => {
    if (filePedidos && fileMant && fileBloqueos) {
      setPlanifReady(true);
      setEnableDatePicker(true);
    }
  }, [filePedidos, fileMant, fileBloqueos]);

  useEffect(() => {
    clock.value.setTime(new Date(timePickerValue.getTime()));
    setDisplayTime(timePickerValue);
  }, [timePickerValue]);

  const handleFileSelect = (file) => {
    
    if (!file) return console.log("The user did not enter a file at all.");

    // los archivos han sido alterados, por lo que una nueva planificacion es necesaria
    setEnablePlayBtn(false);
    setEnablePauseBtn(false);

    let listaPedidos = [];
    let listaMant = [];
    let listaBloqueos = [];

    if(file.name.includes('ventas')) {
      setFilePedidosName(' ' + file.name);
      setFilePedidos(file);
      const reader = new FileReader();
      reader.onload = (event) => {
          const f = event.target.result;
          const allLines = f.split(/\r\n|\n/);
          // Reading line by line
          allLines.forEach((line) => {
            listaPedidos.push(line);
          });
      };
      reader.onerror = (event) => {
          alert(event.target.error.name);
      };
      reader.readAsText(file);
      setFilasPedidos(listaPedidos);
    }

    else if(file.name.includes('mant')) {
      setFileMantName(' ' + file.name);
      setFileMant(file);
      const reader = new FileReader();
      reader.onload = (event) => {
          const f = event.target.result;
          const allLines = f.split(/\r\n|\n/);
          // Reading line by line
          allLines.forEach((line) => {
            listaMant.push(line);
          });
      };
      reader.onerror = (event) => {
          alert(event.target.error.name);
      };
      reader.readAsText(file);
      setFilasMant(listaMant);
    }

    else if(file.name.includes('bloqueo')) {
      setFileBloqueosName(' ' + file.name);
      setFileBloqueos(file);
      const reader = new FileReader();
      reader.onload = (event) => {
          const f = event.target.result;
          const allLines = f.split(/\r\n|\n/);
          // Reading line by line
          allLines.forEach((line) => {
            listaBloqueos.push(line);
          });
      };
      reader.onerror = (event) => {
          alert(event.target.error.name);
      };
      reader.readAsText(file);
      setFilasBloqueos(listaBloqueos);
    }

  }

  // fx que setea alguna ruta recibida por el server y decide si pushear o reemplazar una ya renderizada.
  const stackearConsID = (data) => {
    let rutasAMostrarTemp = [...rutasAMostrar];
    if(!rutasAMostrarTemp.length) return data;
    for(let i=0; i < data.length; i++){
      let itsHere = 0;
      for(let j=0; j < rutasAMostrar.length; j++){
        if(rutasAMostrar[j].id === data[i].id){
          itsHere++;
          console.log('chancando...');
          rutasAMostrarTemp.splice(j, 1, data[i]);
        }
      }
      if(!itsHere){
        console.log('pusheando...');
        rutasAMostrarTemp.push(data[i]);
      }
    }
    return rutasAMostrarTemp;
  }

  const generarPrimeraPlanificacion = async () => {
    setLoading(true);
    try {
      setEnableDatePicker(false);

      clockSecundario = new Date(clock.value.getTime());
      const increment = intervalo*60*60*1000; // 4 horas!
      clockSecundario.setTime(clockSecundario.getTime() + increment);
      const response = await getPlanificacion7Dias({
        'fechaInicio': clockSecundario,
        'pedidos': filasPedidos,
        'mantenimientos': filasMant,
        'bloqueos': filasBloqueos,
        'respuesta': {
          'rutas': null,
          'pedidos': null,
        }
      });
      console.log(response.data);
      nroRutasCumplidas += response.data.rutas.length;
      
      const response2 = await parseBloqueos(filasBloqueos);

      setRutasLeidas([...stackearConsID(response.data.rutas)]);
      setRutasActivas([...stackearConsID(response.data.rutas)]);
      setBloqueosAMostrar([...response2.data]);
      setPlanifReady(false);
      setEnablePlayBtn(true);
      pedidosADevolver = [...response.data.pedidos];
    }
    catch(error) {
      buttonStopRef.current = 'Stop';
      console.log(error.message);
      setFeedback(error.message);
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
    setLoading(false);
  }

  const generarPlanificacion = async () => {

    setLoading(true);
    try {
      const increment = intervalo * 60 * 60 * 1000; // 4 horas!
      clockSecundario.setTime(clockSecundario.getTime() + increment);
      const response = await getPlanificacion7Dias({
        'fechaInicio': clockSecundario,
        'pedidos': filasPedidos,
        'mantenimientos': filasMant,
        'bloqueos': filasBloqueos,
        'respuesta': {
          'rutas': rutasADevolver,
          'pedidos': pedidosADevolver,
        }
      });
      console.log(response.data);

      if (!response.data.rutas && !isReportOpen) {
        console.log('Received collapse signal from server.');
        // handleStopSimulation();
        pedidoColapso = response.data.pedidos[0];
        setIsReportOpen(true);
      }
      else {
        nroRutasCumplidas += response.data.rutas.length;
        setRutasLeidas(p => [...p, ...stackearConsID(response.data.rutas)]);
        setRutasAMostrar(p => [...p, ...stackearConsID(response.data.rutas)]);
        setRutasActivas(p => [...filtrarRutasActivas(p), ...stackearConsID(response.data.rutas)]);
        rutasADevolver = [...rutasADevolver, ...response.data.rutas];
        pedidosADevolver = [...response.data.pedidos];
      }
    }
    catch(error) {
      buttonStopRef.current = 'Stop';
      console.log(error);
    }
    setLoading(false);
  }

  //fx que determina las rutas activas a mostrarse en la tabla inferior de la pagina,
  //usando las rutas existentes y las nuevas que vienen del servicio.
  const filtrarRutasActivas = (rutasAct) => {
    const result = rutasAct.filter(r => {
      const lim = new Date(r.llegada[r.llegada.length - 1]);
      return (clock.value.getTime() < lim);
    });
    return result;
  }

  const handleStartSimulation = async () => {
    setEnablePlayBtn(false);
    setEnablePauseBtn(true);
    setEnableStopBtn(true);
    setEnableSlowerBtn(true);
    setEnableFasterBtn(true);

    setRutasAMostrar([...rutasLeidas]);  // mostrando camiones de la primera ejecucion
    rutasADevolver = [...rutasLeidas];  // guardando rutas para devolv??rselas al backend

    setSimIsRunning(true);

    runPeriodically(generarPlanificacion); // ejecutar algoritmo periodicamente

    timerRef.current = setInterval(() => {
      clock.value.setTime(clock.value.getTime() + clock.jump);
      setDisplayTime(new Date(clock.value.getTime()));
    }, clock.delay);
  }

  const handlePauseSimulation = () => {
    buttonStopRef.current = 'Stop';

    setSimIsRunning(false);
    setEnablePlayBtn(true);
    setEnablePauseBtn(false);
    setEnableStopBtn(true);
    setEnableSlowerBtn(false);
    setEnableFasterBtn(false);

    clearInterval(timerRef.current);      // detenemos el paso del tiempo
    clearInterval(firstAlgorithmRef.current);  // detenemos la primera ejecuci??n del algoritmo
    clearInterval(algorithmRef.current);  // detenemos la ejecuci??n peri??dica del algoritmo
  }

  const handleStopSimulation = () => {
    buttonStopRef.current = 'Stop';

    setSimIsRunning(false);
    setEnablePlayBtn(true);
    setEnablePauseBtn(false);
    setEnableStopBtn(false);
    setEnableSlowerBtn(false);
    setEnableFasterBtn(false);

    setRutasLeidas([]);
    setRutasAMostrar([]);
    setRutaResaltada([]);
    clearInterval(timerRef.current);      // detenemos el paso del tiempo
    clearInterval(firstAlgorithmRef.current);  // detenemos la ejecuci??n peri??dica del algoritmo
    clearInterval(algorithmRef.current);  // detenemos la ejecuci??n peri??dica del algoritmo
    clock.value.setTime(new Date(timePickerValue.getTime()));
    setDisplayTime(timePickerValue);
    clockSecundario.setTime(new Date(timePickerValue.getTime()));
  }

  const handleFasterSimulation = () => {
    clock.jump = clock.jump * 1.5;
  }

  const handleSlowerSimulation = () => {
    clock.jump = clock.jump / 1.5;
  }

  const runPeriodically = async (callbackFx) => {
    while(true){
      await callbackFx();
      if (buttonStopRef.current === 'Stop') {
        break;
      }
    }
  };

  const handleOnSelectedRow = (row) => {
    setRutaResaltada(row.ciudades);
  };

  return (
    <Box sx={{ p:'1.5rem' }}>
      <Title text={'Simulaci??n hasta el colapso'}></Title>
      <Box sx={{ display: 'flex' }}>

        <MapaSimulacion 
          rutas={rutasAMostrar} 
          bloqueos={bloqueosAMostrar} 
          customWidth="45%" 
          customHeight="85vh"
          rutaResaltada={rutaResaltada}
        />

        <Paper sx={{ p:'1.2rem', width: '55%', ml: '1rem' }} elevation={1}>
            <Box sx={{ py:'0.1rem' }}>
              <FileInput onFileSelect={handleFileSelect}>
                Cargar archivo de pedidos
              </FileInput>
              {filePedidosName}
            </Box>

            <Box sx={{ py:'0.1rem' }}>
              <FileInput onFileSelect={handleFileSelect}>
                Cargar archivo de mantenimiento
              </FileInput>
              {fileMantName}
            </Box>

            <Box sx={{ py:'0.1rem' }}>
              <FileInput onFileSelect={handleFileSelect}>
                Cargar archivo de bloqueos
              </FileInput>
              {fileBloqueosName}
            </Box>

            <Box sx={{ py:'0.85rem'}}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  disabled={!enableDatePicker}
                  renderInput={(props) => <TextField {...props} />}
                  label="Fecha y hora de inicio de la simulaci??n"
                  value={timePickerValue}
                  onChange={(newValue) => {
                    setTimePickerValue(newValue);
                    clock.value.setTime(new Date(newValue.getTime()));
                    setDisplayTime(newValue);
                  }}
                />
              </LocalizationProvider>
              <Box sx={{ py:'0.3rem' }}>
                <LoadingButton 
                  color="secondary"
                  variant="contained" 
                  disabled={!planifReady}
                  loading={loading}
                  loadingPosition="start"
                  startIcon={<RouteIcon />}
                  onClick={generarPrimeraPlanificacion}
                  >
                  Generar planificaci??n
                </LoadingButton>
              </Box>
            </Box>

            <Box sx={{ py:'0.2rem', display: "flex", justifyContent: 'center' }}>
              <ButtonGroup color="secondary">
                <Button 
                  disabled={!enableSlowerBtn}
                  onClick={handleSlowerSimulation}
                  startIcon={<FastRewindIcon />}
                  >
                  Disminuir velocidad
                </Button>
                <Button 
                  disabled={!enablePlayBtn}
                  onClick={handleStartSimulation}
                  startIcon={<PlayCircleIcon />}
                >
                  Iniciar simulaci??n
                </Button>
                <Button 
                  disabled={!enableFasterBtn}
                  onClick={handleFasterSimulation}
                  startIcon={<FastForwardIcon />}
                >
                  Aumentar velocidad
                </Button>
                <Button 
                  disabled={!enablePauseBtn}
                  onClick={handlePauseSimulation}
                  startIcon={<PauseCircleIcon />}
                >
                  Pausar simulaci??n
                </Button>
                <Button 
                  disabled={!enableStopBtn}
                  onClick={handleStopSimulation}
                  startIcon={<StopCircleIcon />}
                >
                  Detener simulaci??n
                </Button>
              </ButtonGroup>
            </Box>

            {displayTime &&
            <Box sx={{ pt:'0.5rem', display: "flex", justifyContent: 'center' }}>
              <AccessTimeIcon />
              <Typography variant="h6">
                {displayTime.toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                  hour24: true,
                })} hrs.
              </Typography>
            </Box>}

            {simIsRunning && <LinearProgress color="secondary" />}

            <Box sx={{ width: '100%', py: '0.5rem' }}>
              <Collapse in={openAlert}>
                <Alert severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenAlert(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                <AlertTitle>Error al generar la planificaci??n</AlertTitle>
                  El servidor dice: {feedback}
                </Alert>
              </Collapse>
            </Box>

            <DataTableDiaADia
              rows={rutasActivas}
              headCells={[
                {
                  id: "id",
                  label: "ID",
                },
                {
                  id: "idCamion",
                  label: "Cami??n",
                },
                {
                  id: "estado",
                  label: "Estado",
                },
                {
                  id: "acciones",
                  label: "",
                },
              ]}
              customWidth="100%"
              customHeight="40vh"
              onSelectedRow={handleOnSelectedRow}
            />

        </Paper>

        <Dialog
          open={isReportOpen}
          onClose={() => setIsReportOpen(false)}
        >
          <DialogTitle id="alert-dialog-title">
            Informe de colapso log??stico
          </DialogTitle>
          <DialogContent>
            {pedidoColapso && <DialogContentText id="alert-dialog-description">
              <div>
                {`N??mero de rutas llevadas a cabo con ??xito: ${nroRutasCumplidas}`}
              </div>
              <div>
                {`Detalles del pedido que no se pudo entregar a tiempo: `}
              </div>
              <div>
                <li>
                  {`Destino: ${pedidoColapso.destino.nombre}`}
                </li>
                <li>
                  {`Regi??n: ${pedidoColapso.destino.region}`}
                </li>
                <li>
                  {`Fecha de registro: ${pedidoColapso.fechaRegistro}`}
                </li>
                <li>
                  {`Fecha m??x. entrega: ${pedidoColapso.fechaEntregaMax}`}
                </li>
              </div>
            </DialogContentText>}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsReportOpen(false)}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}

export default SimulacionHastaElColapso;