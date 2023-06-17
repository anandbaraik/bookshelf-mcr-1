import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <BookProvider>
        <App />
      </BookProvider>
    </Router>
  </StrictMode>
);
