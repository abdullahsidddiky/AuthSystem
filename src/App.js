import "./App.css";
import NavBar from "./components/navBar";
import { UserContext } from "./components/userContext";
import { useContext, useState } from "react";
function App() {
 const [isLoggedIn, setLoggedIn] = useState(sessionStorage.getItem("user"));

 return (
  <div>
   <NavBar isLoggedIn={isLoggedIn} />
  </div>
 );
}

export default App;
