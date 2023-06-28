"use client"
import Image from 'next/image';
import { Stack } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../public/logo4.png';

export default function NavBar() {
  return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
						<Navbar.Brand style={{ marginLeft: '8px' }} href="/">
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
								<Nav.Link style={{ color: 'green' }} href="/quote">Get a Free Quote</Nav.Link>
							</Nav>
						</Navbar.Collapse>
		</Navbar>
	);
}