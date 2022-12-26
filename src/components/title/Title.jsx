import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

const GestionPedidos = (props) => {
  const {text} = props;
  
  return (
    <Box sx={{ pb: '0.5rem' }}>
      <Divider textAlign="left" sx={{ 
        '& .css-cppmpw-MuiDivider-root::before': {
          width: '2%',
        }
       }}>
        <Typography variant="h6" sx={{ px: '1rem' }}>{text}</Typography>
      </Divider>      
    </Box>
  )
}

export default GestionPedidos;