import {
  CART_LOADING,
  GET_CART_SUCCESS,
  CART_ERROR,
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_CART,
} from "./cart.type";

const initState = {
  loading: false,
  error: false,
  cartItem: [],
  totalItem:0,
  totalPrice: 0,
  discountPrice:0
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CART_SUCCESS: {
      let dPrice = 0;
      let price=0;
      let num=0;
      payload.data.forEach((item) => {
        dPrice += item.count * item.productID.d_price;
        price +=item.count * Number(item.productID.price.replace(",",""));
        num +=item.count;
      });
      return {
        ...state,
        loading: false,
        cartItem: payload.data,
        totalPrice: price,
        discountPrice : dPrice,
        totalItem:num
      };
    }
    case CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        loading: false,
        cartItem: [...state.cartItem, payload.data],
      };
    }
    case UPDATE_CART: {
      let price = 0;
      let dPrice=0;
      let num=0;
      let newCart = state.cartItem.map((item) => {
        if (item._id === payload.id) {
          item.count = payload.count;
        }
        dPrice += (item.count)*item.productID.d_price;
        price += (item.count)*Number(item.productID.price.replace(",",""));
        num+=Number(item.count)
        return item;
      });
      return {
        ...state,
        cartItem: newCart,
        loading: false,
        totalPrice: price,
        discountPrice : dPrice,
        totalItem : num
      };
    }
    case REMOVE_CART: {
      let dPrice = 0;
      let price = 0;
      let num=0;
      let new_cart = state.cartItem.filter((item) => {
        if (item._id !== payload.id) {
          dPrice += (item.count)*item.productID.d_price;
          price += (item.count)*Number(item.productID.price.replace(",",""));
          num+=item.count;
          return item;
        } 
      });
      return {
        ...state,
        cartItem: new_cart,
        totalPrice: price,
        discountPrice : dPrice,
        totalItem:num
      };
    }
    default : {
      return state
    }
  }
};
