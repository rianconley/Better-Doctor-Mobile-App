// configureStore.js
import { AsyncStorage } from "react-native";
import {createStore,applyMiddleware} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import { createLogger } from "redux-logger";
// import storage from "redux-persist/lib/storage";



// Imports: Redux
import rootReducer from "./Reducers/index";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

// Middleware: Redux Persist Persisted Reducer

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(
    createLogger(),
  ),
);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

export {
  store,
  persistor,
};
