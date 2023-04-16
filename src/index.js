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
import SignupPage1 from "./pages/signup/Page1";
import SignupPage2 from "./pages/signup/Page2";
import SignupPage3 from "./pages/signup/Page3";
import SignupPage4 from "./pages/signup/Page4";
import SignupPage5 from "./pages/signup/Page5";
import Dashboard from "./pages/dashboard/Dashboard";
import TandC from "./pages/legal/TandC";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import About from "./pages/about/About";
import Help from "./pages/help/Help";
import Connect from "./pages/contact/Connect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/">
        <Route index element={<Front />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
        <Route path="terms-and-conditions" element={<TandC />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="connect" element={<Connect />} />
        <Route path="signup" element={<Signup />}>
          <Route index element={<SignupPage1 />} />
          <Route path="page2" element={<SignupPage2 />} />
          <Route path="page3" element={<SignupPage3 />} />
          <Route path="page4" element={<SignupPage4 />} />
          <Route path="page5" element={<SignupPage5 />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="classify">
          <Route index element={<Classify />} />
          <Route path="login" element={<ClassifyLogin />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
