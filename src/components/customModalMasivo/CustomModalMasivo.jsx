import React, { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { Title } from "..";
import { postPedidosMasivo } from "../../services/pedidos";
import { postCamionesMasivo } from "../../services/camiones";
import { postBloqueosMasivo } from "../../services/bloqueos";
import { postAccidentesMasivo } from "../../services/accidentes";
import { postMantenimientosMasivo } from "../../services/mantenimientos";
import CheckIcon from "@mui/icons-material/Check";

const CustomModalMasivo = (props) => {
  useEffect(() => {}, []);

  const handleClose = () => {
    props.onClose(false);
  };

  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("warning");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertBody, setAlertBody] = useState("");
  const [loading2, setLoading2] = useState(false);

  const handleSubmitFiles = async () => {
    setLoading2(true);

    if (props.titulo.includes("ventas")) {
      //console.log("estamos en pedidos");
      try {
        const paquete = {
          pedidos: props.arregloServicio,
        };
        //console.log(paquete);
        const response = await postPedidosMasivo(paquete.pedidos);
        //console.log(response);
        props.onClose(0);
      } catch (error) {
        console.log(error);
        props.onClose(1);
      }
    }

    if (props.titulo.includes("flota")) {
      //console.log("estamos en camiones");
      try {
        const paquete = {
          camiones: props.arregloServicio,
        };
        //console.log(paquete);
        const response = await postCamionesMasivo(paquete.camiones);
        //console.log(response);
        props.onClose(0);
      } catch (error) {
        console.log(error);
        props.onClose(1);
      }
    }

    if (props.titulo.includes("bloqueo")) {
      //console.log("estamos en bloqueos");
      try {
        const paquete = {
          bloqueos: props.arregloServicio,
        };
        //console.log(paquete);
        const response = await postBloqueosMasivo(paquete.bloqueos);
        //console.log(response);
        props.onClose(0);
      } catch (error) {
        console.log(error);
        props.onClose(1);
      }
    }

    if (props.titulo.includes("accidentes")) {
      //console.log("estamos en accidentes");
      try {
        const paquete = {
          accidentes: props.arregloServicio,
        };
        //console.log(paquete);
        const response = await postAccidentesMasivo(paquete.accidentes);
        //console.log(response);
        props.onClose(0);
      } catch (error) {
        console.log(error);
        props.onClose(1);
      }
    }

    if (props.titulo.includes("mantenimientos")) {
      //console.log("estamos en mantenimientos");
      try {
        const paquete = {
          mantenimientos: props.arregloServicio,
        };
        //console.log(paquete);
        const response = await postMantenimientosMasivo(paquete.mantenimientos);
        //console.log(response);
        props.onClose(0);
      } catch (error) {
        console.log(error);
        props.onClose(1);
      }
    }
    setLoading2(false);
    handleClose();
  };

  return (
    <Box>
      <Dialog
        open={props.open}
        onClose={handleClose}
        PaperProps={{ sx: { width: "50rem", height: "44rem" } }}
      >
        <DialogTitle>
          <Title text={props.encabezado}></Title>
        </DialogTitle>

        <TextField
          id="outlined-basic"
          label="Titulo del archivo leído"
          value={props.titulo}
          style={{ marginInline: "2rem", marginBottom: "0.5rem" }}
          variant="outlined"
        />

        <textarea
          value={props.pedidos}
          style={{
            height: "30rem",
            marginInline: "2rem",
            fontSize: 15,
            marginBottom: "0.5rem",
          }}
        ></textarea>
        <LoadingButton
          size="large"
          loading={loading2}
          loadingPosition="start"
          startIcon={<CheckIcon />}
          onClick={handleSubmitFiles}
          style={{ marginInline: "2rem", width: "33.5rem" }}
        >
          Registrar
        </LoadingButton>
      </Dialog>
    </Box>
  );
};

export default CustomModalMasivo;
