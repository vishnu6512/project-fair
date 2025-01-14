import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{
      color: 'white',
      marginTop: 'auto',
      height: '350px',
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    }}>
      <Container fluid className="py-4">
        <Row className="justify-content-between">
          
          {/* Introduction */}
          <Col md={3}>
            <h5 className="text-xl font-weight-bold">
            <i class="fa-solid fa-record-vinyl"></i>Project Fair
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, quo accusamus non quidem aspernatur error?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Currently v 5.3.2</p>
          </Col>

          {/* Links */}
          <Col md={2}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white text-decoration-none">Projects</Link>
              </li>
              <li>
                <Link to="/login" className="text-white text-decoration-none">Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-white text-decoration-none">Register</Link>
              </li>
            </ul>
          </Col>

          {/* Guides */}
          <Col md={2}>
            <h5>Guides</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">React</a>
              </li>
              <li>
                <a href="https://react-bootstrap.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">React Bootstrap</a>
              </li>
              <li>
                <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">React Router</a>
              </li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3}>
            <h5 className="text-lg font-weight-semibold mb-4">Contact Us</h5>
            <Form className="d-flex mb-4">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
                style={{ backgroundColor: '#f8f9fa', color: '#495057' }}
              />
              <Button variant="cyan">
                <i className="fa-solid fa-arrow-right"></i>
              </Button>
            </Form>
            <div className="d-flex justify-content-between mt-2">
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </Col>

        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            &copy; 2025 Project Fair. Built with Docusaurus.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;