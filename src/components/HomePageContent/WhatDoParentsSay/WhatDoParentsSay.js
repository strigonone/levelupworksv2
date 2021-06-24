import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
		textAlign: "center",
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "20%",
		maxHeight: "20%",
	},
}));

const WhatDoParentsSay = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>
					What do our parents and student say?
				</h1>
			</Container>
		</div>
	);
};

export default WhatDoParentsSay;
