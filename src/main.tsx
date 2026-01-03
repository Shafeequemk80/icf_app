import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { BrowserRouter } from "react-router-dom"; 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Theme
      style={{
        backgroundImage: "url('/loginpagegb.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
      className=" min-h-screen"
      accentColor="crimson"
      appearance="inherit"
      panelBackground="translucent"
      hasBackground={true}
      grayColor="sand"
      radius="large"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
      </BrowserRouter>
  </StrictMode>

);
