import React from "react";
import "./Css/Login.css";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <Link to="/" className="login-form .btn ">
        BACK
      </Link>
    </div>
  );
}

export default Error;
