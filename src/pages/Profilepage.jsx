import React from 'react'
import { Box, Stack, Typography, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Header from '../Components/Header/Header';

export default function Profilepage() {
  const theme =useTheme()
  const regEmail=
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp =
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const data = [
    {
      value: 'User',
      label: 'User',
    },
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Manager',
      label: 'Manager',
    },
   
  ];
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit=() =>{
    handleClick()
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  return (
   <>
      <Header title={'Create User'} subtitle={'Create a new user profile'}/>

 
   <Box
   onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display:'flex',
        flexDirection:'column',
        gap:3,
        mt:3
      }}
      noValidate
      autoComplete="off"
    >

      <Stack direction={'row'} gap={2}>
      <TextField  error={errors.firstName} helperText={errors.firstName?"required input && minlength 2 character":''}
       label="First Name" variant="filled" sx={{flex:1}}
       {...register("firstName", { required: true, minLength: 2, })} />


      <TextField error={errors.lastName} helperText={errors.lastName?"required input && minlength 2 character":''}
       label="Last Name" variant="filled" sx={{flex:1}}
       {...register("lastName", { required: true, minLength: 2, })}/>

      </Stack>
      <TextField error={errors.email} helperText={errors.email?"please enter a valid email":''}
       label="Email" variant="filled" sx={{flex:1}}
       {...register("email", { required: true, pattern:regEmail })}/>
      <TextField error={errors.phone} helperText={errors.phone?"please enter a valid phone numner":''}
       label="Phone Number" variant="filled" sx={{flex:1}}
       {...register("phone", { required: true, pattern:phoneRegExp })}/>
      <TextField label="Adress1" variant="filled" />
      <TextField label="Adress2" variant="filled" />
      <TextField
       variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="Admin"
        >
          {data.map((option) => (
            <MenuItem  key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box textAlign={'right'}>
        <Button type='submit' variant='contained' sx={{textTransform:'capitalize'}}>create new user</Button>
        </Box>
    </Box>
    <Snackbar anchorOrigin={{ vertical:'top', horizontal:'right' }} open={open} autoHideDuration={1000} onClose={handleClose}
    transitionDuration={1000}>
  <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
  Account Created Successfully!
  </Alert>
</Snackbar>
   </>
  )
}
