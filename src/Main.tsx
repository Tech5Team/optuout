import React from 'react';
import './Main.css';
import getStarted from './getStarted';
import displayCard from './displayCard';
import toolBar from './toolbar';
import bottomNav from './bottomBar';
import { Box, Stack, Typography, Grid } from '@mui/material';



function Main() {
  return (
    
    <div className="Main">
      {toolBar()}
      <header className="Main-header">

        
     
            <Stack spacing={2}>
                <Typography variant = "h2">Opt-U-Out</Typography>
                
            </Stack>
             
      </header>
      
      <body className="Main-body">
        
        {getStarted()}


        <Grid container>

        <Box m={10}display = "flex" justifyContent = "space-between">
        <Grid container spacing ={10} className = "left-paragraph">
          
        <Grid item>

        

        <Typography variant = "h4">You have the right to choose what's out there for anyone to see.</Typography>
        <Typography variant = "h6" style={{marginTop: '25px', marginLeft: '50px'}}>Our mission is to protect your privacy by helping you remove your info from people search websites. </Typography>
        
        </Grid>

        <Grid item>

        <Typography variant = "h4">How it works</Typography>
        
        <Typography variant = "h6" style={{marginTop: '25px', marginLeft: '50px'}}>1. Enter your name and either your phone number or address</Typography>
        <Typography variant = "h6" style={{marginTop: '25px', marginLeft: '50px'}}>2. If your info exists on people search sites, we'll help you remove it</Typography>
        
        </Grid>

        </Grid>

        
        </Box>
        <div className="laptop">
				<img src="laptop.png" alt="Laptop">
          </img>
				<div id="image" ></div>
			</div>

        </Grid>

        
      </body>
      {bottomNav()}
    </div>
    
  );
}


export default Main;
