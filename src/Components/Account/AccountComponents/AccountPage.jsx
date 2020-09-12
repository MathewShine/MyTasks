import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Route, Switch, Redirect} from "react-router-dom";
import { useSelector } from 'react-redux';

export default function AccountPage () {

    const toggle_button_signup_signin = useSelector(state => state.account.Toggle_Button_Signup_Signin)
    console.log(" toggle_button_signup_signin:",toggle_button_signup_signin)
        return (
            <div> 
                {toggle_button_signup_signin === "Signup" ? <Redirect to='/Signup' /> : <Redirect to='/Signin' />}
                    <Switch>   
                        <Route
                            path="/Signin"
                            component={SignIn}
                        />
                        <Route
                            path="/Signup"
                            component={SignUp}
                        />
                    </Switch>
            </div>          
          );}

