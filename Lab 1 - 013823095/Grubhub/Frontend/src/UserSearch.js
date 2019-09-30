import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import UserSearch_Navbar from './UserSearch_Navbar';

const useStyles = makeStyles(theme => ({
    root: {
      height: '50vh',
      width: '400vh'
    },
    image: {
      backgroundImage: 'url(https://res.cloudinary.com/grubhub-marketing/image/upload/f_auto,fl_lossy,q_80/v1538431627/Homepage_Desktop_0018_Pizza_2x_qshvvo.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  

export default function UserSearch() {
        const classes = useStyles();


        return(
         <React.Fragment>
            <UserSearch_Navbar />
            <Grid container component="main" className={classes.root}>
               <CssBaseline />
               <Grid item xs={false} sm={4} md={7} className={classes.image} />
                 <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                 </Grid>
            </Grid>
          </React.Fragment>
        );
}