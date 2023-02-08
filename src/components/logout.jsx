import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();

  sessionStorage.clear("user");

  useEffect(() => {
    navigate("/home");
    window.location.reload();
  });


}
export default Logout;