import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import middlewares from "./middlewares";

const applyMiddlewares = applyMiddleware(...middlewares);
const finalMiddlewares =
  process.env.NODE_ENV === "production"
    ? applyMiddlewares
    : composeWithDevTools(applyMiddlewares);

const store = createStore(reducers, finalMiddlewares);

export default store;
