import {GET_PRODUCT_LOADING,GET_PRODUCT_SUCCESS,GET_PRODUCT_ERROR,GET_SINGLE_PRODUCT_SUCCESS} from "./product.type";


export const getProduct = ({page,limit,type}) => async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING});

    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/product?page=${page}&limit=${limit}&type=${type}`);
        let data = await res.json();
        dispatch({type:GET_PRODUCT_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:GET_PRODUCT_ERROR,payload:error});
    }
}

export const getSingleProduct = (id) => async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING});

    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/product/${id}`);
        let data = await res.json();
        console.log(data);
        dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:GET_PRODUCT_ERROR,payload:error});
    }
}

