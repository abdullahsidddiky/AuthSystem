import React, { useContext, useState } from "react";
import { UserContext } from "./userContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AuthUser from "./authUser";
import { useNavigate } from "react-router-dom";
import Update from "./updateInfo";
function Profile() {
  const varr = sessionStorage.getItem("user");
  const [email, setEmail] = useState();
  const varrr = JSON.parse(varr);
  const { http } = AuthUser();
  const deleteUser = () => {
    http.delete('/delete', { email: email }).then((res) => {
      sessionStorage.clear("user");
      window.location.replace("/");
      alert("User account deleted");
    });
  }
  return (
    <div className=" mt-2">
      <Card>
        <Card.Body>
          <Card.Title>User Info</Card.Title>
          <Card.Text>
            {varrr.name}
          </Card.Text>
          <span><Button variant="danger" onClick={deleteUser}>Delete Account</Button></span>
          <a href="/update"><Button variant="primary" >Update Profile</Button></a>

        </Card.Body >
      </Card >
    </div >
  );
}
export default Profile;