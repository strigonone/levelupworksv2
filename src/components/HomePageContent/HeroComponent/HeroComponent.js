import React from "react";
import LazyHero from "react-lazy-hero";
import YellowVector from "../../../assets/img/Vector 5.png";
import { Link } from "react-router-dom";

// import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// http://react-lazy-hero.danielstefanovic.com/

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		// padding: theme.spacing(4),
		// boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
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

const HeroComponent = () => {
	const classes = useStyles();

	return (
		// <div className={classes.root}>
		/* <Container maxWidth={false} disableGutters={true}> */
		<div>
			<LazyHero imageSrc={YellowVector} opacity="0">
				<h1>Prepare Young Minds​​ for a Better Future</h1>

				<Link className={classes.link} to="/enrol">
					<Button className={classes.buttonStyle} variant="contained">
						Enroll Now
					</Button>
				</Link>
			</LazyHero>
		</div>
		/* </Container> */
		/* </div> */
	);
};

export default HeroComponent;
