import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import {productReducer} from "./Product/product.reducer";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/cart.reducer";
 
const rootReducer = combineReducers({
    product:productReducer,
    cart : cartReducer
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
export const store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));