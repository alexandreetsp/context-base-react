import React from "react";
import {render} from "react-dom";
import "./index.scss";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import UserContextProvider from "./context/UserContext";
import {CategoryProvider} from "./context/category.context";
import {CartProvider} from "./context/cart.context";
import {Provider} from "react-redux";
import {store} from "./store/store";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoryProvider>
          <UserContextProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </UserContextProvider>
        </CategoryProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
