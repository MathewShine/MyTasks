import { combineReducers } from "redux";
import account from "../../Components/Account/AccountReducers/index";


const rootReducer = combineReducers({
  account: account,
});

export default rootReducer;
