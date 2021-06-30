import React, { Component } from "react";
import Slider from "react-slick";
import "./testStyle.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "@material-ui/core/Container";
// import Divider from "@material-ui/core/Divider";

import jane from "../../assets/img/jane.png";
import caitlyn from "../../assets/img/caitlyn.png";
// import Grid from "@material-ui/core/Grid";

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			// infinite: true,
			speed: 500,
			slidesToShow: 2,
			slidesToScroll: 1,
			// autoplay: true,
			// autoplaySpeed: 5000,
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
				<h2 style={{ textAlign: "center" }}>
					What Do Our Parents and Students Say?
				</h2>
				<Slider {...settings}>
					<div className="box1">
						<div className="imgBox">
							<img src={jane} alt="jane" className="imgSettings" />
						</div>
						<div className="detailss">
							<h3>Jane</h3>
							<h5>Parent</h5>
							<p>
								"I'm happy seeing my son, David happy with his course. I've seen
								a different side of him. Thanks to Alan for teaching him new
								things."
							</p>
						</div>
					</div>
					{/* <Divider orientation="vertical" /> */}
					<div className="box1">
						<div className="imgBox">
							<img src={jane} alt="jane" className="imgSettings" />
						</div>
						<div className="detailss">
							<h3>Jane</h3>
							<h5>Parent</h5>
							<p>
								"I'm happy seeing my son, David happy with his course. I've seen
								a different side of him. Thanks to Alan for teaching him new
								things."
							</p>
						</div>
					</div>
					{/* <Divider orientation="vertical" /> */}
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
				</Slider>
			</Container>
		);
	}
}
