import React from 'react'
import { Box, Button } from '@mui/material';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import DashboardData from '../Components/Dashboard/DashboardData';
import Statistics from '../Components/Dashboard/Statistics';
import Charts from '../Components/Dashboard/Charts';
import Header from '../Components/Header/Header';
export default function Dashboardpage() {
  return (
    <>
    <Header title={'Dashboard'} subtitle={'Welcome to your dashboard'}/>
    <Box sx={{textAlign:'right'}}>

    <Button variant='contained' color='primary' textAlign={{xs:'left',sm:'right'}}>
      <DownloadForOfflineOutlinedIcon/>
      Download Reports
    </Button>
    </Box>
    <DashboardData/>
    <Statistics/>
    <Charts/>
    </>
  )
}
