import React from 'react';
import { Paper, Grid, Typography, CssBaseline } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import { AccountPageStyles }  from './AccountPageStyles';
import { useDispatch } from 'react-redux';
import { Toggle_Button_Signup_Signin } from '../AccountActions/index'

export default function SignUp () {
    const classes  = AccountPageStyles();
    const dispatch = useDispatch();

    function set_toggle_button_signup_signin (type) {
      dispatch(Toggle_Button_Signup_Signin(type));
    }
        return (
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                     <Paper className={classes.header}>
                        <Typography className={classes.appHeading}>To-Do App</Typography>
                     </Paper>
                </Grid>  
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                        <form className={classes.form} noValidate>
                       
                        <Grid container spacing={2}>
                   
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                             />
                         </Grid>
                       
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        style={{color:"#ffffff"}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link onClick = {()=>set_toggle_button_signup_signin("Signin")}  variant="body2">
                            Already have an account? Sign in
                        </Link>
                        </Grid>
                    </Grid>  
                </form>
              </div>
            </Container>
        </Grid>     
    );
}

