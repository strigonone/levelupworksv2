import React from "react";
import PeopleLOL from "../../../assets/img/peopleLOL.png";
import BlueVectorBackground from "../../../assets/img/blueVector.png";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
		// textAlign: "center",
		backgroundImage: `url(${BlueVectorBackground})`,
		backgroundSize: "Cover",
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
	},
	buttonStyle: {
		// background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		background: "none",
		border: 0,
		borderRadius: 5,
		// boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
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
}));

const ProfessionalTeachers = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid container>
					<Grid xs container>
						<h2 style={{ color: "#394781" }}>Our Professional Teachers</h2>
						<p style={{ color: "#394781" }}>
							We have a team of designers, software developers and IT
							professionals who share the same passion for teaching. They make
							sure to make coding fun and exciting for kids!
						</p>
						<Button className={classes.buttonStyle} variant="contained">
							See More
						</Button>
					</Grid>
					<Grid xs>
						<img src={PeopleLOL} alt="peopleLOL" className={classes.img} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default ProfessionalTeachers;
