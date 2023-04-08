import {GET_WISHLIST,GET_WISHLIST_LOADING,GET_WISHLIST_ERROR,REMOVE_WISHLIST,ADD_WISHLIST} from "./wishlist.type";

let initialState = {
    loading : false,
    error : false,
    wishlist : []
}

export const wishlistReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_WISHLIST : {
            return {
                ...state,wishlist:payload.data,loading:false,error:false
            }
        }
        case GET_WISHLIST_LOADING : {
            return {
                ...state,loading:true
            }
        }
        case GET_WISHLIST_ERROR : {
            return {
                ...state,error:true,loading:false
            }
        }
        case REMOVE_WISHLIST : {
            let updated_list = state.wishlist.filter((item)=>item.id!==payload)
            return {
                ...state,wishlist:updated_list,loading:false,error:false
            }
        }
        case ADD_WISHLIST : {
            return {
                ...state,loading:false,error:false
            }
        }
        default : {
            return state
        }
    }
}