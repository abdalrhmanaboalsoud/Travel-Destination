import './Footer.css'; // Import the CSS file
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <>
    <p className="author">Author: Abdalrhman Aboualsoud</p>
    <footer className="footer"> {/* Apply the CSS class for styling */}
      <div className="author-container">
        
      </div>
      <Nav variant="pills" activeKey="1" className="social-links">
        <Nav.Item>
          <Nav.Link eventKey="1" href="https://www.facebook.com/abdalrr7man?mibextid=ZbWKwL">
            Facebook
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" href="https://www.instagram.com/abdalrr7man?igsh=YTQwZjQ0NmI0OA==">
            Instagram
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" href="https://www.linkedin.com/in/abdalrhman-abo-alsoudlsoud-b16496285/">
            LinkedIn
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </footer>
    </>
  );
  
}

export default Footer;
