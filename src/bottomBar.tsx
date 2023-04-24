import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import BottomDialog from './bottomNavDialog';
export default function BottomNav() : React.ReactElement {

  const [open, setOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);
  
  const handleContactOpen = () => {
    setContactOpen(true);
  };
  const handleContactClose = () => {
    setContactOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box pb = {7} sx={{ width: '100%', position: 'fixed', bottom: 0, height: 0, top: "auto"}}>
      <BottomNavigation 
        sx={{background: 'inherit', '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
            color: theme => theme.palette.secondary.main
          }}}
        showLabels
      >
        <BottomNavigationAction onClick = {handleOpen} label="Privacy Statement" icon={<PrivacyTipIcon color = "secondary"/>} />
        <BottomNavigationAction onClick = {handleContactOpen} label="Contact Us" icon={<ContactSupportIcon color = "secondary" />} />
      </BottomNavigation>
      <BottomDialog contact = {true} open = {contactOpen} setOpen = {handleContactClose} />
      <BottomDialog contact = {false} open = {open} setOpen = {handleClose} />

    </Box>
  );
}