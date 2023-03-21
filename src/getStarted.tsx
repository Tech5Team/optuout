import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { JsxElement } from 'typescript';


export default function getStarted(): React.ReactElement{

    return (
    <Stack direction ="row" spacing = {2} style={{ marginTop: '25px', alignItems: "center", justifyContent: "center"}}>
        
        <TextField 
        label = "Input your Name:" 
        autoFocus
        variant = "filled"
        color = "secondary" 
        style = {{width: 500}} 
        sx ={{input: {color: 'white'}}}
        >
        </TextField>
        <Button 
        variant = "contained" 
        color = "secondary"
        
        >
            Get Started
            </Button>
    </Stack>
    )
}

