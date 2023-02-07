import React from "react";
import { UserContext } from "./userContext";
import { useContext } from "react";
function Home() {
  const { value } = useContext(UserContext);
  return (<h1>Home {value}</h1>)
}
export default Home;