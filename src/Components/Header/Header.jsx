import React from 'react'
import { Box, Typography, useTheme } from '@mui/material';


export default function Header({title,subtitle}) {
    const theme=useTheme()
  return (
    <>
   <Box mb={1}>
    <Typography fontSize={26} mb={1} color={theme.palette.primary.dark}>{title}</Typography>
    <Typography>{subtitle}</Typography>
    </Box>
    </>
  )
}
