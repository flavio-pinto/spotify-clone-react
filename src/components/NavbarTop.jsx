import { Nav, Navbar } from "react-bootstrap";

const NavbarTop = () => {
  return (
    <Navbar variant="transparent" className="navbar-top mt-2">
      <Nav className="col-lg-11 d-flex justify-content-evenly">
        <Nav.Link className="text-white" href="#trending">TRENDING</Nav.Link>
        <Nav.Link className="text-white" href="#podcast">PODCAST</Nav.Link>
        <Nav.Link className="text-white" href="#moods-and-genres">MOODS AND GENRES</Nav.Link>
        <Nav.Link className="text-white" href="#new-releases">NEW RELEASES</Nav.Link>
        <Nav.Link className="text-white" href="#discover">DISCOVER</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarTop;