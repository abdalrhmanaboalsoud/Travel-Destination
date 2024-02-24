import './Footer.css'
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';


function Footer() {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <p className="author">Author: Abdalrhman  Aboualsoud</p>
            </div>
            <Nav variant="pills" activeKey="1">
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
        </div>


    );
}

export default Footer;