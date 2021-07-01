import React from "react";

import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import GRIDAKL from "../../assets/img/GRIDAKL.png";
import Tw21 from "../../assets/img/techweek-logo-short-blue.png";
import NZTech from "../../assets/img/NZTech-300dpi2.png";
import missionReadyLogo from "../../assets/img/missionReadyLogotransparant.png";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
		backgroundColor: "#394781",
		color: "#c2c2c2",
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "30%",
		maxHeight: "30%",
	},
	listStyle: {
		listStyleType: "none",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		textDecoration: "none",
		padding: "0",
		width: "85%",
		cursor: "pointer",
		// fontWeight: "bold",

		"& li:hover": {
			color: "rgb(230, 117, 113)",
			transition: "0.5s",
			fontWeight: "600",
		},
	},
}));

const MainFooter = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item sm={6} container justify="space-around">
						<ul className={classes.listStyle}>
							<li>Program</li>
							<li>Our Team</li>
							<li>Teaching with Us</li>
							<li>Support</li>
							<li>FAQ</li>
						</ul>
					</Grid>

					<Grid item lg>
						{/* <h4>Subscribe</h4> */}
						<TextField
							id="filled-full-width"
							label="Subscribe"
							// style={{ margin: 8 }}
							placeholder="Email"
							fullWidth
							color="secondary"
							// margin="normal"
							InputLabelProps={{
								shrink: true,
							}}
							variant="filled"
						/>
					</Grid>
				</Grid>
				<Divider style={{ margin: "3%", color: "#c2c2c2" }} />
				<Grid container spacing={3} justify="space-between">
					<Grid item sm={4}>
						<h5 style={{ margin: "2%" }}>Sponsors and Partners</h5>
						<Grid item sm alignContent="center" direction container>
							<img
								src={missionReadyLogo}
								alt="MissionReadyLogo"
								className={classes.img}
							/>
							<img src={GRIDAKL} alt="gridAkl" className={classes.img} />
							<img src={Tw21} alt="tw21" className={classes.img} />
							<img src={NZTech} alt="NZTech" className={classes.img} />
						</Grid>
					</Grid>
					<Grid item sm={4}>
						<Grid container justify="space-around">
							<LinkedInIcon fontSize="large" />
							<FacebookIcon fontSize="large" />
							<TwitterIcon fontSize="large" />
							<Grid container direction="row" justify="space-around">
								<h5>© LevelUp Works 2021</h5>
								<h5>Privacy - Terms</h5>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default MainFooter;
