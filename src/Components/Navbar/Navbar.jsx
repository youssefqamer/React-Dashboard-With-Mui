import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './TopBar';
import SideBar from './SideBar';
import Masterlayout from '../../Masterlayout';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // 

  return (
    <>
    <CssBaseline />
    <TopBar open={open} handleDrawerOpen={handleDrawerOpen}/>
    <SideBar open={open} handleDrawerClose={handleDrawerClose}/>
    
    </>
    
  );
}





