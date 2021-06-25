import React from "react";

// import GRIDAKL from "../../../assets/img/GRIDAKL.jpeg";
// import Tw21 from "../../../assets/img/techweek-logo-short-blue.png";
// import NZTech from "../../../assets/img/NZTech-300dpi2.png";
// import missionReadyLogo from "../../../assets/img/missionReadyLogo.png";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
		// boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

const HowDoesItWork = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg" spacing={3}>
				<h1 style={{ textAlign: "center" }}>How does it work?</h1>
				<Grid container spacing={6}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							Different levels for students with different learning expeirences
							and progress
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							Learning by doing with a lot of fun
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default HowDoesItWork;
