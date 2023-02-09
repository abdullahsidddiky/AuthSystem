import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();

  sessionStorage.clear("user");

  useEffect(() => {

    navigate("/");
    window.location.reload();

  });


}
export default Logout;