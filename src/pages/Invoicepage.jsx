import React from 'react'
import { Box, Grid } from '@mui/material';
import { columns, rows } from '../Components/invoices/InvoicesData';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from '../Components/Header/Header';

export default function Invoicepage() {
  return (
    <>
       <Header title={'Invoives'} subtitle={'List of invoice balance'}/>
    <Grid container  >
        <Grid item xs={11} sx={{margin:'auto'}}>
        <DataGrid rows={rows} columns={columns}
       checkboxSelection
       slots={{
        toolbar: GridToolbar,
      }}
       />
    
        </Grid>
    </Grid>
    </>
  )
}
