import React from "react";
import "./AreYouReadyStyle.css";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
		textAlign: "center",
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
		maxWidth: "20%",
		maxHeight: "20%",
	},
	buttonStyle: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		border: 0,
		borderRadius: 5,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		height: 48,
		padding: "0 30px",
		marginTop: 10,
		fontWeight: "bold",
		textAlign: "center",
		marginLeft: 5,
		fontFamily: "Titillium Web",
		zIndex: '-2'
	},
}));

const AreYouReady = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>Are You Ready?</h1>
				<p>
					Let us help you advance students in Digital Technoligies and other
					learning areas with our project-based learning programme
				</p>

				<Button className={classes.buttonStyle} variant="contained">
					Enroll Now
				</Button>
			</Container>
		</div>
	);
};

export default AreYouReady;
