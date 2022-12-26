import React, { useState, useEffect, useRef, useContext } from "react";

import { Spinner } from "reactstrap";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Title,
  MapaSimulacion,
  DataTableDiaADia,
  CustomAlert,
} from "../components";
import LoadingButton from "@mui/lab/LoadingButton";
import RouteIcon from "@mui/icons-material/Route";
import { getPlanificacionDiaADia } from "../services/simulaciones";
import { getPlanificacionRutas } from "../services/simulaciones";
import { getBloqueos } from "../services/bloqueos";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ClockContext from "../context/clockContext";
// import rows from "./wea";

const headCells = [
  {
    id: "id",
    label: "ID",
  },
  {
    id: "idCamion",
    label: "Camión",
  },
  {
    id: "estado",
    label: "Estado",
  },
  {
    id: "acciones",
    label: "",
  },
];

const OperacionesDiaADia = () => {
  const clock = useContext(ClockContext);
  const timerRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [displayTime, setDisplayTime] = useState(new Date());
  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("warning");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertBody, setAlertBody] = useState("");
  const [rutasAMostrar, setRutasAMostrar] = useState([]);
  const [bloqueosAMostrar, setBloqueosAMostrar] = useState([]); //solo se mostraran durante la hora en la que estan efectivos
  const [rutaResaltada, setRutaResaltada] = useState([]);
  const [loadingTable, setLoadingTable] = useState(true);

  useEffect(() => {
    setLoadingTable(true);
    // console.log('page mounted');
    startClock();
    getRutasFromService();
    getBloqueosFromService();
  }, []);

  // fx que setea alguna ruta recibida por el server y decide si pushear o reemplazar una ya renderizada.
  const stackearConsID = (data) => {
    let rutasAMostrarTemp = [...rutasAMostrar];
    if (!rutasAMostrarTemp.length) return data;
    for (let i = 0; i < data.length; i++) {
      let itsHere = 0;
      for (let j = 0; j < rutasAMostrar.length; j++) {
        if (rutasAMostrar[j].id === data[i].id) {
          itsHere++;
          console.log("chancando...");
          rutasAMostrarTemp.splice(j, 1, data[i]);
        }
      }
      if (!itsHere) {
        console.log("pusheando...");
        rutasAMostrarTemp.push(data[i]);
      }
    }
    return rutasAMostrarTemp;
  };

  const getRutasFromService = async () => {
    try {
      const response = await getPlanificacionRutas();
      console.log(response.data);
      setRutasAMostrar([...stackearConsID(response.data)]);
      // setRutasAMostrar([...response.data]);

      setAlertSeverity("success");
      setAlertTitle("Éxito");
      setAlertBody("Vehículos en curso obtenidos exitosamente");
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    } catch (error) {
      setAlertSeverity("error");
      setAlertTitle("Error");
      setAlertBody("Error al obtener los vehículos en curso");
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
    setLoadingTable(false);
  };

  const getBloqueosFromService = async () => {
    try {
      const response = await getBloqueos();
      setBloqueosAMostrar((b) => [...b, ...response.data]);
      // setAlertSeverity('success')
      // setAlertBody('Bloqueos obtenidos exitosamente');
      // setOpenAlert(true);
      // setTimeout(() => {
      //   setOpenAlert(false);
      // }, 5000);
    } catch (error) {
      console.log("Error al obtener los bloqueos.");
      // setAlertSeverity('error')
      // setAlertTitle('Error al obtener los vehículos en curso');
      // setOpenAlert(true);
      // setTimeout(() => {
      //   setOpenAlert(false);
      // }, 5000);
    }
  };

  const startClock = () => {
    timerRef.current = setInterval(() => {
      clock.value.setTime(clock.value.getTime() + 1000);
      setDisplayTime(new Date());
    }, 1000);
  };

  const forzarPlanificacion = async () => {
    setLoading(true);
    try {
      const response = await getPlanificacionDiaADia();
      console.log(response.data);
      getRutasFromService();
      getBloqueosFromService();

      setAlertSeverity("success");
      setAlertTitle("Planificación exitosa.");
      setAlertBody("");
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    } catch (error) {
      setAlertSeverity("error");
      setAlertTitle("Error al realizar la planificación.");
      setAlertBody("");
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
    setLoading(false);
  };

  const handleOnSelectedRow = (row) => {
    setRutaResaltada(row.ciudades);
  };

  return (
    <Box sx={{ p: "2.0rem" }}>
      <Title text={"Operaciones Día a Día"}></Title>
      <Box sx={{ display: "block", justifyContent: "center" }}>
        <Box
          sx={{
            p: "0.5rem",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {displayTime && (
            <Box sx={{ pb: "0.25rem", display: "flex" }}>
              <AccessTimeIcon />
              <Typography variant="h6" textAlign="center">
                {displayTime.toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour24: true,
                })}{" "}
                hrs.
              </Typography>
            </Box>
          )}
          <CustomAlert
            open={openAlert}
            severity={alertSeverity}
            title={alertTitle}
            body={alertBody}
          />

          <Box sx={{ p: "0.3rem" }}>
            <LoadingButton
              color="secondary"
              variant="contained"
              loading={loading}
              loadingPosition="start"
              startIcon={<RouteIcon />}
              onClick={forzarPlanificacion}
            >
              Forzar planificación
            </LoadingButton>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {loadingTable ? (
            <Spinner color="dark"></Spinner>
          ) : (
            <DataTableDiaADia
              rows={rutasAMostrar}
              headCells={headCells}
              customWidth="35%"
              customHeight="75vh"
              onSelectedRow={handleOnSelectedRow}
            />
          )}

          <MapaSimulacion
            rutas={rutasAMostrar}
            bloqueos={bloqueosAMostrar}
            customWidth="65%"
            customHeight="75vh"
            rutaResaltada={rutaResaltada}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OperacionesDiaADia;
