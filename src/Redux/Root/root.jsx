import { combineReducers, createStore } from "redux";

import CartReducer from "../Reducer/CartReducer";

const rootReducer = combineReducers({
     cart: CartReducer,
});

const store = createStore(rootReducer);

export default store;