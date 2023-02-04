import {GET_PRODUCT_LOADING,GET_PRODUCT_SUCCESS,GET_PRODUCT_ERROR,GET_SINGLE_PRODUCT_SUCCESS} from "./product.type";


export const getProduct = ({page,limit}) => async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING});

    try {
        let res = await fetch(`http://localhost:4500/product?page=${page}&limit=${limit}`);
        let data = await res.json();
        console.log(data);
        dispatch({type:GET_PRODUCT_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:GET_PRODUCT_ERROR,payload:error});
    }
}

export const getSingleProduct = (id) => async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING});

    try {
        let res = await fetch(`http://localhost:4500/product/${id}`);
        let data = await res.json();
        console.log(data);
        dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:GET_PRODUCT_ERROR,payload:error});
    }
}