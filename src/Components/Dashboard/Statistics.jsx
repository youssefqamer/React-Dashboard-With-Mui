import { useTheme } from '@emotion/react'
import { Box, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import LineChartUi from './../LineChart/LineChartUi';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import { Transactions } from './PieCardData';
export default function Statistics() {
  const theme=useTheme()
  return (
    <>
    <Grid container spacing={2} mt={2}>
     <Grid item md={6} xs={11}>
      <Paper >
        <Stack direction={'row'} justifyContent={'space-between'} flexWrap={'wrap'}>
          <Box>
      <Typography color={theme.palette.secondary.main} mt={1} mb={2} ml={4} variant='h6'>
        Revenu Generated
      </Typography>
            <Typography variant='body2' ml={4}>$53.234.63</Typography>
          </Box>
          <Box>
<IconButton sx={{mr:3}}>
  <DownloadForOfflineOutlinedIcon/>
</IconButton>
          </Box>
        </Stack>
      <LineChartUi isDashboard={true}/>

      </Paper>
      
     </Grid>
     <Grid item md={6} xs={11}>
     <Box
        sx={{
          overflow: "auto",
          borderRadius: "4px",
         
          maxHeight: 355,
          
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
     </Grid>
     
    </Grid>
    </>
  )
}
