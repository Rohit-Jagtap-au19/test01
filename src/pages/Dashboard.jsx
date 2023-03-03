import React from 'react'
import Box from '@mui/material/Box';

import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'


export default function Dashboard() {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1>Soon Dashboard will be here</h1>
      </Box>
    </Box>
    </>
  )
}
