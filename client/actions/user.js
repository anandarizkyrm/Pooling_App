import axios from 'axios';
import {
  
LOGIN_USER,
LOGIN_FAILED,
LOGOUT_USER,
LOGOUT_FAILED,
LOGIN_SUCCESS,

REGISTER_USER,
REGISTER_SUCCESS,
REGISTER_FAILED,

GET_USER_DATA,

UPDATE_USER_DATA,
UPDATE_USER_DATA_SUCCESS,
UPDATE_USER_DATA_FAILED,
UPDATE_USER_DATA_RESET,

FETCH_USER,
FETCH_USER_SUCCESS,
FETCH_USER_FAILED,
FETCH_USER_RESET,

USER_IS_UNAUTHORIZED,
SET_TOKEN,
} from './actions_type/actions_type_user';
import { sendAlert } from './alertLogin';



export const loginUser = (data) => async (dispatch) => {
    
    
    try {
        dispatch({ type: LOGIN_USER });

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        });
    
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (err) {
        dispatch({
            type: LOGIN_FAILED,
            payload: err
        });
       
}};

export const registerUser = ( name, email, password )=> async (dispatch) => {
    
    try{
        dispatch({ type: REGISTER_USER });
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        const res = await axios.post('/api/register', { name, email, password }, config);
   
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res
        });
        return dispatch(sendAlert("Register Success", 1));
        
    }catch(err){
        console.log(err)
        dispatch({
            type: REGISTER_FAILED,
            payload: err
        });
            dispatch(sendAlert(err.response ? err.response.data.message : "Network Error", 3))
        return;
    }
}