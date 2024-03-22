import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signup from "./components/signup/Signup";
import home from "./components/home/home";
import login from "./components/login/login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route exact path="/" Component={home} />
          <Route path="/signup" Component={signup} />
          <Route path="/login" Component={login} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
