import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import CheckIcon from "@mui/icons-material/Check";
import LoadingButton from "@mui/lab/LoadingButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import getMantenimientos from "../services/mantenimientos";
import getCamiones from "../services/camiones";
import { postMantenimiento } from "../services/mantenimientos";
import { CustomModalMasivo } from "../components";

import {
  DataTableMantenimientos,
  Title,
  FileInput,
  CustomAlert,
} from "../components";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import AccountCircle from "@mui/icons-material/AccountCircle";

const headCells = [
  {
    id: "codigo",
    numeric: false,
    disablePadding: false,
    label: "Código",
  },
  {
    id: "fechaInicio",
    numeric: false,
    disablePadding: false,
    label: "Fecha de Inicio",
  },
  {
    id: "fechaFin",
    numeric: false,
    disablePadding: false,
    label: "Fecha de Fin",
  },
  {
    id: "estado",
    numeric: false,
    disablePadding: false,
    label: "Estado",
  },
];

const MantenimientoVehiculos = () => {
  let texto = "";
  let titulo = "";

  const firstUpdate = useRef(true);
  const [rows, setRows] = useState([]);
  const [rowsCopy, setRowsCopy] = useState([]);
  const [camionIngresado, setCamionIngresado] = useState('');
  const [camiones, setCamiones] = useState([]);
  const [inicioMantenimiento, setinicioMantenimiento] = React.useState(new Date());
  const [finMantenimiento, setfinMantenimiento] = React.useState(new Date());
  const [textoIngresado, setTextoIngresado] = useState([]);
  const [tituloIngresado, setTituloIngresado] = useState([]);
  const [filas, setFilas] = useState();
  const [openMasivos, setOpenMasivo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("warning");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertBody, setAlertBody] = useState("");
  const [filtro, setFiltro] = useState("");

  const obtenerMantenimientosDeServicio = async () => {
    try {
      const response = await getMantenimientos();
      setRows(response.data);
      setRowsCopy(response.data);
    } catch (error) {
      setAlertSeverity("error");
      setAlertTitle("Error al listar los mantenimientos");
      setAlertBody(error.message);

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
  };

  const handleCamionIngresadoChange = (event) => {
    setCamionIngresado(event.target.value);
  };

  const obtenerCamionesDeServicio = async () => {
    const response = await getCamiones();
    setCamiones(response.data);
  };

  // const obtenerTramosDeServicio = async () => {
  //     const response = await getTramos();
  //     setTramos(response.data);
  // }

  useEffect(() => {
    obtenerCamionesDeServicio();
    // obtenerTramosDeServicio();
    obtenerMantenimientosDeServicio();
  }, []); //Runs only on the first render

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      let a = rowsCopy.filter((aa) => aa.vehiculo.codigo.includes(filtro.toUpperCase()));
      setRows(a);
    }
  }, [filtro]);

  const handleSave = async () => {
    setLoading(true);
    try {
      // preparando los datos
      const datos = {
        inicio: inicioMantenimiento,
        fin: finMantenimiento,
      };
      //console.log('Datos enviados: ');
      //console.log(inicioMantenimiento);
      //console.log(finMantenimiento);
      //console.log(camionIngresado);
      const response = await postMantenimiento(datos, camionIngresado);
      //console.log(response);
      obtenerMantenimientosDeServicio();
      setAlertSeverity("success");
      setAlertTitle("Éxito");
      setAlertBody("El pedido ha sido registrado exitosamente");

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    } catch (error) {
      console.log(error);
      setAlertSeverity("error");
      setAlertTitle("Error");
      setAlertBody("Error al registrar un mantenimiento");

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
    setLoading(false);
  };

  const handleOpenMasivo = () => {
    setOpenMasivo(true);
  };

  const handleCloseMasivo = (status) => {
    setOpenMasivo(false);

    console.log(status, "status");

    if (status === 0) {
      obtenerMantenimientosDeServicio();
      setAlertSeverity("success");
      setAlertTitle("Éxito");
      setAlertBody("Los mantenimientos han sido registrados exitosamente");

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    } else {
      setAlertSeverity("error");
      setAlertTitle("Error");
      setAlertBody("Error al cargar el archivo de mantenimientos");

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
  };

  const handleFileSelect = (file) => {
    if (!file) return console.log("The user did not enter a valid file");

    let esMantenimientos;
    let lista = [];

    if (file.name.includes("mant")) {
      esMantenimientos = true;
      // setFileName(file.name);
      titulo = titulo + file.name;
    }

    if (esMantenimientos) {
      // console.log('leyendo ventas');
      const reader = new FileReader();
      reader.onload = (event) => {
        const file = event.target.result;
        const allLines = file.split(/\r\n|\n/);
        // Reading line by line
        allLines.forEach((line) => {
          lista.push(line);
          texto = texto + line + "\n";
        });
        setTextoIngresado(texto);
        setTituloIngresado(titulo);
      };

      reader.onerror = (event) => {
        alert(event.target.error.name);
      };
      reader.readAsText(file);
      setFilas(lista);
    }
    handleOpenMasivo();
  };

  return (
    <Box sx={{ p: "2.0rem" }}>
      <Title text={"Mantenimiento de Vehículos"}></Title>
      <Box>
        <Box>
          <FileInput onFileSelect={handleFileSelect}>
            Cargar archivo de mantenimientos
          </FileInput>
        </Box>
        <CustomModalMasivo
          open={openMasivos}
          onClose={handleCloseMasivo}
          pedidos={textoIngresado}
          titulo={tituloIngresado}
          encabezado={"Carga Masiva de Mantenimientos"}
          arregloServicio={filas}
        />

        <Paper sx={{ p: "1.0rem", mt: "1.2rem" }} elevation={0}>
          <Divider
            textAlign="left"
            sx={{
              "& .css-cppmpw-MuiDivider-root::before": {
                width: "2%",
              },
            }}
          >
            <Typography sx={{ px: 2, fontSize: "1rem" }}>
              Datos del nuevo mantenimiento
            </Typography>
          </Divider>
          <Box sx={{ p: 2 }}>
            <FormControl required sx={{ width: "20%", px: 2 }}>
              <InputLabel sx={{ px: 2 }}>Camion</InputLabel>
              <Select
                margin="dense"
                id="select"
                label="Código del Camión"
                fullWidth
                value={camionIngresado}
                onChange={handleCamionIngresadoChange}
              >
                {camiones.map((camion, index) => {
                  return <MenuItem value={camion.id}>{camion.codigo}</MenuItem>;
                })}
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField
                    fullWidth
                    sx={{ maxWidth: 300, mx: 2 }}
                    {...props}
                  />
                )}
                label="Inicio del Mantenimiento"
                value={inicioMantenimiento}
                onChange={(inicioMantenimiento) => {
                  setinicioMantenimiento(inicioMantenimiento);
                }}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField
                    fullWidth
                    sx={{ maxWidth: 300, mx: 2 }}
                    {...props}
                  />
                )}
                label="Fin del Mantenimiento"
                value={finMantenimiento}
                onChange={(finMantenimiento) => {
                  setfinMantenimiento(finMantenimiento);
                }}
              />
            </LocalizationProvider>

            <LoadingButton
              size="large"
              loading={loading}
              loadingPosition="start"
              startIcon={<CheckIcon />}
              onClick={handleSave}
              color="secondary"
              variant="outlined"
            >
              Programar
            </LoadingButton>
          </Box>
        </Paper>
      </Box>

      <Box sx={{ width: "100%", py: "0.5rem" }}>
        <CustomAlert
          open={openAlert}
          severity={alertSeverity}
          title={alertTitle}
          body={alertBody}
        />
      </Box>

      <Box
        sx={{ "& > :not(style)": { m: 1 } }}
        style={{ marginBottom: "2rem" }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LocalShippingIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx filter"
            name="filter"
            type="text"
            label="Código del vehículo"
            variant="standard"
            value={filtro}
            onChange={(event) => setFiltro(event.target.value)}
          />
        </Box>
      </Box>

      <DataTableMantenimientos
        rows={rows}
        headCells={headCells}
      ></DataTableMantenimientos>
    </Box>
  );
};

export default MantenimientoVehiculos;
