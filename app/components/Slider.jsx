'use client';
import styles from '../slider.module.css';
import { tns } from 'tiny-slider';

// let slider = tns({
//     container: '.mySlider',
//     'slideBy': 1,
//     'speed': 400,
//     'nav': false,
//     controlsContainer: '.controls',
//     prevButton: '.previous',
//     nextButton: '.next',
//     // screen widths
//     responsive: {
//         1600: {
//             items: 1,
//             gutter: 20
//         },
//         1024: {
//             items: 1,
//             gutter: 20,
//         },
//         768: {
//             items: 1,
//             gutter: 20
//         },
//         480: {
//             items: 1,
//             gutter: 20
//         }
//     }
// })

export default function Slider() {
    let slider = tns({
        container: '#slider',
        // items: 1
    })
  return (
		<section id='slider' className={styles.slider}>
			<div className={styles.container}>
				<div className={styles.subcontainer}>
					<div className={styles.sliderWrapper}>
						<div className={styles.controller}>
							<div>
								<h2>Title</h2>
							</div>
							<div className={styles.controls}>
								<button className={styles.previous}>
									<i className="fa-solid fa-angle-left"></i>
								</button>
								<button className={styles.next}>
									<i className="fa-solid fa-angle-right"></i>
								</button>
							</div>
						</div>
						<br />
						<div className={styles.mySlider}>
							<div>
								<div className={styles.slide}>
									<div className={`${styles.slideImg} ${styles.img1}`}>
										<a href="#">Learn More</a>
									</div>
									<br />
									<div>
										<h3>California</h3>
										<p>Los Angelous</p>
									</div>
								</div>
							</div>
							<div>
								<div className={styles.slide}>
									<div className={`${styles.slideImg} ${styles.img2}`}>
										<a href="#">Learn More</a>
									</div>
									<br />
									<div>
										<h3>New York</h3>
										<p>New York</p>
									</div>
								</div>
							</div>
							<div>
								<div className={styles.slide}>
									<div className={`${styles.slideImg} ${styles.img3}`}>
										<a href="#">Learn More</a>
									</div>
									<br />
									<div>
										<h3>California</h3>
										<p>San Diego</p>
									</div>
								</div>
							</div>
							<div>
								<div className={styles.slide}>
									<div className={`${styles.slideImg} ${styles.img4}`}>
										<a href="#">Learn More</a>
									</div>
									<br />
									<div>
										<h3>South Dakota</h3>
										<p>Keystone</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
