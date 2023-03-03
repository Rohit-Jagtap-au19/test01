import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Navbar from '../components/Navbar'
import Sidenav from '../components/Sidenav'

export default function Settings() {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>Settings</h1>
      </Box>
    </Box>
    </>
  )
}
