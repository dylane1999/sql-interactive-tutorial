import appReducer from "./reducers";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

const store = configureStore({
  reducer: appReducer,
  middleware: [logger, ...getDefaultMiddleware()],
});

export default store