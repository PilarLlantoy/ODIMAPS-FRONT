import React from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';

const CustomAlert = (props) => {

  return (
    <Collapse in={props.open}>
      <Alert severity={props.severity}
        sx={{ mb: 2 }}
      >
      <AlertTitle>{props.title}</AlertTitle>
        {props.body}
      </Alert>
    </Collapse>
  )
}

export default CustomAlert;