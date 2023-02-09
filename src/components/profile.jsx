import React, { useContext, useState } from "react";
import { UserContext } from "./userContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AuthUser from "./authUser";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const [account, setAccount] = useState(false);
  const [update, setUpdate] = useState(false);
  const varr = sessionStorage.getItem("user");
  const [email, setEmail] = useState();
  const varrr = JSON.parse(varr);
  const { http } = AuthUser();
  const deleteUser = () => {
    http.post('/delete', { email: email }).then((res) => {
      navigate("/");
      window.location.reload();
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
          <span><Button variant="primary">Delete Account</Button></span>
          <span><Button variant="primary">Change Password</Button></span>
        </Card.Body >
      </Card >
    </div >
  );
}
export default Profile;