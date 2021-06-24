import React from "react";

import AlanTeaching from "../../../assets/img/alanteaching.jpg";
import AlanTeaching2 from "../../../assets/img/alanteachingpart2.jpeg";
import TvScreen from "../../../assets/img/tvscreen.jpg";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
		backgroundColor: "pink",
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

const CourseGallery = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>Course Gallery</h1>
				<Grid container spacing={3}>
					<Grid item xs>
						<img
							src={AlanTeaching}
							alt="AlanTeaching"
							className={classes.img}
						/>
						<p>Alan Teaching kids</p>
						<p>Learn More</p>
					</Grid>
					<Grid item xs>
						<img
							src={AlanTeaching2}
							alt="AlanTeaching2"
							className={classes.img}
						/>
						<p>Alan in a vibrant classroom</p>
						<p>Learn More</p>
					</Grid>
					<Grid item xs>
						<img src={TvScreen} alt="Screen" className={classes.img} />
						<p>Programming fun</p>
						<p>Learn More</p>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default CourseGallery;
