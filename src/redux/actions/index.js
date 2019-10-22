import * as types from './types';
import axios from 'axios';
const origin  = "http://localhost:4000"
export const fetchProfileRequest = () => {
    return { type: types.FETCH_PROFILE_REQUEST, fetching: true };
}

export const fetchProfileAction = profile => {
    return { type: types.FETCH_PROFILE_COMPLETE, profile, fetching: false };
}

export const addProfileRequest = () => {
    return { type: types.ADD_PROFILE_REQUEST, fetching: true };
}

export const addProfileComplete = () => {
    return { type: types.ADD_PROFILE_COMPLETE, fetching: false };
}

export const updateProfileRequest = () => {
    return { type: types.UPDATE_PROFILE_REQUEST, fetching: true };
}

export const updateProfileComplete = () => {
    return { type: types.UPDATE_PROFILE_COMPLETE, fetching: false };
}

export const changeRememberRequest = () => {
  return { type: types.CHANGE_REMEMBER_REQUEST, fetching: true };
}

export const changeRememberComplete = () => {
  return { type: types.CHANGE_REMEMBER_COMPLETE, fetching: false };
}

export const changeRememberNotRequest = () => {
    return { type: types.CHANGE_REMEMBER_NOT_REQUEST, fetching: true };
}

export const changeRememberNotComplete = () => {
    return { type: types.CHANGE_REMEMBER_NOT_COMPLETE, fetching: false };
}
export const loginProfileRequest = () => {
    return { type: types.LOGIN_POST_REQUEST, fetching: true };
}

export const loginProfileComplete = (profile) => {
    return { type: types.LOGIN_POST_COMPLETE, data: profile,fetching: false };
}

export const postLogin = data => dispatch => {
    dispatch(loginProfileRequest());
    return axios.post(origin+'/auth/login',data).then(res => {
        dispatch(loginProfileComplete(res.data));
        if(res.data[0]['token']['remember_me']){
            window.localStorage.setItem('login',res.data[0]['token']['data']+"|"+res.data[0]['token']['remember_me']+"|"+"/login");
        }else{
            window.localStorage.setItem('login','no token'+"|"+res.data[0]['token']['remember_me']+"|"+"/");
        }
        return res.data;
    });
}

export const changeRememberNot = (id) => dispatch =>{
    dispatch(changeRememberNotRequest());
    return axios.post('http://localhost:4000/change/remember/'+id).then(() => {
        dispatch(changeRememberNotComplete());
    });
}

export const changeRemember = (id) => dispatch =>{
    dispatch(changeRememberRequest());
    return axios.post('http://localhost:4000/change/'+id).then(() => {
        dispatch(changeRememberComplete());
    });
}

export const fetchProfile = () => dispatch => {
    dispatch(fetchProfileRequest());
    return axios.get('http://localhost:4000/get_json').then(res => {
        dispatch(fetchProfileAction(res.data));
    });
}

export const postProfile = data => dispatch => {
    dispatch(addProfileRequest());
    return axios.post('http://localhost:4000/add',data).then(() => {
        dispatch(addProfileComplete());
    });
}

export const profileUpdate = data => dispatch => {
    dispatch(updateProfileRequest());
    return axios.post('http://localhost:4000/update',data).then(() => {
        dispatch(updateProfileComplete());
    });
}
