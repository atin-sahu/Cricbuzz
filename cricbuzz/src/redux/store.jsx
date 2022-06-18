import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
import { reducer } from "./auth/reducer";

  const rootReducer = combineReducers({
    authReducer:reducer
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  console.log("store",store.getState());