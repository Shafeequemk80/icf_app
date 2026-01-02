import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";
import { Provider } from "react-redux";
import store from "./store/store.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme
      style={{
        backgroundImage: "url('/sideshape.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "left center",
      }}
      className="bg-[#f4f4f4]"
      accentColor="crimson"
      appearance="inherit"
      panelBackground="translucent"
      hasBackground={true}
      grayColor="sand"
      radius="large"
      scaling="95%"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </StrictMode>
);
