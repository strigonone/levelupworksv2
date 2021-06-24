import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Enrolment from "./pages/Enrolment";
import Dashboard from "./pages/Dashboard";

const Router = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/enrol" component={Enrolment} />
				<Route exact path="/dashboard" component={Dashboard} />
			</Switch>
		</div>
	);
};

export default Router;
