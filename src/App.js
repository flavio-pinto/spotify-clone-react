import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
