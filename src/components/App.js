import React from "react";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store, history, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.scss";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
