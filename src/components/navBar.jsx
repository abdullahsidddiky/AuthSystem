
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./dashboard";
import Profile from "./profile";
import Login from "./login";
import Logout from './logout';
import SignUp from './signup';
import Update from './updateInfo';

function NavBar({ isLoggedIn }) {
  const element = <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">

          {isLoggedIn && <Nav.Link href="/profile">Profile</Nav.Link>}
          {isLoggedIn && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
          {!isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
          {isLoggedIn && <Nav.Link href="/logout">Logout</Nav.Link>}


        </Nav>
      </Container>
    </Navbar>
    <div className="container">
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/update" element={< Update />} />
        </Routes>
      </Router>
    </div>

  </>

  return (element);
}
export default NavBar;  