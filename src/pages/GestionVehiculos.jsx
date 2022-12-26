import React, { useEffect, useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Box from "@mui/material/Box";
import { DataTableCamiones, Title } from "../components";
import { CustomModalCamion, FileInput, CustomAlert } from "../components";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
// import SearchIcon from '@mui/icons-material/Search';
import { CustomModalMasivo } from "../components";

import getCamiones from "../services/camiones";

import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

const headCells = [
  {
    id: "numero",
    numeric: false,
    disablePadding: true,
    label: "Código",
  },
  {
    id: "estado",
    numeric: false,
    disablePadding: false,
    label: "Estado",
  },
  {
    id: "tipo",
    numeric: false,
    disablePadding: false,
    label: "Tipo",
  },
  {
    id: "capacidad",
    numeric: true,
    disablePadding: false,
    label: "Capacidad",
  },
  {
    id: "almacen",
    numeric: false,
    disablePadding: false,
    label: "Almacen",
  },
];

const GestionVehiculos = () => {
  let texto = "";
  let titulo = "";

  const [openNuevoCamion, setOpenNuevoCamion] = useState(false);
  const [rows, setRows] = useState([]);
  const [rowsCopy, setRowsCopy] = useState([]);

  // const [fileName, setFileName] = useState('');
  const [filas, setFilas] = useState();
  const [textoIngresado, setTextoIngresado] = useState([]);
  const [tituloIngresado, setTituloIngresado] = useState([]);
  const [openMasivos, setOpenMasivos] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("warning");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertBody, setAlertBody] = useState("");

  const [filtro, setFiltro] = useState("");

  const obtenerCamionesDeServicio = async () => {
    try {
      const response = await getCamiones();
      setRows(response.data);
      setRowsCopy(response.data);
    } catch (error) {
      setAlertSeverity("error");
      setAlertTitle("Error al listar los camiones");
      setAlertBody(error.message);

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
  };

  useEffect(() => {
    obtenerCamionesDeServicio();
  }, []);

  useEffect(() => {
    let a = rowsCopy.filter((aa) => aa.codigo.includes(filtro.toUpperCase()));
    setRows(a);
  }, [filtro]);

  const handleOpenNuevoCamion = () => {
    setOpenNuevoCamion(true);
  };

  const handleCloseNuevoCamion = (status) => {
    setOpenNuevoCamion(false);

    console.log(status, "status");

    if (status === 0) {
      obtenerCamionesDeServicio();
      setAlertSeverity("success");
      setAlertTitle("Éxito");
      setAlertBody("El camion ha sido registrado exitosamente");

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
  };

  const handleFileSelect = (file) => {
    if (!file) return console.log("The user did not enter a valid file");

    let esCamiones;
    let lista = [];

    if (file.name.includes("flota")) {
      esCamiones = true;
      // setFileName(file.name);
      titulo = titulo + file.name;
    }

    if (esCamiones) {
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

  const handleOpenMasivo = () => {
    setOpenMasivos(true);
  };
  const handleCloseMasivo = (status) => {
    setOpenMasivos(false);

    console.log(status, "status");

    if (status === 0) {
      obtenerCamionesDeServicio();
      setAlertSeverity("success");
      setAlertTitle("Éxito");
      setAlertBody("Los camiones han sido registrados exitosamente");

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
    if (status === 1) {
      setAlertSeverity("error");
      setAlertTitle("Error");
      setAlertBody("Error al cargar el archivo de camiones");

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
  };

  return (
    <Box sx={{ p: "2.0rem", display: "grid" }}>
      <Title text={"Gestión de Vehículos"}></Title>
      <Box sx={{ float: "right" }}>
        <Box sx={{ float: "left", display: "flex" }}>
          <Button
            style={{ marginRight: 10 }}
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenNuevoCamion}
          >
            Nuevo Vehículo
          </Button>
          <CustomModalCamion
            open={openNuevoCamion}
            onClose={handleCloseNuevoCamion}
          />
          <Box>
            <FileInput onFileSelect={handleFileSelect}>
              Cargar archivo de camiones
            </FileInput>
          </Box>
          <CustomModalMasivo
            open={openMasivos}
            onClose={handleCloseMasivo}
            pedidos={textoIngresado}
            titulo={tituloIngresado}
            encabezado={"Carga Masiva de Camiones"}
            arregloServicio={filas}
          />
        </Box>
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
            label="Código"
            variant="standard"
            value={filtro}
            onChange={(event) => setFiltro(event.target.value)}
          />
        </Box>
      </Box>

      <DataTableCamiones rows={rows} headCells={headCells}></DataTableCamiones>
    </Box>
  );
};

export default GestionVehiculos;
