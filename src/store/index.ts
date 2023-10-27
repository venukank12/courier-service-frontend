import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import localStorage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./slices/authSlice";
import { authService } from "../services/authService";

const authPersistConfig = {
  key: "courier_life_web_2023_v1",
  storage: sessionStorage,
  whitelist:[authReducer.name]
};

const rootReducer = combineReducers({
  [authReducer.name]: authReducer,
  [authService.reducerPath]: authService.reducer,
});

const persistedReducer = persistReducer(authPersistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      thunk,
      authService.middleware,
    ] as any)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export const persistedStore = persistStore(store);

export default store;