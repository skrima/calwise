import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Classify from "./pages/classify/Classify";
import ClassifyLogin from "./pages/classify/Login";
import Front from "./pages/front/Front";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/">
        <Route index element={<Front />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="classify">
          <Route index element={<Classify />} />
          <Route path="login" element={<ClassifyLogin />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
