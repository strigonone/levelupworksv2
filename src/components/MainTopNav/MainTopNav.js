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
	listStyle: {
		listStyleType: "none",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		textDecoration: "none",
		padding: "0",
		width: "85%",
		cursor: "pointer",
		fontWeight: "bold",

		"& li:hover": {
			color: "rgb(230, 117, 113)",
			transition: "0.5s",
			// fontWeight: "600",
		},
	},
}));

const MainTopNav = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid container spacing={3} justify="space-between">
					<Grid
						item
						md={6}
						container
						justify="space-between"
						direction="row"
						alignItems="flex-end"
					>
						<Link to="/">
							<img src={LevelUpWorksLogo} alt="Level Up Works" />
						</Link>
						<ul className={classes.listStyle}>
							<li>Program</li>
							<li>Our Team</li>
							<li>Teaching with Us</li>
							<li>Support</li>
							<li>FAQ</li>
						</ul>
					</Grid>

					<Grid
						item
						sm
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
