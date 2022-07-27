import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewThread } from "./pages/NewThread";
import { Threads } from "./pages/Threads";
import { ThreadContent } from "./pages/ThreadContent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<Threads />} />
          <Route path="thread/new" element={<NewThread />}/>
          <Route path="thread/:id" element={<ThreadContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
