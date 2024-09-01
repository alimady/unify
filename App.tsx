import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTodos } from "./app/queries";
import { Route } from "react-router";
 import { Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./app/components/Layout";
 
import PostDetails from "./app/components/PostDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          
           </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
