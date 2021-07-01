import React from "react";
import { Link } from "react-router-dom";

import RocketInTheSky from "../../../assets/img/rocket 1.png";
import Idea from "../../../assets/img/idea.png";
import Puzzle from "../../../assets/img/Puzzle.png";
import SmartGuy from "../../../assets/img/SmartGuy.png";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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
		padding: theme.spacing(3),
		margin: theme.spacing(3),
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
	buttonStyle: {
		// background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		background: "#FFC144",
		border: 0,
		borderRadius: 5,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "black",
		height: 48,
		padding: "0 30px",
		// marginTop: 10,
		fontWeight: "bold",
		textAlign: "center",
		justifyContent: "center",
		// marginLeft: 5,
		// fontFamily: "Titillium Web",
		// zIndex: "0",

		marginBlock: "15%",
		"&:hover": {
			background: "#283258",
			color: "white",
		},
	},
	imgSetting: {
		maxWidth: "75px",
		maxHeight: "75px",
	},
	link: {
		textDecoration: "none",
		color: theme.palette.text.primary,
		fontFamily: "Titillium Web",
	},
}));

const HowDoesItWork = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>How does it work?</h1>
				<Grid container spacing={6} direction justify="space-around"></Grid>

				<Grid container spacing={6} direction justify="space-around">
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
				<Grid container justify="center">
					<Link className={classes.link} to="/enrol">
						<Button className={classes.buttonStyle} variant="contained">
							START NOW
						</Button>
					</Link>
				</Grid>
			</Container>
		</div>
	);
};

export default HowDoesItWork;
