import React from "react";
import "./styles/signin.css";

function Signin() {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Doctor Sign In</h1>
            {/*<div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>*/}
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Patient Sign In</h1>
            {/*<div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>*/}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Patient</h1>
              <p>
                For Patient Sign In
              </p>
              <button className="ghost" id="signIn">
                Click Here
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Doctor</h1>
              <p>For Doctor Sign In</p>
              <button className="ghost" id="signUp">
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
