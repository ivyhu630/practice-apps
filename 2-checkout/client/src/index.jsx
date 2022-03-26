import React from "react";
import App from "./components/App.jsx";
import { render } from "react-dom";

render(
  <div>
    <p>Hello, World!</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
      <App />
  </div>,
  document.getElementById("root")
);
