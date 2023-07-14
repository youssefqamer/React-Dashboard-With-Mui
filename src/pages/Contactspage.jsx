import { Box, Grid } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { columns, rows } from '../Components/Contacts/ContactsData'
import Header from '../Components/Header/Header'

export default function Contactspage() {
  return (
    <>
    <Header title={'Contacts'} subtitle={'List of contacts for future refrences'}/>
    <Grid container  >
        <Grid item xs={11} sx={{margin:'auto'}}>
        <DataGrid rows={rows} columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
        </Grid>
    </Grid>
    </>
  )
}
