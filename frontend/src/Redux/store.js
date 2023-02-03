import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import {ProductReducer} from "./Product/product.reducer";
import thunk from "redux-thunk";
 
const rootReducer = combineReducers({
    product:ProductReducer
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
export const store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));