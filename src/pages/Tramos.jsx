import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import {
  DataTableCarreteras,
  Title,
} from "../components";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import getTramos from "../services/tramos";

import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@mui/material/TextField";

const headCells = [
  {
    id: "origen",
    numeric: false,
    disablePadding: true,
    label: "Origen",
  },
  {
    id: "destino",
    numeric: false,
    disablePadding: false,
    label: "Destino",
  } /*
    {
        id: 'estado',
        numeric: false,
        disablePadding: false,
        label: 'Estado',
    },*/,
];

const Tramos = () => {
  const [rows, setRows] = useState([]);
  const [rowsCopy, setRowsCopy] = useState([]);
  const [loading, setLoading] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("warning");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertBody, setAlertBody] = useState("");

  const [filtro, setFiltro] = useState("");

  const obtenerTramosDeServicio = async () => {
    setLoading(true);
    const response = await getTramos();
    setRows(response.data);
    setRowsCopy(response.data);
    setLoading(false);
  };

  useEffect(() => {
    obtenerTramosDeServicio();
  }, []);

  useEffect(() => {
    let a = rowsCopy.filter((aa) =>
      aa.origen.nombre.includes(filtro.toUpperCase())
    );
    setRows(a);
  }, [filtro]);

  //ACCIDENTES

  const [openNuevoAccidente, setOpenNuevoAccidente] = useState(false);

  const handleOpenNuevoAccidente = () => {
    setOpenNuevoAccidente(true);
  };

  const handleCloseNuevoAccidente = (status) => {
    setOpenNuevoAccidente(false);

    console.log(status, "status");

    if (status === 0) {
      //obtenerCamionesDeServicio();
      setAlertSeverity("success");
      setAlertTitle("Éxito");
      setAlertBody("El accidente ha sido registrado exitosamente");

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
  };

  //BLOQUEOS

  const [openNuevoBloqueo, setOpenNuevoBloqueo] = useState(false);

  const handleOpenNuevoBloqueo = () => {
    setOpenNuevoBloqueo(true);
  };

  const handleCloseNuevoBloqueo = (status) => {
    setOpenNuevoBloqueo(false);

    console.log(status, "status");

    if (status === 0) {
      //obtenerCamionesDeServicio();
      setAlertSeverity("success");
      setAlertTitle("Éxito");
      setAlertBody("El accidente ha sido registrado exitosamente");

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
  };

  // const [fileName, setFileName] = useState('');
  const [filas, setFilas] = useState();

  let texto = "";
  let titulo = "";

  const [textoIngresado, setTextoIngresado] = useState([]);
  const [tituloIngresado, setTituloIngresado] = useState([]);

  const [openMasivos, setOpenMasivo] = useState(false);

  const handleOpenMasivo = () => {
    setOpenMasivo(true);
  };
  const handleCloseMasivo = (status) => {
    setOpenMasivo(false);

    console.log(status, "status");

    if (status === 0) {
      setAlertSeverity("success");
      setAlertTitle("Éxito");
      setAlertBody("Los datos han sido registrados exitosamente");

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
    if (status === 1) {
      setAlertSeverity("error");
      setAlertTitle("Error");
      setAlertBody("Error al cargar el archivo");

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
  };

  const handleFileSelect = (file) => {
    if (!file) return console.log("The user did not enter a valid file");

    let esAccidentes;
    let esCamiones;
    let esBloqueo;
    let lista = [];

    if (file.name.includes("flota")) {
      esCamiones = true;
      // setFileName(file.name);
      titulo = titulo + file.name;
    }
    if (file.name.includes("bloqueo")) {
      esBloqueo = true;
      // setFileName(file.name);
      titulo = titulo + file.name;
    }

    if (file.name.includes("accidentes")) {
      esAccidentes = true;
      // setFileName(file.name);
      titulo = titulo + file.name;
    }

    if (esAccidentes || esBloqueo || esCamiones) {
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

  if (loading) {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h3>
            Por favor, espere.
          </h3>
        </div>

        <div className="abs-center">
          <div style={{ alignItems: "center" }}>
            <Spinner color="dark" style={{ alignItems: "center" }}></Spinner>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Box sx={{ p: "2.0rem", display: "grid" }}>
      <Title text={"Tramos"}></Title>

      <Box
        sx={{ "& > :not(style)": { m: 1 } }}
        style={{ marginBottom: "2rem" }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LocationCityIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx filter"
            name="filter"
            type="text"
            label="Origen"
            variant="standard"
            value={filtro}
            onChange={(event) => setFiltro(event.target.value)}
          />
        </Box>
      </Box>

      <DataTableCarreteras
        rows={rows}
        headCells={headCells}
      ></DataTableCarreteras>
    </Box>
  );
};

export default Tramos;
