import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import { ThemeProvider, createTheme } from '@mui/material';
import { UserContextProvider } from './context';
import { GoogleOAuthProvider } from '@react-oauth/google';

const theme = createTheme({
  palette: {
    primary:{
      main: "rgba(231,109,115,255)",
      dark: "#000000"
    },
    secondary: {
      main: "#FFFFFF",
    }

    
  }
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT!}>
    <UserContextProvider>

      <Main/>
      </UserContextProvider>

      </GoogleOAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

