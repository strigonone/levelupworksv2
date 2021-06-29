import React from "react";

import RocketInTheSky from "../../../assets/img/rocket 1.png";
import Idea from "../../../assets/img/idea.png";
import Puzzle from "../../../assets/img/Puzzle.png";
import SmartGuy from "../../../assets/img/SmartGuy.png";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
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
		// color: theme.palette.text.secondary,
		boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
		borderRadius: "40px",
		border: "solid 3px black",
		color: "#e67571",
		fontWeight: "bold",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
	},
	imgSetting: {
		maxWidth: "75px",
		maxHeight: "75px",
	},
}));

const HowDoesItWork = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>How does it work?</h1>
				<Grid container spacing={3} direction="row">
					<Grid
						item
						xs={6}
						sm={3}
						container
						justify="space-around"
						direction="column"
						alignItems="center"
					>
						<Paper className={classes.paper}>
							Beginner
							<img
								src={RocketInTheSky}
								alt="RocketInTheSky"
								className={classes.imgSetting}
							/>
						</Paper>
						Stimulate Interest
					</Grid>
					<Grid
						item
						xs={6}
						sm={3}
						container
						justify="space-around"
						direction="column"
						alignItems="center"
					>
						<Paper className={classes.paper}>
							Intermediate
							<img src={Idea} alt="Idea" className={classes.imgSetting} />
						</Paper>
						Advanced Computational Thinking
					</Grid>
					<Grid
						item
						xs={6}
						sm={3}
						container
						justify="space-around"
						direction="column"
						alignItems="center"
					>
						<Paper className={classes.paper}>
							Advanced
							<img src={Puzzle} alt="Puzzle" className={classes.imgSetting} />
						</Paper>
						Real World Problem Solving
					</Grid>
					<Grid
						item
						xs={6}
						sm={3}
						container
						justify="space-around"
						direction="column"
						alignItems="center"
					>
						<Paper className={classes.paper}>
							Professional
							<img
								src={SmartGuy}
								alt="SmartGuy"
								className={classes.imgSetting}
							/>
						</Paper>
						Professional Programming Language
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default HowDoesItWork;
