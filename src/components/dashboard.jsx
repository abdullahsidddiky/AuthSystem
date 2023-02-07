import React, { useState } from "react";
import { UserContext } from "./userContext";
import { useContext } from "react";
function Dashboard() {
  const { value, setValue } = useContext(UserContext);

  return (<div>
    <h1>dashboard {value} </h1>
    <button onClick={() => { setValue('vasdf') }}>button</button>
  </div >
  )
}
export default Dashboard;