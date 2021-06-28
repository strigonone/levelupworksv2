import React from "react";
import HowDoesItWorkProp from "./HowDoesItWorkProp";

import RocketInTheSky from "../../../assets/img/rocket 1.png";
import Idea from "../../../assets/img/idea.png";
import Puzzle from "../../../assets/img/Puzzle.png";
import SmartGuy from "../../../assets/img/SmartGuy.png";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

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
			<Container maxWidth="md" spacing={3}>
				<h1 style={{ textAlign: "center" }}>How does it work?</h1>
				<Grid container spacing={6}>
					<Grid item xs={3} container justify="space-around">
						<HowDoesItWorkProp
							text="Beginner"
							image={<img src={RocketInTheSky} alt="RocketInTheSky" />}
						/>
						Stimulate Interest
					</Grid>
					<Grid item xs={3} container justify="space-around">
						<HowDoesItWorkProp
							text="Intermediate"
							image={<img src={Idea} alt="Idea" />}
						/>
						Advanced Computational Thinking
					</Grid>
					<Grid item xs={3} container justify="space-around">
						<HowDoesItWorkProp
							text="Advanced"
							image={<img src={Puzzle} alt="Puzzle" />}
						/>
						Real World Problem Solving
					</Grid>
					<Grid item xs={3} container justify="space-around">
						<HowDoesItWorkProp
							text="Professional"
							image={<img src={SmartGuy} alt="SmartGuy" />}
						/>
						Professional Programming Language
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default HowDoesItWork;
