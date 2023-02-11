import {CART_LOADING,GET_CART_SUCCESS,CART_ERROR,ADD_TO_CART,UPDATE_CART,REMOVE_CART} from "./cart.type";


export const getCartItem = ()=>async(dispatch)=>{
    let token = localStorage.getItem("token") || 0;
    console.log(token)
    dispatch({type : CART_LOADING});
    try {
        let res = await fetch(process.env.REACT_APP_CART_BASE_URL,{
            headers : {
                Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2RlOGQ1YjBhMDhjYmM3Mjc2NWYwN2IiLCJpYXQiOjE2NzU5Mzg4NDd9.1hJ7dbglkUw2prt-sUW0vjI0RGTWKsLi5o32dQmEwmo"
            }
        });
        let data = await res.json()
        // console.log(await res.json());
        dispatch({type:GET_CART_SUCCESS,payload : data})
    } catch (error) {
        console.log(error);
        dispatch({type:CART_ERROR})
    }
}