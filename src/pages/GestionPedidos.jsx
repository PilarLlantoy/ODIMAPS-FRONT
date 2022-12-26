import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';  
import AddIcon from '@mui/icons-material/Add'; 
import { DataTablePedidos, Title, CustomModalPedidos, FileInput, CustomAlert, CustomModalMasivo } from '../components';
import { getPedidos } from '../services/pedidos';

const headCells = [
  {
    id: 'codigo',
    label: 'Código',
  },
  {
    id: 'fechaRegistro',
    label: 'Fecha de Registro',
  },
  {
    id: 'almacen',
    label: 'Almacén de origen',
  },
  {
    id: 'destino',
    label: 'Destino',
  },
  {
    id: 'numPaquetes',
    label: 'Número de paquetes',
  },
  /*
  {
    id: 'estado',
    label: 'Estado',
  },*/
  {
    id: 'fechaEntrega',
    label: 'Fecha de Entrega',
  },/*
  {
    id: 'tipo',
    label: 'Tipo',
  },*/
];

const GestionPedidos = () => {

  let texto = "";
  let titulo = "";
  const [ openNuevoPedido, setOpenNuevoPedido ] = useState(false);
  const [ rows, setRows ] = useState([]);
  const [ filasPedidos, setFilasPedidos ] = useState();
  const [ textoIngresado, setTextoIngresado ] = useState([]);
  const [ tituloIngresado, setTituloIngresado ] = useState([]);
  const [ openPedidosMasivos, setOpenPedidosMasivo ] = useState(false);
  const [ openAlert, setOpenAlert ] = useState(false);
  const [ alertSeverity, setAlertSeverity ] = useState('warning');
  const [ alertTitle, setAlertTitle ] = useState('');
  const [ alertBody, setAlertBody ] = useState('');

  const [ loading, setLoading ] = useState(false);
  
  const obtenerPedidosDeServicio = async () => {

    setLoading(true);

    try {
      const response = await getPedidos();
      setRows(response.data);
    }
    catch (error) {
      setAlertSeverity('error')
      setAlertTitle('Error al listar los pedidos');
      setAlertBody(error.message);

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }

    setLoading(false);
  }
  
  useEffect(() => {
    obtenerPedidosDeServicio();
  }, [])

  const handleOpenNuevoPedido = () => {
    setOpenNuevoPedido(true);
  }

  const handleCloseNuevoPedido = (status) => {
    setOpenNuevoPedido(false);
    
    if(status === 0){
      obtenerPedidosDeServicio();
      setAlertSeverity('success')
      setAlertTitle('Éxito');
      setAlertBody('El pedido ha sido registrado exitosamente');

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
  }

  const handleFileSelect = (file) => {

    if (!file) return console.log("The user did not enter a valid file");

    let esVentas;
    let listaPedidos = []; 
    

    if (file.name.includes('ventas')) {
      esVentas = true;
      // setFilePedidosName(file.name);
      titulo = titulo + file.name;
    }

    if (esVentas) {
      // console.log('leyendo ventas');
      const reader = new FileReader();
      reader.onload = (event) => {
        const file = event.target.result;
        const allLines = file.split(/\r\n|\n/);
        // Reading line by line
        allLines.forEach((line) => {
          listaPedidos.push(line);
          texto = texto + line + "\n"; 
        }); 
        setTextoIngresado(texto); 
        setTituloIngresado(titulo); 
      };
      
      reader.onerror = (event) => {
        alert(event.target.error.name);
      };
      reader.readAsText(file);
      setFilasPedidos(listaPedidos);
    } 
    console.log("imprimiendo antes");
    handleOpenPedidosMasivo();  
  }

  const handleOpenPedidosMasivo = () => {
    setOpenPedidosMasivo(true);
    //console.log("ABRIENDO");
  }

  const handleClosePedidosMasivo = (status) => {
    setOpenPedidosMasivo(false);

    console.log(status, "status");

        if (status === 0) {
            obtenerPedidosDeServicio();
            setAlertSeverity('success')
            setAlertTitle('Éxito');
            setAlertBody('Los pedidos han sido registrados exitosamente');

            setOpenAlert(true);
            setTimeout(() => {
                setOpenAlert(false);
            }, 5000);
        } 
        if (status === 1) {
            setAlertSeverity('error')
            setAlertTitle('Error');
            setAlertBody('Error al cargar el archivo de pedidos');

            setOpenAlert(true);
            setTimeout(() => {
                setOpenAlert(false);
            }, 5000);
        }
  }

  return (
    <Box sx={{ p: '2.0rem' }}>
      <Title text={'Gestión de Pedidos'}></Title>
      <Box sx={{ py: '1rem', display: 'flex', justifyContent: 'space-between' }}>

        <Button
          sx={{ marginBottom: '0.5rem' }}
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenNuevoPedido}>
          Nuevo Pedido
        </Button>

        <CustomModalPedidos
          open={openNuevoPedido}
          onClose={handleCloseNuevoPedido}
        />

        <CustomModalMasivo 
          open={openPedidosMasivos}
          onClose={handleClosePedidosMasivo}
          pedidos={textoIngresado}
          titulo={tituloIngresado}
          encabezado={"Carga Masiva de Pedidos"}
          arregloServicio={filasPedidos}
        />

        <Box sx={{alignItems: 'right'}}>
          <FileInput onFileSelect={handleFileSelect} >
            Cargar archivo de pedidos
          </FileInput>
        </Box>


      </Box>

      
      <Box sx={{ width: '100%', py: '0.5rem' }}>
        <CustomAlert 
          open={openAlert} 
          severity={alertSeverity} 
          title={alertTitle}
          body={alertBody}
        />
      </Box>

      {!loading ? (<DataTablePedidos rows={rows} headCells={headCells}></DataTablePedidos>) : <div>Cargando...</div>}

    </Box>
  )
}

export default GestionPedidos;