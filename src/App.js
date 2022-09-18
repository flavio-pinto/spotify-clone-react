import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeContent from "./components/HomeContent";
import NavbarTop from "./components/NavbarTop";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={{ span: 9, offset: 3 }}>
              <Row>
                <NavbarTop />
                <Routes>
                  <Route path="/" element={<HomeContent />} />
                </Routes>
              </Row>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
