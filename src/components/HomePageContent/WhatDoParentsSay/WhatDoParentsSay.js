import React, { Component } from "react";
import Slider from "react-slick";
import "./WhatDoParentsSayStyle.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "@material-ui/core/Container";
// import Divider from "@material-ui/core/Divider";

import jane from "../../../assets/img/jane.png";
import caitlyn from "../../../assets/img/caitlyn.png";
import Eiko from "../../../assets/img/char_eiko.jpg";
import Barret from "../../../assets/img/ff7barret.png";
// import Grid from "@material-ui/core/Grid";

export default class WhatDoParentsSay extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 2,
			slidesToScroll: 2,
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
			<Container  maxWidth="lg">
				<h2 style={{ textAlign: "center" }}>
					What Do Our Parents and Students Say?
				</h2>
				<Slider className="border-carousel" {...settings}>
					<div className="box">
						<img src={jane} alt="jane" className="imgSettings" />
						<h3>Jane</h3>
						<h5>Parent</h5>
						<p>
							"I'm happy seeing my son, David happy with his course. I've seen a
							different side of him. Thanks to Alan for teaching him new
							things."
						</p>
					</div>

					{/* <Divider orientation="vertical" /> */}
					<div className="box">
						<img src={caitlyn} alt="caitlyn" className="imgSettings" />
						<h3>Camille, 10</h3>
						<h5>Student</h5>
						<p>
							"It's fun solving problems with friends! My favourite part of the
							class is when we create new projects. I would love to continue for
							next year"
						</p>
					</div>
					{/* <Divider orientation="vertical" /> */}
					<div className="box">
						<img src={Barret} alt="Barret" className="imgSettings" />
						<h3>Barret</h3>
						<h5>Parent</h5>
						<p>
							"My baby girl Eiko is learning alot, she is doing great in this
							course!"
						</p>
					</div>
					<div className="box">
						<img src={Eiko} alt="Eiko" className="imgSettings" />
						<h3>Eiko, 6</h3>
						<h5>Student</h5>
						<p>"Kupo Kupo! I love cooking!"</p>
					</div>
				</Slider>
			</Container>
			
		);
	}
}
