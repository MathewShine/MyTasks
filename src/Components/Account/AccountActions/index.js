import TYPES from './types';

export const Login_Status = (Status)=>({

    type:TYPES.LOGIN_STATUS ,
    payload:Status
})
export const  Toggle_Button_Signup_Signin = (ActionType)=>({

    type:TYPES.TOGGLE_BUTTON_SIGNUP_SIGNIN ,
    payload:ActionType
})
// ====================================================================