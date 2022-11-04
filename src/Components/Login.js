import React from "react";
import { Link } from "react-router-dom";
import "./Css/Login.css";
function Login() {
  return (
    <section className="body">
      <div className="container">
        <div className="login-box">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo">
                <span className="logo-font">Animation</span>World
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <br />
              {/* <Link to="entry" className="header-title">
                LOGIN
              </Link> */}
              <form className="login-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email or UserName"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="Password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <a href="" className="forgot-password">
                    Forgot Password?
                  </a>
                </div>
                <div className="form-group">
                  <Link to="entry" className="btn btn-primary btn-block">
                    LOGIN
                  </Link>
                </div>
                <div className="form-group">
                  <div className="text-center">
                    New Member? <Link to="signup">Sign up Now</Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-6 hide-on-mobile">
              <div id="demo" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active"></div>
                  <div className="carousel-item">
                    <div className="slider-feature-card">
                      <img src="https://i.imgur.com/Yi5KXKM.png" alt="" />
                      <h3 className="slider-title">Title Here</h3>
                      <p className="slider-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione, debitis?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
