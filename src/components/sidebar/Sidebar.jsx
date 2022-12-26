import React, { useState } from 'react';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { Link } from "react-router-dom";

import logo from '../../assets/OdiMapsLogo.png';

const drawerWidth = 240;

const Sidebar = () => {

  const [openTran, setOpenTran] = useState(false);
  const [openSim, setOpenSim] = useState(false);

  const handleClickExpandTran = () => {
    setOpenTran(!openTran);
  };

  const handleClickExpandSim = () => {
    setOpenSim(!openSim);
  };

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'primary.main',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{p: '0.8rem'}}>
          <Link to={'/'} style={{textDecoration: 'none'}}>
            <img src={logo} alt='OdiMaps Logo'/>
          </Link>
        </Box>
        <List>
          <>
            <Divider sx={{bgcolor: 'primary.light'}}/>
            <Link to={'gestion-de-pedidos'} style={{textDecoration: 'none'}}>
              <ListItem key={'gestion-de-pedidos'} disablePadding sx={{color: 'text.light'}}>
                  <ListItemButton sx={{'&:hover': { bgcolor: 'primary.light'}}}>
                    <ListItemText primary={'Gestión de Pedidos'}/>
                  </ListItemButton>
              </ListItem>
            </Link>
          </>

          <Divider sx={{bgcolor: 'primary.light'}}/>

          <Link to={'operaciones-dia-a-dia'} style={{textDecoration: 'none'}}>
            <ListItem key={'operaciones-dia-a-dia'} disablePadding sx={{color: 'text.light'}}>
                <ListItemButton sx={{'&:hover': { bgcolor: 'primary.light'}}}>
                    <ListItemText primary={'Operaciones Día a Día'}/>
                </ListItemButton>
            </ListItem>
          </Link>

          <Divider sx={{bgcolor: 'primary.light'}}/>

          <ListItem key={'gestion-del-transporte'} disablePadding sx={{color: 'text.light'}}>
            <ListItemButton onClick={handleClickExpandTran} sx={{'&:hover': { bgcolor: 'primary.light'}}}>
              <ListItemText primary={'Gestión del Transporte'}/>
              {openTran ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
          </ListItem>
          <Collapse in={openTran} timeout="auto" unmountOnExit>
            <List>
              {['Gestion-de-vehiculos', 'Mantenimiento-de-vehiculos', 'Gestion-de-tramos', 'Gestion-de-bloqueos'].map((text) => (
                <Link key={text} to={'gestion-del-transporte/' + text} style={{textDecoration: 'none'}}>
                  <ListItem disablePadding sx={{color: 'text.light'}}>
                    <ListItemButton sx={{'&:hover': { bgcolor: 'primary.light'}}}>
                      <ListItemText primary={text.replaceAll('-', ' ')} sx={{pl: '1.2rem'}}/>
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Collapse>

          <Divider sx={{bgcolor: 'primary.light'}}/>

          <ListItem key={'simulaciones'} disablePadding sx={{color: 'text.light'}}>
            <ListItemButton onClick={handleClickExpandSim} sx={{'&:hover': { bgcolor: 'primary.light'}}}>
              <ListItemText primary={'Simulaciones'}/>
              {openSim ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
          </ListItem>
          <Collapse in={openSim} timeout="auto" unmountOnExit>
            <List>
              <Link to={'simulaciones/simulacion-a-7-dias'} style={{textDecoration: 'none'}}>
                <ListItem key={'simulacion-a-7-dias'} disablePadding sx={{color: 'text.light'}}>
                  <ListItemButton sx={{'&:hover': { bgcolor: 'primary.light'}}}>
                    <ListItemText primary={'A 7 Días'} sx={{pl: '1.2rem'}}/>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={'simulaciones/simulacion-hasta-el-colapso'} style={{textDecoration: 'none'}}>
                <ListItem key={'simulacion-hasta-el-colapso'} disablePadding sx={{color: 'text.light'}}>
                  <ListItemButton sx={{'&:hover': { bgcolor: 'primary.light'}}}>
                    <ListItemText primary={'Hasta el colapso'} sx={{pl: '1.2rem'}}/>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Collapse>

          <Divider sx={{bgcolor: 'primary.light'}}/>

        </List>
      </Drawer>
    </>
  )
}

export default Sidebar;