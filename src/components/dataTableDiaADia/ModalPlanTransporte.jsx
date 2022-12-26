import React, { useContext, useEffect, useState, useMemo } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import ClockContext from "../../context/clockContext";
import { Title } from '..';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(139deg, rgba(32,128,38,0.9868989832261029) 14%, rgba(44,184,62,0) 47%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        ' linear-gradient(99deg, rgba(14,200,26,0.9868989832261029) 100%, rgba(255,255,255,0) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.completed && {
    backgroundColor:
    'green',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      <LocationOnIcon />
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const ModalPlanTransporte = (props) => {

  const clock = useContext(ClockContext);
  const [ activeStep, setActiveStep ] = useState(0);
  const [ planTransporte, setPlanTransporte ] = useState([]);
  
  let cargaAcum = useMemo(() => {
   return props.plan?.camion.cargaAcumulada;
  }, [props.plan]);

  useEffect(() => {
    if(props.plan){
      let preparacionPlan = [];
      for(let i=0; i < props.plan.ciudades.length; i++){
        preparacionPlan.push({
          indice: i,
          ciudad: props.plan.ciudades[i],
          salida: new Date(props.plan.salida[i]),
          llegada: new Date(props.plan.llegada[i]),
          cargaAcumulada: props.plan.camion.cargaAcumulada
        })
      }
      setPlanTransporte(preparacionPlan);
  
      let iter = 0;
      if(props.plan){
        while(iter < props.plan.salida.length){
          if(clock.value.getTime() < new Date(props.plan.llegada[iter]).getTime()){
            setActiveStep(iter);
            break;
          }
          iter++;
        }
      }
    }
  }, [props.plan]) 

  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={props.open} 
        onClose={props.onClose}
        TransitionComponent={Transition}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >

        <DialogTitle style={{ cursor: 'move' }}>
          <Box sx={{ p:'1rem', display: 'flex', justifyContent: 'center' }}>
            <Title text={'Plan de Transporte'}></Title>
          </Box>
        </DialogTitle>
        
        {props.plan && (
          <DialogContent>
            <Box sx={{ maxWidth: '100%' }}>
              <Stepper  
                connector={<ColorlibConnector />}
                activeStep={activeStep} 
                alternativeLabel
              >
                {planTransporte.map((nodo, index) => {
                  
                  // Calculamos el numero de paquetes que debe entregar en este nodo:
                  let pkts = 0;
                  for(let i=0; i<props.plan.camion?.entregas.length; i++){
                    if(cargaAcum > 0){
                      // console.log(props.plan.camion?.entregas[i].pedido.destino.ubigeo);
                      if(props.plan.camion?.entregas[i].pedido.destino.ubigeo === nodo.ciudad.ubigeo){
                        pkts += props.plan.camion?.entregas[i].numPaquetes;
                        cargaAcum -= props.plan.camion?.entregas[i].numPaquetes;
                      }
                    }
                  }
                  
                  return (<Step key={index} expanded>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      {`${nodo.ciudad.nombre} (${nodo.ciudad.ubigeo})`}
                    </StepLabel>

                    <Box sx={{ p: '1rem' }}>
                      {(nodo.indice !== 0) && <li style={{ paddingBottom: '1rem'}}>
                        {`Llegada: ${nodo.llegada.toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          second: "numeric",
                          hour24: true,
                        })} hrs`}
                      </li>}
                      
                      {(nodo.indice !== props.plan.ciudades.length-1) && <li style={{ paddingBottom: '1rem'}}>
                        {`Salida: ${nodo.salida.toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          second: "numeric",
                          hour24: true,
                        })} hrs`}
                      </li>}

                      <div style={{ textAlign: 'center' }}>
                      <strong>{`Paquetes a dejar: ${pkts}`}</strong>
                      </div>
                    </Box>
                  </Step>
                  )
                })}
              </Stepper>
            </Box>
          </DialogContent>
        )}
        
        <Box sx={{ p:'1rem', display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            size="large" 
            startIcon={<CloseFullscreenIcon />} 
            onClick={props.onClose}
            >
            Cerrar
          </Button>
        </Box>

      </Dialog>
    </Box>
  );
}

export default ModalPlanTransporte;