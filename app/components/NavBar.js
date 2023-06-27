"use client"
import Image from 'next/image';
import { Col, Row, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../public/logo4.png'

export default function NavBar() {
  return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
			{/* <Container fluid className='navBox'> */}
						<Navbar.Brand href="/">
							<Stack direction="horizontal">
								<Image src={logo} height={80} width={80} />
								<Stack
									style={{ justifyContent: "center" }}
									direction="vertical">
									<h3>Janando</h3>
									<h5>Cleaning Services Inc.</h5>
								</Stack>
							</Stack>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto" style={{ marginLeft: '2em' }}>
								<Nav.Link style={{ marginRight: "2vw" }} href="/">
									Home
								</Nav.Link>
								<Nav.Link style={{ marginRight: "2vw" }} href="/about">
									About
								</Nav.Link>
								<Nav.Link style={{ marginRight: "2vw" }} href="/services">
									Services
								</Nav.Link>
								{/* <NavDropdown title="Services" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown> */}
								{/* </Nav>
					<Nav> */}
								<Nav.Link style={{ color: 'green' }} href="/quote">Get a Free Quote</Nav.Link>
								{/* <Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link> */}
							</Nav>
						</Navbar.Collapse>
			{/* </Container> */}
		</Navbar>
	);
}