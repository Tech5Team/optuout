import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function bottomNav() {

  return (
    <Box pb = {7} sx={{ width: '100%', position: 'fixed', bottom: 0, height: 0, top: "auto"}}>
      <BottomNavigation 
        sx={{background: 'inherit', '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
            color: theme => theme.palette.secondary.main
          }}}
        showLabels
      >
        <BottomNavigationAction  label="Privacy Statement" icon={<PrivacyTipIcon color = "secondary"/>} />
        <BottomNavigationAction label="Contact Us" icon={<ContactSupportIcon color = "secondary" />} />
      </BottomNavigation>
    </Box>
  );
}