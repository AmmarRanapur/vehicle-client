import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/";
import { ThemeProvider } from 'styled-components';
import { theme } from 'cdk-radial';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import vehicleReducer from './features/vehicles';

const store = configureStore({
  reducer:{
    vehicles:vehicleReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
