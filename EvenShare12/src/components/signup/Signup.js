import React from "react";
import letter from "../letter.webp";
import "./signup.css";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar";

function Signup() {
  return (
    <>
      <NavigationBar />
      <div className="container box1">
        <div className="signUpArea">
          <div className="row signUpBay center">
            <div className="col s6 right-align">
              <Link to="/">
                <img className="responsive-img" alt="letter" src={letter} />
              </Link>
            </div>
            <div className="col s6 left-align">
              <h5 className="grey-text">Please enter your details</h5>
              <div className="signUpDetails">
                <form className="signUpForm">
                  <div className="inputBox">
                    <div className="input-field inputBar">
                      <input
                        id="name"
                        type="text"
                        className="validate"
                        // onChange={this.handleChange}
                        // value={this.state.name}
                      ></input>
                      <label htmlFor="name">username</label>
                    </div>
                    <div className="input-field inputBar">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                        // onChange={this.handleChange}
                        // value={this.state.password}
                      ></input>
                      <label htmlFor="password">password</label>
                    </div>
                    <div className="input-field inputBar">
                      <input
                        id="email"
                        type="email"
                        className="validate"
                        // onChange={this.handleChange}
                        // value={this.state.email}
                      ></input>
                      <label htmlFor="email">email id</label>
                    </div>
                    <div className="input-field inputBar">
                      <input
                        id="phone"
                        type="tel"
                        className="validate"
                        // onChange={this.handleChange}
                        // value={this.state.phone}
                      ></input>
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                  </div>
                  <button
                    className="waves-effect waves-light btn-large orange darken-4 submitBtn"
                    // onClick={this.signUpUser}
                  >
                    Sign me up!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
