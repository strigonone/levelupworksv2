import React from "react";

import LoginButton from "../components/LoginButton/LoginButton";
import MainFooter from "../components/MainFooter/MainFooter";
import SponsorsAndPartners from "../components/HomePageContent/SponsorsAndPartners/SponsorsAndPartners";
import AreYouReady from "../components/HomePageContent/AreYouReady/AreYouReady";
import CourseGallery from "../components/HomePageContent/CourseGallery/CourseGallery";
import WhatDoParentsSay from "../components/HomePageContent/WhatDoParentsSay/WhatDoParentsSay";
import ProfessionalTeachers from "../components/HomePageContent/OurProfessionalTeachers/ProfessionalTeachers";

const HomePage = () => {
	return (
		<div>
			<LoginButton />
			<ProfessionalTeachers />
			<WhatDoParentsSay />
			<CourseGallery />
			<AreYouReady />
			<SponsorsAndPartners />
			<MainFooter />
		</div>
	);
};

export default HomePage;
