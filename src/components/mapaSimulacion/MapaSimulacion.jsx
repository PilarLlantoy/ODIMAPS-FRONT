import React, { useEffect, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import VisualizadorRuta from './VisualizadorRuta';
import VisualizadorBloqueo from './VisualizadorBloqueo';
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { Polyline } from '@react-google-maps/api';
import MarcadorOficina from './MarcadorOficina';
import oficinas from './oficinas.js';

const MapaSimulacion = (props) => {

  const [bloqueos, setBloqueos] = useState([]);
  const [rutas, setRutas] = useState([]);
  const [camino, setCamino] = useState([]);
  const [centro, setCentro] = useState(useMemo(() => ({
    lat: -9.79032129524519,
    lng: -75.44474545610852,
  })));

  // Cargando la api key de google:
  const { isLoaded } = useLoadScript({ 
    googleMapsApiKey: '',
  })

  // Estableciendo opciones adicionales del mapa:
  const options = {
    // zoomControl: true,
    // gestureHandling: 'none',
    disableDefaultUI: true,
    keyboardShortcuts: false,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#242f3e"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#746855"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#242f3e"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "lightness": 45
          },
          {
            "weight": 0.5
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#263c3f"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6b9a76"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#38414e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#212a37"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9ca5b3"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#746855"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#1f2835"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#f3d19c"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2f3948"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#17263c"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#515c6d"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#17263c"
          }
        ]
      }
    ],
  }

  // Cuando el mapa recibe un arreglo de rutas...
  useEffect(() => {
    setRutas([...props.rutas]);
  }, [props.rutas])

   // Cuando el mapa recibe un arreglo de bloqueos...
  useEffect(() => {
    // console.log(props.bloqueos);
    setBloqueos([...props.bloqueos]);
  }, [props.bloqueos])

  useEffect(() => {
    if(props.rutaResaltada){
      let path = [];
      for(let i=0; i<props.rutaResaltada.length; i++){
        setCentro({lat: props.rutaResaltada[0].latitud, lng: props.rutaResaltada[0].longitud});
        path.push({lat: props.rutaResaltada[i].latitud, lng: props.rutaResaltada[i].longitud});
      }
      setCamino(path);
    }
  }, [props.rutaResaltada])

  // useEffect(() => {
  //   if(props.accidentes){
  //     setAccidentes(path);
  //   }
  // }, [props.accidentes])

  const opcionesPolyline = {
    strokeColor: 'lightskyblue',
    strokeOpacity: 0.8,
    strokeWeight: 2.5,
    fillColor: 'deepskyblue',
    fillOpacity: 0.35,
    clickable: false,
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          zoom={5.5}
          center={centro}
          mapContainerStyle={{ height: props.customHeight, width: props.customWidth, maxWidth: props.customWidth }}
          options={options}
        >
          {oficinas.map((ofic, index) => (
            <MarcadorOficina key={index} oficina={ofic}/>
          ))}

          {rutas.map((ruta, index) => (
            <VisualizadorRuta key={index} ruta={ruta} accidentes={props.accidentes}/>
          ))}

          {bloqueos.map((bloqueo, index) => (
            <VisualizadorBloqueo key={index} bloqueo={bloqueo}/>
          ))}

          {props.rutaResaltada && (
            <Polyline
              path={camino}
              options={opcionesPolyline}
            />
          )}


        </GoogleMap>)
        : (
          <div>Cargando mapa...</div>
        )
      }
    </>
  )
}

export default MapaSimulacion;
