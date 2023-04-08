import {
    ADD_WISHLIST,
  GET_WISHLIST,
  GET_WISHLIST_ERROR,
  GET_WISHLIST_LOADING,
  REMOVE_WISHLIST,
} from "./wishlist.type";

export const getWishlist = () => async (dispatch) => {
  dispatch({ type: GET_WISHLIST_LOADING });
  let token = JSON.parse(localStorage.getItem("token")) || false;
  try {
    let res = await fetch(`${process.env.REACT_APP_BASE_URL}/wishlist`,{
        headers: {
            Authorization: token,
          },
    });
    let data = await res.json();
    console.log(data);
    dispatch({ type: GET_WISHLIST, payload: data });
  } catch (error) {
    dispatch({ type: GET_WISHLIST_ERROR, payload: error });
  }
};

export const addToWishlist = (productID) => async (dispatch) => {
  dispatch({ type: GET_WISHLIST_LOADING });
  const token = JSON.parse(localStorage.getItem("token")) || 0;
  try {
    let res = await fetch(`${process.env.REACT_APP_BASE_URL}/wishlist/add`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({productID}),
    });
    let data = await res.json();
    console.log(data)
    dispatch({ type: ADD_WISHLIST, payload: data });
    return data;
  } catch (error) {
    dispatch({ type: GET_WISHLIST_ERROR });
    console.log(error);
  }
};

export const deleteWishlist = (id) => async (dispatch) => {
  dispatch({ type: GET_WISHLIST_LOADING });
  const token = JSON.parse(localStorage.getItem("token")) || 0;
  try {
    let res = await fetch(`${process.env.REACT_APP_BASE_URL}/wishlist/remove/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    let data = await res.json();
    // console.log(data)
    dispatch({ type: REMOVE_WISHLIST, payload: id });
    return data;
  } catch (error) {
    dispatch({ type: GET_WISHLIST_ERROR });
    console.log(error);
  }
};
