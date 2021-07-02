import React from "react";
import { Link } from "react-router-dom";

import InteractiveClass from "../../../assets/img/interactiveclass.jpg";
import alanteaching from "../../../assets/img/alanteaching.jpg";
import alanteaching2 from "../../../assets/img/alanteachingpart2.jpeg";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
	},

	imgSetting: {
		maxWidth: "100%",
		maxHeight: "100%",
		borderRadius: "20px",
		boxShadow: "box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25))",
		margin: "auto",
		display: "block",
	},
	seeMoreLink: {
		// listStyleType: "none",
		// display: "flex",
		// flexDirection: "row",
		// justifyContent: "space-between",

		// padding: "0",
		// width: "85%",
		cursor: "pointer",
		fontWeight: "bold",
		color: "#394781",
		textAlign: "center",

		"&:hover": {
			color: "rgb(230, 117, 113)",
			transition: "0.5s",
			// fontWeight: "1600",
		},
		"&:a": {
			textDecoration: "none",
		},
	},
	link: {
		textDecoration: "none",
		// color: theme.palette.text.primary,
	},
}));

const CourseGallery = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>Course Gallery</h1>
				<Grid container spacing={6} justify="space-between">
					<Grid item sm={3}>
						<img
							src={alanteaching2}
							alt="alanteaching2"
							className={classes.imgSetting}
						/>
					</Grid>
					<Grid item sm={3}>
						<img
							src={alanteaching}
							alt="alanteaching"
							className={classes.imgSetting}
						/>
					</Grid>
					<Grid item sm={3}>
						<img
							src={InteractiveClass}
							alt="InteractiveClass"
							className={classes.imgSetting}
						/>
					</Grid>
				</Grid>
				<Link to="/courseGallerySeeMore" className={classes.link}>
					<h2 className={classes.seeMoreLink}>See More</h2>
				</Link>
			</Container>
		</div>
	);
};

export default CourseGallery;
