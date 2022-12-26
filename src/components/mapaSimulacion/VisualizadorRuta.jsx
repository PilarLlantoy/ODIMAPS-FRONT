import React, { useEffect, useState, useContext, useRef } from 'react';
import { Marker, InfoWindow } from "@react-google-maps/api";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClockContext from "../../context/clockContext";
import truckMarker from '../../assets/truck-marker.png';
import { postAccidente } from "../../services/accidentes";

const VisualizadorRuta = (props) => {
  // let salida, llegada;
  const clock = useContext(ClockContext); // calling the clock provider

  const timerRef = useRef(null);

  // let ruta = props.ruta.ciudades;

  const [ruta, setRuta] = useState(props.ruta.ciudades);
  const tiemposSalida = props.ruta.salida;
  const tiemposLlegada = props.ruta.llegada;
  const camion = props.ruta.camion;

  const [progress, setProgress] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [truckLat, setTruckLat] = useState(ruta[0].latitud);
  const [truckLng, setTruckLng] = useState(ruta[0].longitud);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(progress >= 0 && progress < ruta.length - 1){
      let salida = new Date(tiemposSalida[progress]);
      let llegada = new Date(tiemposLlegada[progress+1]);
      salida = salida.getTime();
      llegada = llegada.getTime();

      timerRef.current = setInterval(() => {
        let perc = (clock.value.getTime() - salida)/(llegada - salida);
        if(perc < 0){
          if(progress === 0) setVisible(false); //si aun no ha empezado la ruta
          else setVisible(true); //si esta quieto pero esta en una ciudad intermedia
          perc = 0;
        }
        else setVisible(true); // si esta en movimiento
        setPercentage(perc);
      }, clock.delay);
    }
    else {
      setVisible(false); // si se ha finalizado con la ruta
    }
  }, [progress])

  useEffect(() => {
    if(progress >= 0 && progress < ruta.length - 1){
      if(percentage >= 0 && percentage < 1){
        setTruckLat(ruta[progress].latitud + (ruta[progress+1].latitud - ruta[progress].latitud)*percentage);
        setTruckLng(ruta[progress].longitud + (ruta[progress+1].longitud - ruta[progress].longitud)*percentage);
      }
      else if(percentage >= 1){
        clearInterval(timerRef.current);
        setProgress(p => p+1);
      }
    }
  }, [percentage])

  const [markerClicked, setMarkerClicked] = useState(false);

  const switchHandler = () => {
    setMarkerClicked(f => !f);
  }

  const handleAccidentar = async () => {
    try {
      const data = {
        accidentes: [
          {
            fechaAccidente: clock.value,
            vehiculo: props.ruta.camion
          }
        ],
        latitud: [truckLat],
        longitud: [truckLng],
        rutasAccidente: [props.ruta]
      };
      // console.log(data);
      let response = await postAccidente(data);
      if(response.status === 200) console.log('Exito!');
      console.log(response.data.rutasAccidente);

      setRuta(response.data.rutasAccidente);

    }
    catch (error) {
      console.log(error.message);
    }
  }

  return (
    (visible && <Marker
      position={{ lat: truckLat, lng: truckLng }}
      icon={truckMarker}
      onClick={switchHandler}
    >
      {markerClicked &&
        <InfoWindow onCloseClick={switchHandler}>
          <Box sx={{ 'fontSize': 10, p: 0 }}>
            <Box>
              <strong>
                {`Camión ${camion.codigo}, ${camion.cargaAcumulada} paquetes`}
              </strong>
            </Box>
            <Button color="secondary" size="small" variant="outlined" onClick={handleAccidentar}>
              Accidentar kabum
            </Button>
          </Box>
        </InfoWindow>
      }
    </Marker>)
  )
}

export default VisualizadorRuta;