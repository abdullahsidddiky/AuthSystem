import React from "react";
import { useState, } from "react";
import { Navigate } from "react-router-dom";
import AuthUser from "./authUser";
function Login() {
  const { http } = AuthUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, getUser] = useState();
  const [isCleared, setIsCleared] = useState(true);
  const submitForm = () => {
    http.post('/login', { email: email, password: password }).then((res) => {
      if (res.data.user) {
        sessionStorage.setItem("user", JSON.stringify(res.data.user));

      }



    });
  }



  const element = (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-6">
        <div className="card p-5">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" id="email"
              onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" placeholder="Enter password"
              id="password" onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary mt-3" onClick={submitForm}>Submit</button>


        </div>
      </div>
    </div >
  );
  return (element)
}
export default Login;