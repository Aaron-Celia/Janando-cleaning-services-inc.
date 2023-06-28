import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "../slides.module.css";

export default function CarouselComponent() {
	return (
		<Carousel
			autoPlay={true}
			useKeyboardArrows={true}
			stopOnHover={false}
			swipeable={true}
			emulateTouch={true}
			infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
			showArrows={false}
			interval={5000}
			showStatus={false}
            >
			<div>
				<img src="/slider1.png" alt="img Slide 1" className={styles.slide} />
			</div>
			<div>
				<img src="/slider5.png" alt="img Slide 1" className={styles.slide} />
			</div>
			<div>
				<img src="/slider2.png" alt="img Slide 2" className={styles.slide} />
			</div>
			<div>
				<img src="/slider3.png" alt="img Slide 3" className={styles.slide} />
			</div>
			<div>
				<img src="/slider4.png" alt="img Slide 4" className={styles.slide} />
			</div>
		</Carousel>
	);
}
