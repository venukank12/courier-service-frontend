import {StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import { Provider } from "react-redux";
import store, { persistedStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import SplashScreen from "./components/core/SplashScreen";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<SplashScreen/>} persistor={persistedStore}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<SplashScreen/>}>
          <App />
          </Suspense>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
