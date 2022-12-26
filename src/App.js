import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { Sidebar } from './components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import GestionPedidos from './pages/GestionPedidos';
import GestionVehiculos from './pages/GestionVehiculos';
import OperacionesDiaADia from './pages/OperacionesDiaADia';
import MantenimientoVehiculos from './pages/MantenimientoVehiculos';
import Tramos from './pages/Tramos';
import Bloqueos from './pages/GestionBloqueos';
import SimulacionA7Dias from './pages/SimulacionA7Dias';
import SimulacionHastaElColapso from './pages/SimulacionHastaElColapso';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#291061',
      dark: '#1b0a41',
      light: '#51368c',
      gray: ''
    },
    secondary: {
      main: '#cb1959',
      light: '#e45a8d',
      dark: '#831039',
    },
    text: {
      primary: '#000000',
      secondary: '#575757',
      light: '#ffffff',
    },
  },
});

function App() {
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
          <Sidebar/>
          <Box sx={{ bgcolor: '#F8F8F8', height: '100vh', width: '100vw'}}>
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/gestion-de-pedidos' element={<GestionPedidos />} />
              <Route path='/operaciones-dia-a-dia' element={<OperacionesDiaADia />} />
              <Route path='/gestion-del-transporte/Gestion-de-vehiculos' element={<GestionVehiculos />} />
              <Route path='/gestion-del-transporte/Mantenimiento-de-vehiculos' element={<MantenimientoVehiculos />} />
              <Route path='/gestion-del-transporte/Gestion-de-tramos' element={<Tramos />} />
              <Route path='/gestion-del-transporte/Gestion-de-bloqueos' element={<Bloqueos />} />
              <Route path='/simulaciones/simulacion-a-7-dias' element={<SimulacionA7Dias />} />
              <Route path='/simulaciones/simulacion-hasta-el-colapso' element={<SimulacionHastaElColapso />} />
            </Routes>
          </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
