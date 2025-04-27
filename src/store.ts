import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { taskMiddleware } from "react-palm/tasks";
import keplerGlReducer from "@kepler.gl/reducers";
import { enhanceReduxMiddleware } from "@kepler.gl/middleware";

// kepler.gl 用リデューサーをマウント
const rootReducer = combineReducers({
  keplerGl: keplerGlReducer,
});

// react-palm → kepler.gl のタスク処理ミドルウェア
const middleware = [taskMiddleware, enhanceReduxMiddleware([])];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().concat(middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
