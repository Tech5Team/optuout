
import {Card, CardActions, Button, CardContent, CardMedia, Typography} from '@mui/material';


export default function displayCard(){

    return (
        <Card sx = {{marginLeft: '20%', marginTop: '7.5%',height: 300, width: 300, background: "linear-gradient(rgba(188,58,98,255),rgba(231,109,115,255), rgba(254,135,124,255))"}}> 
          
        <CardMedia component = "img" sx = {{height: 300, width: 300}} image = "blanklock.png" alt = "lock"></CardMedia>
        
        
        <CardActions sx ={{justifyContent: 'center'}}>

            
        <Button sx= {{ marginTop: -15,textAlign: 'center'}}size="small" color="secondary">
          Privacy Statement
        </Button>
      </CardActions>
        </Card>

    )
}