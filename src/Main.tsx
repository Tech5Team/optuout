import './Main.css';
import GetStarted from './getStarted';
import toolBar from './toolbar';
import bottomNav from './bottomBar';
import { Box, Stack, Typography, Grid } from '@mui/material';
import { GoogleLogin} from '@react-oauth/google';
import { UserContext } from './context';
import { useContext } from 'react';




export default function Main() {

 
  return (
    
    <div className="Main">
      {toolBar()}
      <header className="Main-header">

            <Stack spacing={2}>
                <Typography variant = "h2">Opt-U-Out</Typography>
                
            </Stack>
             
      </header>
      
      <div className="Main-body">
        
       {GetStarted()}


        <Grid container>

        <Box m={10}display = "flex" justifyContent = "space-between">
        <Grid container spacing ={10} className = "left-paragraph">
          
        <Grid item>

        

        <Typography variant = "h4">You have the right to choose what's out there for anyone to see.</Typography>
        <Typography variant = "h6" style={{marginTop: '25px', marginLeft: '50px'}}>Our mission is to protect your privacy by helping you remove your info from people search websites. </Typography>
        
        &nbsp;
        
        <Typography variant = "h4">How it works</Typography>
        
        <Typography variant = "h6" style={{marginTop: '25px', marginLeft: '50px'}}>1. Enter your first and last name, city, and state</Typography>
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

        
      </div>
      {bottomNav()}
    </div>

  );
}


