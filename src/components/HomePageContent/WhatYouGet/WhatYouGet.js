import React from "react";
import BlueVectorBackground2 from "../../../assets/img/blueVector2.png";

import lightBulb from "../../../assets/img/lightbulb 1.png";
import Confetti from "../../../assets/img/confetti.png";
import TeamWork from "../../../assets/img/support 2.png";
import Goal from "../../../assets/img/goal.png";

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
								src={lightBulb}
								alt="lightBulb"
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
							<img
								src={Confetti}
								alt="Confetti"
								className={classes.imgSetting}
							/>
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
							<img
								src={TeamWork}
								alt="TeamWork"
								className={classes.imgSetting}
							/>
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
							<img src={Goal} alt="Goal" className={classes.imgSetting} />
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
