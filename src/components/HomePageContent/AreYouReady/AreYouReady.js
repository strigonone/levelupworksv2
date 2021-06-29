import React from "react";

import { Link } from "react-router-dom";

// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import MainBackground from "../../../assets/img/VectorBottomYellow.png";
import KidsLeft from "../../../assets/img/KidsLeft.png";
import KidsRight from "../../../assets/img/KidsRight.png";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundImage: `url(${MainBackground})`,
		backgroundSize: "Cover",
		padding: theme.spacing(4),
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
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
		// marginLeft: 5,
		// fontFamily: "Titillium Web",
		// zIndex: "0",
	},
	link: {
		textDecoration: "none",
		color: theme.palette.text.primary,
		fontFamily: "Titillium Web",
	},
}));

const AreYouReady = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid justify="space-between" container spacing={3}>
					<Grid item md={3}>
						<img src={KidsLeft} alt="kidsleft" className={classes.img} />
					</Grid>
					<Grid
						item
						md
						container
						alignContent="center"
						justify="center"
						textAlign="center"
					>
						<h1 style={{ color: "#E67571" }}>Are you ready?</h1>
						<p style={{ textAlign: "center" }}>
							A fun and new experience for kids to be creative while applying
							computational thinking & design thinking
						</p>
						<Link className={classes.link} to="/enrol">
							<Button className={classes.buttonStyle} variant="contained">
								Enroll Now
							</Button>
						</Link>
					</Grid>
					<Grid item md={3}>
						<img src={KidsRight} alt="KidsRight" className={classes.img} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default AreYouReady;
