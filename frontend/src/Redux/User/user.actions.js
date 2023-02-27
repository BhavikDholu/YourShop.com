import { USER_LOADING,USER_ERROR,USER_SIGNUP,USER_LOGIN,USER_LOGOUT,GET_USER_DETAIL } from "./user.type";


export const userLogin = (detail) => async (dispatch) =>{

    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/user/login`,{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body : JSON.stringify(detail)
        });
        let data = await res.json();
        dispatch({type:USER_LOGIN,payload:data});
        return data
    } catch (error) {
        console.log(error);
    }
}

export const userSignup = (detail) => async (dispatch) =>{

    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/user/register`,{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body : JSON.stringify(detail)
        });
        let data = await res.json();
        dispatch({type:USER_SIGNUP,payload:data});
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getUserDetail = () => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("token")) || 0;
    let res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/user/details`,
      { // or 'PUT'
          headers: {
            Authorization: token || false
          }
      }
    );
    let data = await res.json();
    // console.log(data)
    dispatch({ type:GET_USER_DETAIL, payload: data });
  }

  export const userLogout = ()=>(dispatch)=>{
    dispatch({type:USER_LOGOUT});
    return true
  }