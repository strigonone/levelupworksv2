import React from "react";
import "./SponsorsAndPartnersStyle.css";
import GRIDAKL from "../../../assets/img/GRIDAKL.jpeg";
import Tw21 from "../../../assets/img/techweek-logo-short-blue.png";
import NZTech from "../../../assets/img/NZTech-300dpi2.png";
import missionReadyLogo from "../../../assets/img/missionReadyLogo.png";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
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
		maxWidth: "20%",
		maxHeight: "20%",
	},
}));

const SponsorsAndPartners = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>Sponsors and Partners</h1>

				<Grid
					item
					xs={12}
					alignContent="center"
					direction
					justify="space-between"
					className={classes.gridImgs}
				>
					<img src={NZTech} alt="NZTech" className={classes.img} />
					<img
						src={missionReadyLogo}
						alt="MissionReadyLogo"
						className={classes.img}
					/>
					<img src={GRIDAKL} alt="gridAkl" className={classes.img} />
					<img src={Tw21} alt="tw21" className={classes.img} />
				</Grid>
			</Container>
		</div>
	);
};

export default SponsorsAndPartners;
