import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router";
 import { Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
 import Navigation from "./Routes/navigation/navigation.component";
import Container from "./Components/Container/Container.component";
import Main from "./Routes/Main/Main.component";
 import axios from "axios";
 import { useQuery } from "@tanstack/react-query";
 function App() {
  
  return (
    <>
      <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Navigation/>}>
            <Route index element={<Main/>}></Route>
           </Route>
        </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
