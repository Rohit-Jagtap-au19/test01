import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { minWidth } from "@mui/system";
import Button from '@mui/material/Button'

export default function AddProduct({ CloseEvent }) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState("")
    const [category, setCategory] = useState("")

    const handleNameChange =(event)=>{
        setName(event.target.value)
    }
    const handleDateChange =(event)=>{
        setDate(event.target.value)
    }
    const handlePriceChange =(event)=>{
        setPrice(event.target.value)
    }
    const handleCategoryChange =(event)=>{
        setCategory(event.target.value)
    }
    const createUser =()=>{}
  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Add Products
      </Typography>
      <IconButton
        style={{ position: "absolute", right: "0", top: "0" }}
        onClick={CloseEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20}/>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            size="small"
            sx={{minWidth : "100%"}}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            size="small"
            type="number"
            onChange={handlePriceChange}
            value={price}
            sx={{minWidth : "100%"}}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="date"
            variant="outlined"
            size="small"
            value={date}
            onChange={handleDateChange}
            sx={{minWidth : "100%"}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            size="small"
            value={category}
            onChange={handleCategoryChange}
            sx={{minWidth : "100%"}}
          />
        </Grid>

        <Grid item xs={12}>
        <Typography variant="h5" align="center">
        <Button variant="contained" onClick={createUser}>
            Submit
        </Button>
      </Typography>
        </Grid>
      </Grid>
      <Box sx={{m : 4}}/>
    </>
  );
}
