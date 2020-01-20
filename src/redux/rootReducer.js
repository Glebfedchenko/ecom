import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { userReducer } from "./user/userReducer";
import { cartReducer } from "./cart/cartReducer";
import { directoryReducer } from "./directory/directoryReducer";
import { shopReducer } from "./shop/shopReducer";

const mainReducer = history =>
  combineReducers({
    router: connectRouter(history),
    userReducer,
    cartReducer,
    directoryReducer,
    shopReducer
  });
export default mainReducer;
