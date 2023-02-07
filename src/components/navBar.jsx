
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./dashboard";
import Home from "./home";
import Login from "./login";
import { UserContext } from './userContext';
import { useContext, useState, } from 'react';
function NavBar() {
  const [value, setValue] = useState('dsaf');

  const element = <>

    <Navbar bg="dark" variant="dark">
      <Container>

        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>


      </Container>
    </Navbar>
    <div className="container">
      <Router>
        <UserContext.Provider value={{ value, setValue }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>

  </>

  return (element);
}
export default NavBar;  