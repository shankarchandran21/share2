import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function SignUp() {
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    mobile: "",
  });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(person.email);
    if (
      person.firstname &&
      person.lastname &&
      person.password &&
      person.email &&
      person.mobile
    ) {
      const newPerson = {
        ...person,
        id: new Date().getTime().toString(),
        time: new Date().toLocaleString(),
      };
      setPeople([...people, newPerson]);
      let signupFormData = {
        firstname: person.firstname,
        lastname: person.lastname,
        password: person.password,
        email: person.email,
        mobile: person.mobile,
      };
      console.log("here ");
      console.log(signupFormData);
      axios
        .post("http://localhost:3000/signup", signupFormData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      setPerson({
        firstname: "",
        lastname: "",
        password: "",
        email: "",
        mobile: "",
      });
    } else {
      alert("Please Fill The Form correctly");
    }
  };
  return (
    <div className="container register">
      <div className="row">
        <div className="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3>Welcome</h3>
          <p>You can Enjoy With Animation!</p>
          <Link to="/" className="btnLeft">
            Login
          </Link>
          <br />
        </div>
        <div className="col-md-9 register-right">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 className="register-heading">Create Your Account</h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <label htmlFor="firstname" class="form-group">
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      className="form-control"
                      placeholder="First Name *"
                      value={person.firstname}
                      onChange={handleChange}
                    />
                  </label>
                  <label htmlFor="lastname" class="form-group">
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      className="form-control"
                      placeholder="Last Name *"
                      value={person.lastname}
                      onChange={handleChange}
                    />
                  </label>
                  <label htmlFor="password" class="form-group">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="password *"
                      value={person.password}
                      onChange={handleChange}
                    />
                  </label>
                  <div className="form-group"></div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" class="form-group">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Your Email *"
                      value={person.email}
                      onChange={handleChange}
                    />
                  </label>
                  <div className="form-group">
                    <input
                      name="mobile"
                      type="text"
                      minlength="10"
                      maxlength="10"
                      class="form-control"
                      placeholder="Your Phone *"
                      value={person.mobile}
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btnRegister"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
