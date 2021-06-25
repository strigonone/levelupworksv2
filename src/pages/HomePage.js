import React from "react";

import LoginButton from "../components/LoginButton/LoginButton";
import MainFooter from "../components/MainFooter/MainFooter";
import SponsorsAndPartners from "../components/HomePageContent/SponsorsAndPartners/SponsorsAndPartners";
import AreYouReady from "../components/HomePageContent/AreYouReady/AreYouReady";
import CourseGallery from "../components/HomePageContent/CourseGallery/CourseGallery";
import WhatDoParentsSay from "../components/HomePageContent/WhatDoParentsSay/WhatDoParentsSay";
import ProfessionalTeachers from "../components/HomePageContent/OurProfessionalTeachers/ProfessionalTeachers";
import HowDoesItWork from "../components/HomePageContent/HowDoesItWork/HowDoesItWork";
import WhatYouGet from "../components/HomePageContent/WhatYouGet/WhatYouGet";
import CourseInformation from "../components/HomePageContent/CourseInformation/CourseInformation";
import HeroComponent from "../components/HomePageContent/HeroComponent/HeroComponent";

const HomePage = () => {
	return (
		<div>
			<LoginButton />
			<HeroComponent />
			<CourseInformation />
			<WhatYouGet />
			<HowDoesItWork />
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
