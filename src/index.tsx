import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import { ThemeProvider, createTheme } from '@mui/material';

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
      <Main/>
    </ThemeProvider>
  </React.StrictMode>
);

