import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Nav from 'react-bootstrap/Nav';
import {Component} from 'react';
import { Link } from 'react-router-dom';






export default class ButtonAppBar extends Component{
render(){
  return (
    <div  >
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
         
          <Link style={{ color: '#FFF' }} to={`/`} > <Typography variant="h6"  >Twitter Sentiment Analyisis</Typography></Link>
          
            <Button  href="/impeach" variant="outlined" style={{ color: '#FFF' }}>Impeach Data Analyisis</Button>
           <Button href="/form" variant="outlined" style={{ color: '#FFF' }}>Custom</Button>  
        </Toolbar>
      </AppBar>
    </div>
    )
}
}

