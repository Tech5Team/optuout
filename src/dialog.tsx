import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CircularProgress from '@mui/material/CircularProgress';
import { userFound } from './getStarted';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CheckIcon from '@mui/icons-material/Check';
import { Grid } from '@mui/material';
import { OptOut } from './getStarted';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface FullScreenDialogProps {
    open: boolean;
    spinner: boolean;
    data: userFound[];
    optouts: OptOut[];
    closeDialog: () => void;
  }
  
  export default function DialogWindow({ open, data, spinner, optouts, closeDialog }: FullScreenDialogProps) {

  const findOptOut = (hostname: string) => {
    const found = optouts.find((optout) => optout.url.includes(hostname));
    if (found) {
      return found.url;
    }
    return "";
  }
  const handleClose = () => {
    closeDialog();
  };

  return (
    <div>
      <Dialog
        
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {spinner? "Loading..." : "Results"} 
            </Typography>
            &nbsp; 
            {spinner?
          <CircularProgress color="secondary" /> 
          
          : <></>}
          </Toolbar>
        </AppBar>

        <Grid container spacing={2} alignItems = "center" justifyContent="center" sx ={{ display: 'flex', marginTop: 1, marginBottom: 1}}>
      {data.map(res => (
        <Grid item xs={12} key={res.hostname}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
            {(res.found == '1')? <PriorityHighIcon color='error'></PriorityHighIcon> : <CheckIcon color = 'success'></CheckIcon>}
            </Grid>
            <Grid item>
              <Typography variant="body1">{res.hostname}</Typography>
            </Grid>
            <Grid item>
            {(res.found == '1')? <Button variant="outlined" href = {findOptOut(res.hostname)} color="primary">Opt Out</Button> : <></>}
            </Grid>
          </Grid>
          <Divider/>
        </Grid>
      ))}
    </Grid>
      </Dialog>
    </div>
  );
}