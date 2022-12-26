import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import MapIcon from '@mui/icons-material/Map';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EnhancedTableHead from './EnhancedTableHead';
import ModalPlanTransporte from './ModalPlanTransporte';

const DataTableDiaADia = (props) => {

  const rows = props.rows;
  const headCells = props.headCells;

  const [ order, setOrder ] = useState('asc');
  const [ orderBy, setOrderBy ] = useState('idCamion');
  const [ selected, setSelected ] = useState([]);
  const [ openPlanTransporte, setOpenPlanTransporte ] = useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleOpenPlan = (row) => {
    setSelected([row]);
    setOpenPlanTransporte(true);
  };

  const handleClickRow = (row) => {
    setSelected([row]);
    props.onSelectedRow(row);
  }

  const isSelected = (row) => selected.indexOf(row) !== -1;

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  return (
    <Box sx={{ px: 2, width: props.customWidth, height: props.customHeight }} >

      <ModalPlanTransporte 
        open={openPlanTransporte}
        onClose={() => setOpenPlanTransporte(false)}
        plan={selected[0]}
      />

      <Paper sx={{ mb: 2 }}>
        <TableContainer
            sx={{ height: props.customHeight }}>
          <Table 
            stickyHeader
            aria-labelledby="tableTitle"
            size='small'
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
              size='small'
            />
            <TableBody>
              {rows.slice().sort(getComparator(order, orderBy))
                .map((row, index) => {

                  const isItemSelected = isSelected(row);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  let strEstado = 'Desconocido';
                  let colorEstado = 'blue';
                  if(row.camion.estado === 0){
                    strEstado = 'Disponible';
                    colorEstado = 'blue';
                  }
                  else if(row.camion.estado === 2) {
                    strEstado = 'En Mant.';
                    colorEstado = 'orange';
                  }
                  else if(row.camion.estado === 3) {
                    strEstado = 'Asignado';
                    colorEstado = 'green';
                  }

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                      onClick={() => handleClickRow(row)}
                      sx={{"&:hover": { cursor: 'pointer' }}}
                    >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="normal" 
                          align="center"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="normal" 
                          align="center"
                        >
                          {row.camion.codigo}
                        </TableCell>
                        <TableCell align="center" style={{ color: colorEstado }}>
                          <strong>{strEstado}</strong>
                        </TableCell>
                        <TableCell align="center">
                          <Button 
                            size="small"
                            onClick={() => handleOpenPlan(row)}
                            startIcon={<MapIcon></MapIcon>}
                            color="secondary"
                          >
                            Ver Plan
                          </Button>
                        </TableCell>
                        
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
       
      </Paper>
      
    </Box>

  );
}

export default DataTableDiaADia;