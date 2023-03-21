import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

export default function toolBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar variant="dense">
        <Link href = "https://github.com/Tech5Team/optuout">
          <IconButton edge="start" color="secondary" aria-label="github" sx={{ mr: 2 }}>
            <GitHubIcon></GitHubIcon>
          </IconButton>
          </Link>
          <Typography variant="body2" color="secondary" component="div">
            Built by Tech Five
          </Typography>
        </Toolbar>
    </Box>
  );
}