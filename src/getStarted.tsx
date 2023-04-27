import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import DialogWindow from './dialog';
import autoComplete from './autoComplete';
import { UserContext } from './context';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
export interface userFound {
    hostname: string;
    found: string;
}

export interface OptOut{
  linknumber: string;
  url: string; 
}

function sanitizeFunc(sanitize: string) {
  const nameRegex = /^[a-zA-Z\s']+$/; 
  const sanitized = sanitize.trim();

  if (!nameRegex.test(sanitize)) {

    return null;
  }

  return sanitized;
}


function checkFullName(fullName: string) {
    const nameRegex = /^[a-zA-Z\s']+$/; 
    const nameArray = fullName.trim().split(" ");

    if (nameArray.length !== 2) {
      return false;
    }
  
    for (let i = 0; i < nameArray.length; i++) {
      if (!nameRegex.test(nameArray[i])) {
        return false;
      }

      else if (nameArray[i].length > 25) {
        return false;
      }
    }
  
    return true;
  }


export default function GetStarted(){
    
    const { name, setName, cityState, isLoggedin, setIsLoggedin} = useContext(UserContext);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [results, setResults] = useState<userFound[]>([]);
    const [optoutLinks, setOptOutLinks] = useState<OptOut[]>([]);
    const [token, setToken] = useState<string>('');


    const handleLoginSuccess = (credentialResponse:any) => {
      setIsLoggedin(true);
      setToken(credentialResponse.credential);
    };


    useEffect(() => {
      if (isLoggedin){
      fetch('https://us-central1-optuout-e7ffe.cloudfunctions.net/app/graphql', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json',
                         'Authorization': `Bearer ${token}`
             },
              body: JSON.stringify({
                query: `
                  query {
                    optOuts {
                      linknumber
                      url
                    }
                  }
                `
              })
            })
            .then(res => res.json())
            .then(data => setOptOutLinks(data.data.optOuts))
            .catch(error => console.error(error));
          }
      return () => {
        console.log('done')
      }
    }, [isLoggedin])
    
    const handleOpenDialog = () => {
      setDialogOpen(true);
      
  };
    const handleCloseDialog = () => {
      setDialogOpen(false);
  };

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
            setResults([] as userFound[])

            let firstname = name.split(' ')[0];
            let lastname = name.split(' ')[1];
            let city = trimmedCityState[0];
            let state = trimmedCityState[1];

            if (sanitizeFunc(city) == null) {
              return
            }
            else if (sanitizeFunc(state) == null) {
              return
            }
            const variables = { first: firstname, last: lastname, city: city, state: state };
            const query = `
              mutation CheckSites($first: String!, $last: String!, $city: String!, $state: String!) {
                checkSites(first: $first, last: $last, city: $city, state: $state) {
                  hostname
                  found
                }
              }
            `;

            const body = JSON.stringify({ query, variables });

            setShowSpinner(true);
          

            fetch("https://us-central1-optuout-e7ffe.cloudfunctions.net/app/graphql", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                   'Authorization': `Bearer ${token}`
                },

                body: body
                })
            .then(function(response) {
                if(response.ok){
                    setShowSpinner(false);
                    return response.json();
                    
                }{
                    throw new Error("Post Failed")
                }
            }).then(function(responseBody){
              const checkSites = responseBody.data.checkSites;
              console.log(checkSites)
              setResults(checkSites);
            })
            .catch(function(error) {
                console.log("Request failed", error);
            });
            return
        }
        
        
    }

    return (
      <div>
    <Stack direction ="row" spacing = {2} style={{ marginTop: '25px', alignItems: "stretch", justifyContent: "center"}}>
        
    {!isLoggedin && 
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
      <GoogleLogin
    onSuccess={credentialResponse => {
      handleLoginSuccess(credentialResponse)
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
  </div>
  } 
        
        {isLoggedin && <TextField 
        value = {name}
        onChange = {handleChange}
        label = "Enter your full name:" 
        autoFocus
        variant = "filled"
        color = "secondary" 
        style = {{width: 500, zIndex: 10}} 
        >
        </TextField>}
        {autoComplete()}
 
        {isLoggedin && <Button 
        disabled = {!isLoggedin}
        variant = "contained" 
        color = "secondary"
        style = {{zIndex: 10}}
        onClick={() => {
          submit();
          handleOpenDialog();
        }}
        >
            Get Started
            </Button>}

            <DialogWindow optouts = {optoutLinks} data = {results} open={dialogOpen} spinner = {showSpinner} closeDialog={handleCloseDialog} />

    </Stack>
    {results.length > 1 && <Button
        variant = "contained" 
        color = "secondary"
        style = {{width: 250 ,zIndex: 10}}
        onClick={() => {
          handleOpenDialog()
        }}
        >
            Open Results
            </Button>}
    </div>
    )
}

