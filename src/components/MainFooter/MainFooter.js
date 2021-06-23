import React from "react";
import "./MainFooterStyle.css";

import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
		backgroundColor: "pink",
	},
}));

const MainFooter = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item md>
						<div className="ContentContainer">
							<h4>Program</h4>
							<h4>Our Team</h4>
							<h4>Teaching with Us</h4>
							<h4>Support</h4>
							<h4>FAQ</h4>
						</div>
					</Grid>

					<Grid item xs={6}>
						<div className="ContentContainer">
							{/* <h4>Subscribe</h4> */}
							<TextField
								id="filled-full-width"
								label="Subscribe"
								style={{ margin: 8 }}
								placeholder="Email"
								fullWidth
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
								variant="filled"
							/>
						</div>
					</Grid>
				</Grid>
				<Divider style={{ margin: "3%" }} />
				<div className="footerLogos">
					<LinkedInIcon fontSize="inherit" />
					<FacebookIcon fontSize="inherit" />
					<TwitterIcon fontSize="inherit" />
				</div>
				<div className="ContentContainer">
					<h5>© LevelUp Works 2021</h5>
					<h5>Privacy - Terms</h5>
				</div>
			</Container>
		</div>
	);
};

export default MainFooter;
