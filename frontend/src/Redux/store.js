import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import {productReducer} from "./Product/product.reducer";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/cart.reducer";
import {AdminReducer} from "./Admin/admin.reducer";
import { userReducer } from "./User/user.reducer";
 
const rootReducer = combineReducers({
    product:productReducer,
    cart : cartReducer,
    admin : AdminReducer,
    user : userReducer
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
export const store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));