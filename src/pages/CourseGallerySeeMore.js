import React from "react";
import MainFooter from "../components/MainFooter/MainFooter";
import CourseGalleryGrid from "../components/HomePageContent/CourseGallery/CourseGalleryGrid";

import MainTopNav from "../components/MainTopNav/MainTopNav";

const seeMoreCourseGallery = () => {
	return (
		<div>
			<MainTopNav />
			<CourseGalleryGrid />

			<MainFooter />
		</div>
	);
};

export default seeMoreCourseGallery;
