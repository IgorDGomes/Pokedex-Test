import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PokedexProvider from "./context/provider";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokedexProvider>
      <App />
    </PokedexProvider>
  </StrictMode>
);
