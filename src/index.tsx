import { StrictMode, Suspense } from "react";
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
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistedStore}>
          <Suspense fallback={<SplashScreen />}>
            <App />
          </Suspense>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
