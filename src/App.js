import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import NavbarTop from './components/NavbarTop';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={{span:9, offset: 3}}>
            <Row>
            <NavbarTop />
              
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
