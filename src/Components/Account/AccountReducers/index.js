import TYPES from '../AccountActions/types';
const initialState = {
    Login_Status:false,
    Toggle_Button_Signup_Signin:"Signup"

}; 
export default function (state = initialState, action) {
    switch (action.type) {
        case TYPES.LOGIN_STATUS:
            return {
               ...state,
               Login_Status: action.payload,
           }
        case TYPES.TOGGLE_BUTTON_SIGNUP_SIGNIN:
             return {
                ...state,
                Toggle_Button_Signup_Signin:action.payload 
             }
        default:
            return {
                ...state
            }

    }
}       