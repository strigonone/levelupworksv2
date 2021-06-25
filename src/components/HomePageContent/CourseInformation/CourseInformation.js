import React from "react";
import InteractiveClass from "../../../assets/img/interactiveclass.jpg";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
	},
	gridImgs: {
		// textAlign: "center",
		display: "flex",
		flexWrap: "wrap",
		// flexDirection: "row",
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
	},
}));

const CourseInformation = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>Course Information</h1>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<img
							src={InteractiveClass}
							alt="Interactiveclass"
							className={classes.img}
						/>
						Image Carousel function
					</Grid>
					<Grid item xs={6}>
						<h2>Programming language we are using</h2>
						<p>
							Analysing language, symbols, and texts in order to understand and
							make sense of the codes in which knoweldge is expressed
						</p>
						<li>Location</li>
						<li>Timetable</li>
						<li>Fee</li>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default CourseInformation;
