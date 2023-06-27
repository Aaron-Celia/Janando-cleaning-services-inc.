'use client';
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import styles from '../slides.module.css'
import slider1 from '../../public/slider1.jpg'
import slider2 from '../../public/slider2.jpg'
import slider3 from '../../public/slider3.jpg'
import slider4 from '../../public/slider4.jpg'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const imgs = [
    {
        src: slider1
    },
    {
        src: slider2
    },
    {
        src: slider3
    },
    {
        src: slider4
    }
]

const imgStyles = {
	width: "100vw",
	height: "450px",
	objectFit: "cover"
};

const settings = {
	lazyload: true,
	nav: false,
	mouseDrag: true,
    mode: 'carousel',
    controlsPosition: 'bottom',
    arrowKeys: true,
    autoplay: true,
    // controlsContainer: '.controlContainer',
    // prevButton: '.previous',
    // nextButton: '.next'
};

export default function Slider2() {
	return (
		<TinySlider settings={settings}>
			{/* <div className={`controls ${styles.controlContainer}`}> */}
				{/* <button className={styles.previous}> */}
					{/* <FontAwesomeIcon icon="fa-solid fa-angle-left" /> */}
				{/* </button> */}
				{/* <button className={styles.next}> */}
					{/* <FontAwesomeIcon icon="fa-solid fa-angle-right" /> */}
				{/* </button> */}
			{/* </div> */}
			{imgs.map((el, index) => (
				<div key={index} style={{ position: "relative" }}>
					<Image
						className={`tns-lazy-img`}
						src={el.src}
						data-src={el.src}
						alt="image"
						style={imgStyles}
					/>
				</div>
			))}
		</TinySlider>
	);
}
