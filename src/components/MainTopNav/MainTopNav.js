import React from "react";
import LevelUpWorksLogo from "../../assets/img/leveluplogov2.png";
import LoginButton from "../LoginButton/LoginButton";
// import "./MainTopNav.css";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
	},
	// list: {
	// 	listStyleType: "none",
	// 	display: "flex",
	// 	flexDirection: "row",
	// 	justifyContent: "space-between",
	// 	textDecoration: "none",
	// },
}));

const MainTopNav = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid container spacing={2} justify="space-between">
					<Grid
						item
						xs
						container
						justify="space-around"
						direction="row"
						alignItems="flex-end"
					>
						<Link to="/">
							<img src={LevelUpWorksLogo} alt="Level Up Works" />
						</Link>
						<h4 style={{ margin: "0" }}>Program</h4>
						<h4 style={{ margin: "0" }}>Our Team</h4>
						<h4 style={{ margin: "0" }}>Teaching with Us</h4>
						<h4 style={{ margin: "0" }}>Support</h4>
						<h4 style={{ margin: "0" }}>FAQ</h4>
					</Grid>

					<Grid
						item
						xs
						container
						justify="flex-end"
						direction="row"
						alignItems="flex-end"
					>
						<LoginButton showEnrol={true} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default MainTopNav;
