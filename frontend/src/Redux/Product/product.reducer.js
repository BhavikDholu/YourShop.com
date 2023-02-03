import {
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from "./product.type";

const initialState = {
  loading: false,
  error: false,
  totalPages: 1,
  productData: [],
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        productData: payload.product,
        totalPages: payload.totalPages
      };
    }
    case GET_PRODUCT_ERROR: {
      return {
        ...state,error:true,loading:false
      };
    }
    default :{
      return state
    }
  }
};
