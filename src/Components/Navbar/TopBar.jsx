
import React, { useContext } from 'react';
import { Box, IconButton, Stack, Toolbar, useTheme } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import Search from './Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { themeContext } from '../Context/Store';


export default function TopBar({ open, handleDrawerOpen }) {
  let {toggleMode}=useContext(themeContext)
  const theme = useTheme();
  const drawerWidth = 240;
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <>
      <AppBar position="fixed" open={open ? 1 : 0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Search/>
          <Box flexGrow={1}/>
          <Stack direction={'row'}>
          
        
       {theme.palette.mode === "light"? <IconButton  color='inherit' onClick={toggleMode}>
            <LightModeOutlinedIcon />
          </IconButton>:<IconButton  color='inherit' onClick={toggleMode}>
            <DarkModeOutlinedIcon />
          </IconButton>}
         
          
          <IconButton  color='inherit'>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton  color='inherit'>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton  color='inherit'>
            <Person2OutlinedIcon />
          </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
 

