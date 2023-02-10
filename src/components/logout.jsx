import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  sessionStorage.clear("user");
  useEffect(() => {
    window.location.replace("/");
  });
}
export default Logout;