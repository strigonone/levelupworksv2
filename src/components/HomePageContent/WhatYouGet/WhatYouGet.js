import React from "react";

import TeachingKidsIcon from "./TeachingKidsIcon";
import girlcuttingimage from "../../../assets/img/girlcuttingimage.jpg";
import idea from "../../../assets/img/idea.png";
import crticalThinking from "../../../assets/img/criticalThinking.png";
import puzzle from "../../../assets/img/puzzling.jpg";
import girlsplaying from "../../../assets/img/girlsplaying.jpg";
import teamhands from "../../../assets/img/teamhands.png";
import Atom from "../../../assets/img/atom.png";
import laptopgirl from "../../../assets/img/girlonlaptop.jpg";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
		backgroundColor: "#FFDBE9",
		boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
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
		maxWidth: "50%",
		maxHeight: "50%",
	},
}));

const WhatYouGet = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>
					What will your child get from this course?
				</h1>
				<Grid container>
					<Grid
						item
						lg
						container
						alignItems="center"
						direction="column"
						spacing={4}
					>
						<TeachingKidsIcon
							background={girlcuttingimage}
							text="Creativity & Individuality"
							icon={<img src={idea} alt="Idea" className={classes.img} />}
						/>
						<DoneIcon fontSize="large" style={{ color: "green" }} />
					</Grid>
					<Grid
						item
						lg
						container
						alignItems="center"
						direction="column"
						spacing={4}
					>
						<TeachingKidsIcon
							background={puzzle}
							text="Critical Thinking & Problem Solving"
							icon={
								<img src={crticalThinking} alt="Idea" className={classes.img} />
							}
						/>
						<DoneIcon fontSize="large" style={{ color: "green" }} />
					</Grid>
					<Grid
						item
						lg
						container
						alignItems="center"
						direction="column"
						spacing={4}
					>
						<TeachingKidsIcon
							background={girlsplaying}
							text="Communication & Collaboration"
							icon={<img src={teamhands} alt="Idea" className={classes.img} />}
						/>
						<DoneIcon fontSize="large" style={{ color: "green" }} />
					</Grid>
					<Grid
						item
						lg
						container
						alignItems="center"
						direction="column"
						spacing={4}
					>
						<TeachingKidsIcon
							background={laptopgirl}
							text="Technology & Future Focus"
							icon={<img src={Atom} alt="Idea" className={classes.img} />}
						/>
						<DoneIcon fontSize="large" style={{ color: "green" }} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default WhatYouGet;
