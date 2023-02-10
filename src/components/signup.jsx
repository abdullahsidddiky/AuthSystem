import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "./authUser";

function SignUp() {
  const { http } = AuthUser();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const submitForm = () => {
    http.post('/register', { name: name, email: email, password: password }).then((res) => {
      //navigate('/');
      alert("user signed up");
      window.location.replace('/');
    });
  }
  const element = (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-6">
        <div className="card p-5">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" id="name" onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-primary mt-3" onClick={submitForm}>Submit</button>

        </div>
      </div>
    </div >
  );
  return (element);
}
export default SignUp;