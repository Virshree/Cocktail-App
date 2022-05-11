import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexShrink:2,
    fontSize:'30px',
    color:'green',
  },
  navitems:{
     
    justifyContent:'flex-end',
    marginLeft:'500px'  

  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'white',color:'black',border:'2px solid grey'}}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            CocktailDB
          </Typography>

        <Typography variant="h5" className={classes.navitems} >
            Home
        </Typography>    
         <Typography variant="h5" className={classes.navitems} >
            About
        </Typography>   
              
        </Toolbar>
      </AppBar>
    </div>
  );
}
