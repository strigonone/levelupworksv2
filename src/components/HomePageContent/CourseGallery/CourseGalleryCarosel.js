import React, { Component } from "react";
import Slider from "react-slick";
import "./CourseGalleryStyle.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "@material-ui/core/Container";
// import Divider from "@material-ui/core/Divider";

import InteractiveClass from "../../../assets/img/interactiveclass.jpg";
import alanteaching from "../../../assets/img/alanteaching.jpg";
import alanteaching2 from "../../../assets/img/alanteachingpart2.jpeg";
import randomteacher from "../../../assets/img/randomguyteaching.jpg";
import tvscreen from "../../../assets/img/tvscreen.jpg";
import girlonlaptop from "../../../assets/img/girlonlaptop.jpg";
import girlcuttingimage from "../../../assets/img/girlcuttingimage.jpg";
import happystudents from "../../../assets/img/happystudents.jpg";
import girlsplaying from "../../../assets/img/girlsplaying.jpg";

// import Grid from "@material-ui/core/Grid";

export default class CourseGallery extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,

			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};

		return (
			<Container maxWidth="lg">
				<h2 style={{ textAlign: "center" }}>Course Gallery</h2>
				<Slider {...settings}>
					<div>
						<img
							src={InteractiveClass}
							alt="InteractiveClass"
							className="gallerySettings"
						/>
					</div>

					{/* <Divider orientation="vertical" /> */}
					<div>
						<img
							src={alanteaching}
							alt="alanteaching"
							className="gallerySettings"
						/>
					</div>
					{/* <Divider orientation="vertical" /> */}
					<div>
						<img
							src={alanteaching2}
							alt="alanteaching2"
							className="gallerySettings"
						/>
					</div>
					<div>
						<img
							src={randomteacher}
							alt="randomteacher"
							className="gallerySettings"
						/>
					</div>
					<div>
						<img src={tvscreen} alt="tvscreen" className="gallerySettings" />
					</div>
					<div>
						<img
							src={girlonlaptop}
							alt="girlonlaptop"
							className="gallerySettings"
						/>
					</div>
					<div>
						<img
							src={girlcuttingimage}
							alt="girlcuttingimage"
							className="gallerySettings"
						/>
					</div>
					<div>
						<img
							src={happystudents}
							alt="happystudents"
							className="gallerySettings"
						/>
					</div>
					<div>
						<img
							src={girlsplaying}
							alt="girlsplaying"
							className="gallerySettings"
						/>
					</div>
				</Slider>
			</Container>
		);
	}
}
