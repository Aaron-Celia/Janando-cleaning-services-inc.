"use client";
import { Button, Col, Container, Row } from "react-bootstrap";
import CustomCarousel from "./components/CustomCarousel";
import Image from "next/image";
import building from "../public/business-building.png";
import ecoFriendlyImg from "../public/env.png";
import home5 from "../public/home5.png";
// import Slider from "./components/Slider";
import Slider2 from "./components/Slider2";
import { useEffect, useState } from "react";

export default function Home() {
  const [hasLoaded, setHasLoaded] = useState(false)
  useEffect(() => {
    const buttons = document.querySelector('.tns-controls');
    buttons.style.display = 'none';
    const box = document.querySelector('.tns-outer');
    box.firstChild.style.display = 'none';
    // setHasLoaded(true);
    // if(hasLoaded){
    // }
  }, [])

  return (
    <div>
      <Slider2 />
    </div>
  )
	// return (
	// 	<Container className="homepage">
	// 		<div className="heading">
	// 			<h2 className='header'>
	// 				Welcome to Janando Cleaning Services Inc.
	// 			</h2>
	// 			<h4 className='subheader'>
	// 				We service the greater Tampa Bay area
	// 			</h4>
	// 			<Button>Get a Free Quote</Button>
	// 		</div>
	// 		<hr />
	// 			<h3 style={{ textAlign: 'center' }}>Our Services</h3>
	// 		<Container className="servicesSection">
	// 			<div className='singleService'>
	// 					<Image
	// 						src={ecoFriendlyImg}
	// 						alt="Ecofriendly Image"
	// 						style={{ height: "10vw", width: "10vw" }}
	// 					/>
	// 					<h4>Eco Friendly</h4>
	// 			</div>
	// 			<div className='singleService'>
	// 					<Image
	// 						src={home5}
	// 						alt="Commercial Building Image"
	// 						style={{ height: "10vw", width: "10vw" }}
	// 					/>
	// 					<h4>Residential</h4>
	// 			</div>
	// 			<div className='singleService'>
	// 					<Image
	// 						src={building}
	// 						alt="Commercial Building Image"
	// 						style={{ height: "10vw", width: "10vw" }}
	// 					/>
	// 					<h4>Commercial</h4>
	// 			</div>
	// 		</Container>
	// 	</Container>
	// );
}

// <Row>
// 	<Col>
// 		<Row style={{ display: "flex", justifyContent: "center", width: "100%" }}>
// 			<Col>
// 				<ul>
// 					<li>Tampa</li>
// 					<li>Clearwater</li>
// 					<li>St. Petersburg</li>
// 					<li>Brandon</li>
// 					<li>Bradenton</li>
// 					<li>Largo</li>
// 					<li>Lakeland</li>
// 					<li>Palm Harbor</li>
// 					<li>Spring Hill</li>
// 					<li>Safety Harbor</li>
// 				</ul>
// 			</Col>
// 			<Col>
// 				<ul>
// 					<li>Town n Country</li>
// 					<li>Land o Lakes</li>
// 					<li>Lutz</li>
// 					<li>New Port Richey</li>
// 					<li>Oldsmar</li>
// 					<li>Pinellas Park</li>
// 					<li>Plant City</li>
// 					<li>Riverview</li>
// 				</ul>
// 			</Col>
// 			<Col>
// 				<ul>
// 					<li>Tarpon Springs</li>
// 					<li>Temple Terrace</li>
// 					<li>Zephyrhills</li>
// 					<li>Valrico</li>
// 					<li>Wesley Chapel</li>
// 					<li>Seffner</li>
// 					<li>Dade City</li>
// 					<li>Hudson</li>
// 					<li>Port Richey</li>
// 				</ul>
// 			</Col>
// 		</Row>
// 	</Col>
// </Row>;
