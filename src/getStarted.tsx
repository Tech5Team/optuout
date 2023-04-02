import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react'

import autoComplete from './autoComplete';
   
export default function GetStarted(){
    
    return (
    <Stack direction ="row" spacing = {2} style={{ marginTop: '25px', alignItems: "center", justifyContent: "center"}}>
        
        <TextField 
        label = "Enter your full Name:" 
        autoFocus
        variant = "filled"
        color = "secondary" 
        style = {{width: 500, zIndex: 10}} 
        >
        </TextField>

        {autoComplete()}
        <Button 
        variant = "contained" 
        color = "secondary"
        style = {{zIndex: 10}}
        >
            Get Started
            </Button>
    </Stack>
    )
}

