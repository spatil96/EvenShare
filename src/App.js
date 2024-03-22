import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signup from "./components/signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route exact path="/" Component={signup} />
          <Route path="/signup" Component={signup} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
