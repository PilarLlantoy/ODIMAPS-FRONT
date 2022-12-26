import React from 'react';

import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { CustomImageButton } from '../components'; 

const Inicio = () => {
  return (
    <Box sx={{ 
      p: '2.0rem', 
      textAlign: 'center', 
      display: { sm: 'block' },
    }}>
      <Box sx={{ display: 'grid' }}>
        <h1 style={{ textAlign: 'center' }}>
          ¡Bienvenido a OdiMaps!
        </h1>
        <h3 style={{ textAlign: 'center' }}>
          Aquí podrás...
        </h3>

        <Box 
          class="parent"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          <div style={{ padding: '0.5rem' }}>
            <h3 style={{ padding: '1rem', color: '#491DAC', margin: 0 }}>
              Gestionar los pedidos de los clientes
            </h3>

            <Link to={'gestion-de-pedidos'} style={{textDecoration: 'none'}}>
              <CustomImageButton 
                url='https://retos-operaciones-logistica.eae.es/wp-content/uploads/2020/09/sistema-de-pedidos.jpg'
                title='Gestión de Pedidos'
              />
            </Link>
          </div>

          <div style={{ padding: '0.5rem' }}>
            <h3 style={{ padding: '1rem', color: '#491DAC', margin: 0 }}>
              Visualizar las operaciones del negocio.
            </h3>

            <Link to={'operaciones-dia-a-dia'} style={{textDecoration: 'none'}}>
              <CustomImageButton 
                url='https://www.thestar.com/content/dam/thestar/business/2016/10/28/canadian-trucking-firm-transforce-expands-to-us-in-558m-deal-with-xpo/truck.jpg'
                title='Operaciones día a día'
              />
            </Link>
          </div>

          <div style={{ padding: '0.5rem' }}>
            <h3 style={{ padding: '1rem', color: '#491DAC', margin: 0 }}>
              Gestionar vehículos, información sobre tramos y programación de mantenimientos
            </h3>

            <Link to={'gestion-del-transporte/Gestion-de-vehiculos'} style={{textDecoration: 'none'}}>
              <CustomImageButton 
                url='https://www.organicauthority.com/.image/t_share/MTU5MzMwMDE4MTg2NzAwMzg0/delivery-truck-runs-on-food-waste.jpg'
                title='Gestión de Vehículos'
              />
            </Link>

            <Link to={'gestion-del-transporte/Mantenimiento-de-vehiculos'} style={{textDecoration: 'none'}}>
              <CustomImageButton 
                url='https://managedmobile.com/wp-content/uploads/2017/08/managed-mobile-truck-repair-maintenance.jpg'
                title='Mantenimiento de Vehículos'
              />
            </Link>

            <Link to={'gestion-del-transporte/Gestion-de-tramos'} style={{textDecoration: 'none'}}>
              <CustomImageButton 
                url='https://www.ukconstructionmedia.co.uk/wp-content/uploads/shutterstock_726461932.jpg'
                title='Gestión de Tramos'
              />
            </Link>
          </div>

          <div style={{ padding: '0.5rem' }}>
            <h3 style={{ padding: '1rem', color: '#491DAC', margin: 0 }}>
              Realizar simulaciones
            </h3>

            <Link to={'simulaciones/simulacion-a-7-dias'} style={{textDecoration: 'none'}}>
              <CustomImageButton 
                url='https://previews.123rf.com/images/pisanku/pisanku1803/pisanku180300688/98527772-mapa-de-ruta-de-entrega-para-imagen-de-vector-de-fondo-de-cami%C3%B3n.jpg'
                title='A 7 días'
              />
            </Link>
            <Link to={'simulaciones/simulacion-hasta-el-colapso'} style={{textDecoration: 'none'}}>
              <CustomImageButton 
                url='https://static.vecteezy.com/system/resources/previews/002/538/979/non_2x/traffic-concept-drawing-vector.jpg'
                title='Hasta el colapso'
              />
            </Link>

          </div>
        </Box>
      </Box>
    </Box>
  )
}

export default Inicio;