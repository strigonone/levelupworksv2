import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Enrolment from "./pages/Enrolment";
import Dashboard from "./pages/Dashboard";
import seeMoreCourseGallery from "./pages/CourseGallerySeeMore";

import Course1LocationTest from "./pages/Course1LocationTest";

const Router = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/enrol" component={Enrolment} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route
					exact
					path="/courseGallerySeeMore"
					component={seeMoreCourseGallery}
				/>
				<Route exact path="/course1location" component={Course1LocationTest} />
			</Switch>
		</div>
	);
};

export default Router;
