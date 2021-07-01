import React from "react";
// import CourseLocation from "./LocationDetails";

import CoursePic from "../../../assets/img/course1.png";
import CoursePic3 from "../../../assets/img/course3.png";
import CoursePic2 from "../../../assets/img/course2.png";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
	},
	paper: {
		padding: theme.spacing(2),
		margin: theme.spacing(2),
		textAlign: "center",
		// color: theme.palette.text.secondary,
		boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
		borderRadius: "40px",
		border: "solid 1px #E5e5e5",
		color: "#394781",
		fontWeight: "bold",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
	},
	imgSetting: {
		maxWidth: "275px",
		maxHeight: "230px",
	},
	itemList: {
		color: "#979797",
		listStyle: "none",
		fontSize: "0.7em",
		padding: "0",
	},
}));

const CourseInformation = () => {
	const classes = useStyles();

	// const [selectedValue, setSelectedValue] = React.useState("a");

	// const handleChange = (event) => {
	// 	setSelectedValue(event.target.value);
	// };

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<h1 style={{ textAlign: "center" }}>Course Information</h1>
				<Grid container spacing={3} direction="row" justify="space-between">
					<Grid
						item
						sm={3}
						container
						justify="space-around"
						direction="column"
						alignItems="center"
					>
						<Paper className={classes.paper}>
							<img
								src={CoursePic}
								alt="CoursePic"
								className={classes.imgSetting}
							/>

							<h2>Course 1</h2>
							<ul className={classes.itemList}>
								<li>Start date: 01 January 2022</li>
								<li>Time: 10:00am</li>
								<li>Location: Auckland</li>
							</ul>
							<h1 style={{ color: "#E67571" }}>
								$199
								<span style={{ color: "black", fontSize: "0.6em" }}>/term</span>
							</h1>
						</Paper>
						{/* <Radio
							checked={selectedValue === "course1"}
							onChange={handleChange}
							value="course1"
							name="radio-button-demo"
							inputProps={{ "aria-label": "course1" }}
						/> */}
					</Grid>
					<Grid
						item
						sm={3}
						container
						justify="space-around"
						direction="column"
						alignItems="center"
					>
						<Paper className={classes.paper}>
							<img
								src={CoursePic2}
								alt="CoursePic2"
								className={classes.imgSetting}
							/>
							<h2>Scratch Game Building</h2>
							<ul className={classes.itemList}>
								<li>Start date: 01 January 2022</li>
								<li>Time: 10:00am</li>
								<li>Location: Auckland</li>
							</ul>
							<h1 style={{ color: "#E67571" }}>
								$360
								<span style={{ color: "black", fontSize: "0.6em" }}>/term</span>
							</h1>
						</Paper>
						{/* <Radio
							checked={selectedValue === "course2"}
							onChange={handleChange}
							value="course2"
							name="radio-button-demo"
							inputProps={{ "aria-label": "course2" }}
						/> */}
					</Grid>
					<Grid
						item
						sm={3}
						container
						justify="space-around"
						direction="column"
						alignItems="center"
					>
						<Paper className={classes.paper}>
							<img
								src={CoursePic3}
								alt="CoursePic3"
								className={classes.imgSetting}
							/>
							<h2>Course 3</h2>
							<ul className={classes.itemList}>
								<li>Start date: 01 January 2022</li>
								<li>Time: 10:00am</li>
								<li>Location: Auckland</li>
							</ul>
							<h1 style={{ color: "#E67571" }}>
								$299
								<span style={{ color: "black", fontSize: "0.6em" }}>/term</span>
							</h1>
						</Paper>
						{/* <Radio
							checked={selectedValue === "course3"}
							onChange={handleChange}
							value="course3"
							name="radio-button-demo"
							inputProps={{ "aria-label": "course3" }}
						/> */}
					</Grid>
				</Grid>
				<br />
				{/* <Grid
					container
					spacing={3}
					direction="row"
					justify="space-between"
					style={{ backgroundColor: "#F4FAFF" }}
				>
					<CourseLocation />
				</Grid> */}
			</Container>
		</div>
	);
};

export default CourseInformation;
