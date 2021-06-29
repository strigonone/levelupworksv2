import React from "react";
import BlueVectorBackground2 from "../../../assets/img/blueVector2.png";

import RocketInTheSky from "../../../assets/img/rocket 1.png";
import Idea from "../../../assets/img/idea.png";
import Puzzle from "../../../assets/img/Puzzle.png";
import SmartGuy from "../../../assets/img/SmartGuy.png";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
		backgroundImage: `url(${BlueVectorBackground2})`,
		backgroundSize: "Cover",
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
		borderRadius: "100px",
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

const WhatYouGet = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>
					What Will Your Child Get from Our Course?
				</h1>
				<Grid container spacing={3} direction="row">
					<Grid
						item
						xs={6}
						sm={3}
						container
						justify="space-around"
						direction="column"
						alignItems="center"
						style={{ fontWeight: "bold" }}
					>
						<Paper className={classes.paper}>
							<img
								src={RocketInTheSky}
								alt="RocketInTheSky"
								className={classes.imgSetting}
							/>
						</Paper>
						Problem Solving
						<CheckBoxIcon />
					</Grid>
					<Grid
						item
						xs={6}
						sm={3}
						container
						justify="space-around"
						direction="column"
						alignItems="center"
						style={{ fontWeight: "bold" }}
					>
						<Paper className={classes.paper}>
							<img src={Idea} alt="Idea" className={classes.imgSetting} />
						</Paper>
						Fun Learning
						<CheckBoxIcon />
					</Grid>
					<Grid
						item
						xs={6}
						sm={3}
						container
						justify="space-around"
						direction="column"
						alignItems="center"
						style={{ fontWeight: "bold" }}
					>
						<Paper className={classes.paper}>
							<img src={Puzzle} alt="Puzzle" className={classes.imgSetting} />
						</Paper>
						Team Work
						<CheckBoxIcon />
					</Grid>
					<Grid
						item
						xs={6}
						sm={3}
						container
						justify="space-around"
						direction="column"
						alignItems="center"
						style={{ fontWeight: "bold" }}
					>
						<Paper className={classes.paper}>
							<img
								src={SmartGuy}
								alt="SmartGuy"
								className={classes.imgSetting}
							/>
						</Paper>
						Professional Knowledge
						<CheckBoxIcon />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default WhatYouGet;
