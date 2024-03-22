import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import letter from "../letter.webp";

function login() {
  return (
    <>
      <NavigationBar />
      <div className="container loginArea">
        <div className="row loginBay center">
          <div className="col s6 right-align">
            <Link to="/">
              <img className="responsive-img" alt="letter" src={letter} />
            </Link>
          </div>
          <div className="col s6 left-align">
            <h5 className="grey-text">WELCOME TO EvenShare Application</h5>
            <div className="loginDetails">
              <form className="loginForm">
                <div className="inputBox">
                  <div className="input-field inputBar">
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      //   onChange={this.handleChange}
                      //   value={this.state.email}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field inputBar">
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      //   value={this.state.password}
                      //   onChange={this.handleChange}
                    />
                    <label htmlFor="password">Passwords</label>
                  </div>
                </div>
                <button
                  className="waves-effect waves-light btn-large orange darken-4"
                  onClick={(e) => {
                    // this.userLoginDetails(e);
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default login;
