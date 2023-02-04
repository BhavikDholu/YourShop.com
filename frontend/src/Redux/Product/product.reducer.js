import {
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./product.type";

const initialState = {
  loading: false,
  error: false,
  totalPages: 1,
  singleProduct:{},
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
    case GET_SINGLE_PRODUCT_SUCCESS : {
      return {
        ...state,singleProduct:payload.product,loading:false
      }
    }
    default :{
      return state
    }
  }
};
