import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootRedeucer from "./reducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootRedeucer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
