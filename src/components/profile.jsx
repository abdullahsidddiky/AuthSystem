import React, { useContext } from "react";
import { UserContext } from "./userContext";

function Profile() {

  const varr = sessionStorage.getItem("user");
  const varrr = JSON.parse(varr);
  return (<div>

    <h1>Home  </h1>
    <h1>{varrr.name}</h1>
  </div>)
}
export default Profile;