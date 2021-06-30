import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
	head: {
		// backgroundColor: theme.palette.common.black,
		color: theme.palette.common.black,
		fontSize: "1em",
		fontWeight: "bold",
	},
	body: {
		fontSize: "1em",
		fontWeight: "bold",
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(even)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createData(name, time, lessonDuration, sessions) {
	return { name, time, lessonDuration, sessions };
}

const rows = [
	createData("Epsom Girls Grammer School", "Saturdays 11:00am", "1 Hour", 9),
];

export default function CourseLocation() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Location</StyledTableCell>
						<StyledTableCell>Time</StyledTableCell>
						<StyledTableCell>Lesson Duration</StyledTableCell>
						<StyledTableCell>Sessions</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<StyledTableCell component="th" scope="row">
								{row.name}
							</StyledTableCell>
							<StyledTableCell>{row.time}</StyledTableCell>
							<StyledTableCell>{row.lessonDuration}</StyledTableCell>
							<StyledTableCell>{row.sessions}</StyledTableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
