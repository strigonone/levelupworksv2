import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import InteractiveClass from "../../../assets/img/interactiveclass.jpg";
import alanteaching from "../../../assets/img/alanteaching.jpg";
import alanteaching2 from "../../../assets/img/alanteachingpart2.jpeg";
import boysinclass from "../../../assets/img/boysinclass.jpg";
import boysonlaptop from "../../../assets/img/boyonlaptop.jpg";
import girldancing from "../../../assets/img/girldancing.jpg";
import happystudents from "../../../assets/img/happystudents.jpg";
import girlonlaptop from "../../../assets/img/girlonlaptop.jpg";
import girlsplaying from "../../../assets/img/girlsplaying.jpg";
import girlcuttingimage from "../../../assets/img/girlcuttingimage.jpg";
import randomteacher from "../../../assets/img/randomguyteaching.jpg";
import tvscreen from "../../../assets/img/tvscreen.jpg";

// https://material-ui.com/components/grid-list/

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,

		flexGrow: 1,
		padding: theme.spacing(4),
	},
	gridList: {
		width: 600,
		height: 550,
	},
}));

const tileData = [
	{
		img: InteractiveClass,
		title: "InteractiveClass",
		author: "Strigon",
		cols: 2,
	},
	{
		img: alanteaching,
		title: "alanteaching",
		author: "Strigon",
		cols: 1,
	},
	{
		img: alanteaching2,
		title: "alanteaching2",
		author: "Strigon",
		cols: 1,
	},
	{
		img: boysinclass,
		title: "boysinclass",
		author: "Strigon",
		cols: 1,
	},
	{
		img: boysonlaptop,
		title: "boysonlaptop",
		author: "Strigon",
		cols: 1,
	},
	{
		img: girldancing,
		title: "girldancing",
		author: "Strigon",
		cols: 1,
	},
	{
		img: happystudents,
		title: "happystudents",
		author: "Strigon",
		cols: 2,
	},
	{
		img: girlonlaptop,
		title: "girlonlaptop",
		author: "Strigon",
		cols: 2,
	},
	{
		img: girlsplaying,
		title: "girlsplaying",
		author: "Strigon",
		cols: 1,
	},
	{
		img: girlcuttingimage,
		title: "girlcuttingimage",
		author: "Strigon",
		cols: 3,
	},
	{
		img: randomteacher,
		title: "randomteacher",
		author: "Strigon",
		cols: 1,
	},
	{
		img: tvscreen,
		title: "tvscreen",
		author: "Strigon",
		cols: 2,
	},
];

export default function CourseGalleryGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<GridList cellHeight={160} className={classes.gridList} cols={3}>
				{tileData.map((tile) => (
					<GridListTile key={tile.img} cols={tile.cols || 1}>
						<img src={tile.img} alt={tile.title} />
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}
