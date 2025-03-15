import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import adminAuthSlice from "./slices/adminAuthSlice";
import sellerAuthSlice from "./slices/sellerAuthSlice";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
  auth        : authSlice,
  adminauth   : adminAuthSlice,
  sellerauth  : sellerAuthSlice,
  user        : userSlice,
  seller      : userSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "adminauth", "sellerauth"],
};

// Persist the reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = configureStore({
  reducer: persistedReducer,
});

// Set up the persistor
const persistor = persistStore(store);

export { store, persistor };
