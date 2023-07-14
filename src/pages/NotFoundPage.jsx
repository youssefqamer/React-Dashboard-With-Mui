import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function NotFoundPage() {
    const theme=useTheme()
  return (
    <>
        <Box>
      <Typography align="center" color={theme.palette.error.main} variant="h5">
        Error 404
        <br />
        <br />
       Page Not Found
      </Typography>
    </Box>
    
    </>
  )
}
