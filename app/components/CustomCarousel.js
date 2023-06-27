'use client';
import Image from "next/image";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import homeImg1 from '../../public/home.jpg'
import homeImg2 from '../../public/phoneHomeImg.jpeg'
import homeImg3 from '../../public/cleaningImg1.jpg'

export default function CustomCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
		as='div'
			style={{ height: "30vh", width: "100vw", margin: '0' }}
			activeIndex={index}
			onSelect={handleSelect}>
			<Carousel.Item>
				<Image
					className="d-block w-100"
					style={{ height: "100%", width: "100%" }}
					src={homeImg1}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image
					className="d-block w-100"
					style={{ height: "100%", width: "100%" }}
					src={homeImg2}
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image
					className="d-block w-100"
					style={{ height: "100%", width: "100%" }}
					src={homeImg3}
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
