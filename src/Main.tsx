import React from 'react';
import './Main.css';
import getStarted from './getStarted';
import displayCard from './displayCard';

import { Grid,Stack, Typography } from '@mui/material';



function Main() {
  return (
    
    <div className="Main">
      <header className="Main-header">
        
            <Stack spacing={2}>
                <Typography variant = "h2">Opt-U-Out</Typography>
                <Typography variant = "h6">Presented by:</Typography>
                <Typography variant = "h3">TECH FIVE</Typography>
            </Stack>
      
      </header>
      <body className="Main-body">
        
        {getStarted()}


        <Grid display={'flex'}>

        <Stack spacing ={10} className = "left-paragraph">
          
        <Stack>

        

        <Typography variant = "h4">You have the right to choose what's out there for anyone to see.</Typography>
        <Typography variant = "h6" style={{marginTop: '25px', marginLeft: '50px'}}>Our mission is to protect your privacy by helping you remove your info from people search websites. </Typography>
        
        </Stack>

        <Stack>

        <Typography variant = "h4">How it works</Typography>
        <Typography variant = "h6" style={{marginTop: '25px', marginLeft: '50px'}}>1. Enter your name and either your phone number or address</Typography>
        <Typography variant = "h6" style={{marginTop: '25px', marginLeft: '50px'}}>2. If your info exists on people search sites, we'll help you remove it</Typography>
        
        </Stack>

        </Stack>

        {displayCard()}



        </Grid>

        
      </body>
    </div>
  );
}


export default Main;
