import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <Navbar expand="md" variant="white" className="fixed-left justify-content-between">
      <div className="nav-container">
        <Navbar.Brand>
          <img
            className="img-fluid"
            src="/assets/Spotify_Logo.png"
            alt="spotify logo"
          />
        </Navbar.Brand>
        <Nav.Link className="d-flex" href="#home">
          <HouseDoorFill />
          Home
        </Nav.Link>
        <Nav.Link className="d-flex" href="#features">
          <BookFill />
          Your Library
        </Nav.Link>
        <Form className="d-flex mt-3">
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <Button>GO</Button>
        </Form>
      </div>
      <div className="nav-container d-flex flex-column align-self-center w-100">
        <Button className="bg-white border-0 rounded-pill text-black mb-3 w-75 mx-auto btn-sign-up">Sign Up</Button>
        <Button className="bg-transparent border-1 border-white rounded-pill mb-2 w-75 mx-auto btn-login">Login</Button>
        <div className="d-flex mb-3">
          <Nav.Link href="#features">Cookie Policy</Nav.Link>
          <span className="py-2"> | </span>
          <Nav.Link href="#features">Privacy</Nav.Link>
        </div>
      </div>
    </Navbar>
  );
};

export default Sidebar;
