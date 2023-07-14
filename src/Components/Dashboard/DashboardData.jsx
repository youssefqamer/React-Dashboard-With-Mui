import { Stack, useTheme } from '@mui/material'
import React from 'react'
import Card from './Card'
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from './PieCardData';
export default function DashboardData() {
    const theme=useTheme()
  return (
   <>
   <Stack direction={'row'} flexWrap={'wrap'} justifyContent={{xs:'center',sm:'space-between'}} gap={2} mt={2}>
  <Card icon={<EmailIcon fontSize='23px' sx={{color:theme.palette.secondary.main}}/>} title={'12.365'} subtitle={'Email Sent'} data={data1} increase={'+14'} scheme={'nivo'}/>
  <Card icon={<PointOfSaleIcon fontSize='23px' sx={{color:theme.palette.secondary.main}}/>} title={'431.235'} subtitle={'Sales Obtained'} data={data2} increase={'+21'} scheme={'category10'}/>
  <Card icon={<PersonAddIcon fontSize='23px' sx={{color:theme.palette.secondary.main}}/>} title={'32.44'} subtitle={'New Clinets'} data={data3} increase={'+5'} scheme={'accent'}/>
  <Card icon={<TrafficIcon fontSize='23px' sx={{color:theme.palette.secondary.main}}/>} title={'1.325.4858'} subtitle={'Traffic Recieved'} data={data4} increase={'+43'} scheme={'dark2'}/>
   </Stack>
   </>
  )
}
