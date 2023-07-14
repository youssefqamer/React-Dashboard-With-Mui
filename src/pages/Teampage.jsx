import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { rows } from '../Components/Team/TeamData'
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from '../Components/Header/Header';
export default function Teampage() {
  let theme=useTheme()

  const columns= [
    { field: 'id', headerName: 'Id',width:33,headerAlign:'center', align:'center'},
    { field: 'name', headerName: 'Name', flex:1,headerAlign:'center', align:'center'},
    { field: 'email', headerName: 'Email', flex:1,headerAlign:'center', align:'center'},
    { field: 'age', headerName: 'Age',flex:1,headerAlign:'center', align:'center'},
    { field: 'phone', headerName: 'Phone',flex:1,headerAlign:'center', align:'center' },
    { field: 'access', headerName: 'Access', flex:1,headerAlign:'center', align:'center',
   renderCell:({row:{access}})=>{
       return(
           <Box sx={{
               p:'5px',
              //  width:'99px',
               borderRadius:'3px',
               textAlign:'center',
               display:'flex',
               justifyContent:'space-evenly',
               color:'white',
               backgroundColor:access==='Admin'?theme.palette.primary.dark:
               access==='Manager'?theme.palette.secondary.dark:'#3da58a'
               
           }}>
            {access==='Admin'&&<AdminPanelSettingsOutlined fontSize='small'/>}
            {access==='Manager'&&<LockOpenOutlined fontSize='small'/>}
            {access==='User'&&<SecurityOutlined fontSize='small'/>}
               <Typography fontSize={'13px'}>{access}</Typography>
           </Box>
       )
   }},
  ];
  return (
    <>
    <Header title={'Team'} subtitle={'Managing the team member'}/>
      <Grid container  sx={{margin:'auto'}}>
        <Grid item xs={11} sx={{margin:'auto'}}>
      <DataGrid rows={rows} columns={columns} />
        </Grid>
    </Grid>
    
    </>
    )
}
