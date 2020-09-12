import React from 'react';
import AccountPage from './Components/Account/AccountComponents/AccountPage';
import { Route, Switch, Redirect} from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const login_Status = useSelector(state => state.account.Login_Status);

  return (
    <div> 
      {login_Status ? false : <Redirect to='/' />}
        <Switch>   
            <Route
                path="/"
                component={AccountPage}
            />
        </Switch>
</div>     
  );
}
export default App;
