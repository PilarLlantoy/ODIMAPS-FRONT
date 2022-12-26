import React, { useEffect, useState, useContext } from "react";
import { Polyline, InfoWindow } from "@react-google-maps/api";
import Box from "@mui/material/Box";
import ClockContext from "../../context/clockContext";

const VisualizadorBloqueo = (props) => {
  const clock = useContext(ClockContext); // calling the clock provider
  const [camino, setCamino] = useState([]);
  const [visible, setVisible] = useState(false);
  const [polylineClicked, setPolylineClicked] = useState(false);
  let fechaInicio = new Date(props.bloqueo?.fechaInicio);
  let fechaFin = new Date(props.bloqueo?.fechaFin);

  // let fechaInicio = useMemo(() => (new Date(props.bloqueo?.fechaInicio)), [props.bloqueo?.fechaInicio]);
  // let fechaFin = useMemo(() => (new Date(props.bloqueo?.fechaFin)), [props.bloqueo?.fechaFin]);

  // let strFechaInicio = fechaInicio.toLocaleDateString("es-ES", {
  //   day: "numeric",
  //   month: "short",
  //   year: "numeric",
  //   hour: "numeric",
  //   minute: "numeric",
  //   hour24: true,
  // });
  // let strFechaFin = fechaFin.toLocaleDateString("es-ES", {
  //   day: "numeric",
  //   month: "short",
  //   year: "numeric",
  //   hour: "numeric",
  //   minute: "numeric",
  //   hour24: true,
  // });

  useEffect(() => {
    if (props.bloqueo) {
      setCamino([
        {
          lat: props.bloqueo?.tramo.origen.latitud,
          lng: props.bloqueo?.tramo.origen.longitud,
        },
        {
          lat: props.bloqueo?.tramo.destino.latitud,
          lng: props.bloqueo?.tramo.destino.longitud,
        },
      ]);
    }
  }, [props.bloqueo]);

  useEffect(() => {
    if (
      clock.value.getTime() > fechaInicio.getTime() &&
      clock.value.getTime() < fechaFin.getTime()
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [clock.value, fechaFin, fechaInicio]);

  const opcionesPolyline = {
    strokeColor: "red",
    strokeWeight: 1
  };

  const switchHandler = () => {
    setPolylineClicked((f) => !f);
  };

  return (
    visible && (
      <>
        <Polyline
          path={camino}
          options={opcionesPolyline}
          onMouseOver={switchHandler}
          onMouseOut={switchHandler}
        />
        {polylineClicked && (
          <InfoWindow
            onCloseClick={switchHandler}
            position={{
              lat:
                (props.bloqueo?.tramo.origen.latitud +
                  props.bloqueo?.tramo.destino.latitud) /
                2,
              lng:
                (props.bloqueo?.tramo.origen.longitud +
                  props.bloqueo?.tramo.destino.longitud) /
                2,
            }}
          >
            <Box sx={{ fontSize: 10, p: 0 }}>
              <Box sx={{ textAlign: "center", pb: 0.2 }}>
                <strong>BLOQUEO</strong>
              </Box>
              <div>
                <strong>{`Desde: ${fechaInicio.toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour24: true,
                })} hrs`}</strong>
              </div>
              <div>
                <strong>{`Hasta: ${fechaFin.toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour24: true,
                })} hrs`}</strong>
                `
              </div>
            </Box>
          </InfoWindow>
        )}
      </>
    )
  );
};

export default VisualizadorBloqueo;
