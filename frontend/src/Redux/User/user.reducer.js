import {
  USER_LOADING,
  USER_ERROR,
  USER_SIGNUP,
  USER_LOGIN,
  USER_LOGOUT,
  GET_USER_DETAIL,
} from "./user.type";

const initialState = {
  loading: false,
  error: false,
  userDetail: [],
  isLogin: false,
  isAdmin: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING: {
      return {
        ...state,
      };
    }
    case USER_ERROR: {
      return {
        ...state,
      };
    }
    case USER_SIGNUP: {
      return {
        ...state,
      };
    }
    case USER_LOGIN: {
        localStorage.setItem("token",JSON.stringify(payload.token));
      return {
        ...state,isLogin:true,isAdmin:payload.isAdmin
      };
    }
    case USER_LOGOUT: {
        localStorage.removeItem("token");
      return {
        ...state,isLogin:false,isAdmin:false
      };
    }
    case GET_USER_DETAIL: {
      return {
        ...state,userDetail:payload,isAdmin:payload.isAdmin,isLogin:true
      };
    }
    default: {
      return state;
    }
  }
};
