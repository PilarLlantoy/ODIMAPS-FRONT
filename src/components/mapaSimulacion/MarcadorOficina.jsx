import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Marker, InfoWindow } from "@react-google-maps/api";
import oficinaMarker from '../../assets/oficina-marker.png';

const almacenes = [130101, 150101, "040101"];

const MarcadorOficina = (props) => {

  const [customScale, setCustomScale] = useState(0.30);
  const [customColor, setCustomColor] = useState("orange"); // darkolivegreen
  const [markerClicked, setMarkerClicked] = useState(false);

  const switchHandler = () => {
    setMarkerClicked(f => !f);
  }

  useEffect(() => {
    if(almacenes.includes(props.oficina.ubigeo)){
      setCustomColor("orange");
      setCustomScale(0.30);
    }
  }, [])

  return (
    <Marker 
      key={props.oficina.ubigeo}
      position={{ lat: props.oficina.latitud, lng: props.oficina.longitud }}
      icon={oficinaMarker}
      onClick={switchHandler}
    >
      {markerClicked &&
        <InfoWindow onCloseClick={switchHandler}>
          <Box sx={{ 'fontSize': 10, p: 0 }}>
            {`${props.oficina.provincia}, ${props.oficina.departamento}`}
          </Box>
        </InfoWindow>
      }
    </Marker>
  )
}

export default MarcadorOficina;