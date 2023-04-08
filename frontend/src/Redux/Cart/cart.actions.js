import {
  CART_LOADING,
  GET_CART_SUCCESS,
  CART_ERROR,
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_CART,
} from "./cart.type";

export const getCartItem = () => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("token")) || 0;
 
  dispatch({ type: CART_LOADING });
  try {
    let res = await fetch(process.env.REACT_APP_CART_BASE_URL, {
      headers: {
        Authorization: token,
      },
    });
    let data = await res.json();
    // console.log(await res.json());
    console.log(data)
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: CART_ERROR });
  }
};

export const addToCart = (productID) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("token")) || 0;
  dispatch({ type: CART_LOADING });
  try {
    let res = await fetch(
      `${process.env.REACT_APP_CART_BASE_URL}/add`,
      {
        method: "POST",
        body: JSON.stringify({productID}),
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    console.log(data);
    dispatch({ type: ADD_TO_CART, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: CART_ERROR });
  }
};

export const updateCount = (id, count) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("token")) || 0;
  dispatch({ type: CART_LOADING });
  try {
    let res = await fetch(
      `${process.env.REACT_APP_CART_BASE_URL}/update/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({count}),
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    // console.log(await res.json());
    dispatch({ type: UPDATE_CART, payload: { id, count } });
  } catch (error) {
    console.log(error);
    dispatch({ type: CART_ERROR });
  }
};

export const removeItem = (id) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("token")) || 0;
    dispatch({ type: CART_LOADING });
    try {
      let res = await fetch(
        `${process.env.REACT_APP_CART_BASE_URL}/remove/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      let data = await res.json();
      // console.log(await res.json());
      dispatch({ type: REMOVE_CART, payload: {id} });
    } catch (error) {
      console.log(error);
      dispatch({ type: CART_ERROR });
    }
  };
