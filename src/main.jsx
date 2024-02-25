import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/pages/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import Education from "./components/pages/Education.jsx";
import Experience from "./components/pages/Experience.jsx";
import Github, { githubInfoLoader } from "./components/pages/Github.jsx";
import Projects from "./components/pages/Projects.jsx";
import CurrencyConvertor from "./components/currencyconvertor/CurrencyConvertor.jsx";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="education" element={<Education />} />
      <Route path="experience" element={<Experience />} />
      <Route path="projects" element={<Projects />}>
        <Route path="currencyconvertor" element={<CurrencyConvertor />} />
      </Route>

      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
