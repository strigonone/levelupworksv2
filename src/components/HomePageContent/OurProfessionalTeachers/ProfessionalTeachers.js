import React from "react";
import AlanSelfie from "../../../assets/img/AlanSelfie.jpg";
import YounaChick from "../../../assets/img/youna_d800.jpg";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
		// textAlign: "center",
		backgroundColor: "#FFDBE9",
		boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
	},
}));

const ProfessionalTeachers = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>Our Professional Teachers</h1>
				<Grid container justify="center" alignItems="center">
					<Grid xs>
						<img src={AlanSelfie} alt="AlanSelfie" className={classes.img} />
					</Grid>
					<Grid xs>
						<img src={YounaChick} alt="YounaChick" className={classes.img} />
					</Grid>
				</Grid>
				<Grid container justify="center">
					<Grid xs>
						<h3 style={{ textAlign: "center" }}>Alan Kawaii ㅇㅅㅇ</h3>
						<li>Professional Educator and Technologist</li>
						<li>
							Co-Founder and Chief Technologiest of Mission ready HQ - a
							professional tech career accelerator programme
						</li>
						<li>
							Designed high impact tech education programmes for Unitec and
							Otaho Polytechnic
						</li>
						<li>Trains NZ teachers to teach the Digital Curriculum</li>
						<li>
							Teach experience include 10 years in senior and leading technical
							roles in IBM NZ
						</li>
					</Grid>
					<Grid xs>
						<h3 style={{ textAlign: "center" }}>
							Youna Jung - Guest Instructor
						</h3>
						<li>School teaching and corporate training experience</li>
						<li>I.T Application Specialist at Auckland Airport</li>
						<li>Bachelor degree majored in Education</li>
						<li>Enjoys playing musical instruments and ice figure skating</li>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default ProfessionalTeachers;
