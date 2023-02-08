import React from "react";
function Logout() {
  console.log(sessionStorage.getItem("user"));
  sessionStorage.clear("user");
  <h1>{sessionStorage.getItem("user")}</h1>
  console.log(sessionStorage.getItem("user"));
}
export default Logout;