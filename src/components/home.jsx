import React, { useContext } from "react";
import { UserContext } from "./userContext";

function Home() {
  const varr = sessionStorage.getItem("user");
  const varrr = JSON.parse(varr);
  return (<div>

    <h1>Home  </h1>
    <h1>{varr}</h1>
  </div>)
}
export default Home;