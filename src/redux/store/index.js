import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import searchReducer from "../reducers/searchReducer";
import userReducer from "../reducers/userReducer";

const persistConfig = {
  key: "root",
  blacklist: ['search'],
  storage,
};

const generalReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, generalReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);