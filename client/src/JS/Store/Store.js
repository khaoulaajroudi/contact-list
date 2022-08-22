import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import contactReducer from "../reducers/ContactReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(contactReducer,
  composeEnhancers(applyMiddleware(thunk))
);

