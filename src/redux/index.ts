import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/loginSlice";
import { offersSlice } from "./thunks/offersApiSlice";

const rootReducer = combineReducers({
  [userReducer.reducerPath]: userReducer.reducer,
  [offersSlice.reducerPath]: offersSlice.reducer,
});

export default rootReducer;
