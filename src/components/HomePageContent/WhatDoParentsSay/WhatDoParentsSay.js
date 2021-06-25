import React from "react";
import AlanTeaching2 from "../../../assets/img/alanteachingpart2.jpeg";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
		// textAlign: "center",
		boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "50%",
		maxHeight: "50%",
	},
}));

const WhatDoParentsSay = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>
					What do our parents and student say?
				</h1>
				<Grid xs={12}>
					<img
						src={AlanTeaching2}
						alt="AlanTeaching2"
						className={classes.img}
					/>
					Image Carousel function goes here LOL
				</Grid>
			</Container>
		</div>
	);
};

export default WhatDoParentsSay;
