import React from 'react'
import List from '@mui/material/List';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { ContactsOutlined, HomeOutlined, PeopleOutline, ReceiptOutlined } from '@mui/icons-material';
import { Avatar, Box, Tooltip, Typography } from '@mui/material';
import AdminImage from '../../Images/images.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
export default function Sidebar({open,handleDrawerClose}) {
      const theme = useTheme();
      const navigate=useNavigate()
      const location=useLocation()
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
const drawerWidth = 240;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  let list1=[
    {text:'Dashboard',icon:<HomeOutlined/>, path:'/'},
    {text:'Mange Team',icon:<PeopleOutline/>, path:'/team'},
    {text:'Contacts Information',icon:<ContactsOutlined/>, path:'/contacts'},
    {text:'Invoice Balance',icon:<ReceiptOutlined/>, path:'/invoices'},
  ]
  const list2 = [
    { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
    {
      text: "FAQ Page",
      icon: <HelpOutlineOutlinedIcon />,
      path: "/faq",
    },
  ];
  
  const list3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
    { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
  ];
  return (
   <>
         <Drawer variant="permanent" open={open}>
         <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box sx={{margin:'0 auto',my:1}} >
        <Avatar alt="Admin" src={AdminImage} 
        sx={{border:'2px solid grey'
        ,ml:1,
        width:open?70:44,
        height:open?70:44,
        transition:'.2s'}} />
        <Box sx={{ml:open?1:0,transition:'.2s'}} >
        <Typography fontSize={open?17:0}>Youssef</Typography>
          <Typography color={theme.palette.info.main} fontSize={open?14:0} sx={{ml:1}}>Admin</Typography>
        </Box>
        </Box>
        <Divider />
        <List>
          {list1.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>

<Tooltip title={open?null:item.text} placement='left' arrow>
<ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor:location.pathname===item.path?theme.palette.mode==='dark'?grey[800]:grey[400] :null
                }}
                onClick={()=>navigate(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
  </Tooltip>
              
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {list2.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
  <Tooltip title={open?null:item.text} placement='left' arrow>
<ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor:location.pathname===item.path?theme.palette.mode==='dark'?grey[800]:grey[400] :null
                }}
                onClick={()=>navigate(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
  </Tooltip>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List> 
          {list3.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
   <Tooltip title={open?null:item.text} placement='left' arrow>
<ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor:location.pathname===item.path?theme.palette.mode==='dark'?grey[800]:grey[400] :null
                }}
                onClick={()=>navigate(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
  </Tooltip>
            </ListItem>
          ))}
        </List>
      </Drawer>
   
   
   </>
  )
}
