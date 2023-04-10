import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { useContext } from 'react';

import autoComplete from './autoComplete';
import { UserContext } from './context';

function checkFullName(fullName: string) {
    const nameRegex = /^[a-zA-Z\s]+$/; // Only letters and spaces
    const nameArray = fullName.trim().split(" ");
  
    // Check if there's first and last only
    if (nameArray.length !== 2) {
      return false;
    }
  
    // Check if each name only contains letters and spaces
    for (let i = 0; i < nameArray.length; i++) {
      if (!nameRegex.test(nameArray[i])) {
        return false;
      }
    }
  
    return true;
  }


export default function GetStarted(){
    
    const { name, setName, cityState } = useContext(UserContext);


    const handleChange = (event: any) => {
        setName(event.target.value);
    };

 
    function submit(){

        var trimmedCityState = cityState.split(', ')

        if (!trimmedCityState.includes('USA')){
            console.log('Must be in USA!');
            return
        }

        else if(!checkFullName(name)){
            alert("Please enter your first and last name");
            return 
        }
        else if (trimmedCityState.length == 3){

            let firstname = name.split(' ')[0];
            let lastname = name.split(' ')[1];
            let city = trimmedCityState[0];
            let state = trimmedCityState[1];
            console.log(city + " " + state)

            fetch("https://navy-blue-moth-shoe.cyclic.app/checksites", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },

                body: JSON.stringify({

                  user: {
                    first: firstname, 
                    last: lastname, 
                    city: city, 
                    state: state
                  }
                
                }),
                })
            .then(function(response) {
                if(response.ok){
                    return response.json();
                }{
                    throw new Error("Post Failed")
                }
            }).then(function(responseBody){
                console.log(responseBody.uri)
            })
            .catch(function(error) {
                console.log("Request failed", error);
            });
            return
        }
        
        
    }

    return (

    <Stack direction ="row" spacing = {2} style={{ marginTop: '25px', alignItems: "center", justifyContent: "center"}}>
        
        <TextField 
        value = {name}
        onChange = {handleChange}
        label = "Enter your full name:" 
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
        onClick = {submit}
        >
            Get Started
            </Button>
    </Stack>
    )
}

