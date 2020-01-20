import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer"],
  blacklist: ["router"]
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // options like actionSanitizer, stateSanitizer
    })
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

const persistedReducer = persistReducer(persistConfig, rootReducer(history));
export const store = createStore(
  persistedReducer,
  //rootReducer(history),
  enhancer
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
