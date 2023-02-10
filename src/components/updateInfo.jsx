import React from "react";
import { useState, } from "react";
import AuthUser from "./authUser";
import Login from "./login";

function Update() {
  const { http } = AuthUser();
  const jsoninfo = JSON.parse(sessionStorage.getItem("user"));
  const [id, setId] = useState(jsoninfo.id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateForm = () => {
    http.put('/update', { name: name, email: email, password: password }).then((res) => {
      /*if (res.data.user) {
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.replace("/profile");
      }
      else {
        alert("No match fournd");
      }*/
      console.log(res);
    });
  }
  const element = (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-6">
        <div className="card p-5">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="name" className="form-control" placeholder="Update Name" id="name"
              onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" id="email"
              onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" placeholder="Enter password"
              id="password" onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary mt-3" onClick={updateForm}>Submit</button>
        </div>
      </div>
    </div >
  );
  return (element);
}
export default Update;