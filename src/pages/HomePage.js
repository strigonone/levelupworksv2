import React from "react";
import MainFooter from "../components/MainFooter/MainFooter";
// import AreYouReady from "../components/HomePageContent/AreYouReady/AreYouReady";
// import CourseGallery from "../components/HomePageContent/CourseGallery/CourseGallery";
// import WhatDoParentsSay from "../components/HomePageContent/WhatDoParentsSay/WhatDoParentsSay";
// import ProfessionalTeachers from "../components/HomePageContent/OurProfessionalTeachers/ProfessionalTeachers";
import HowDoesItWork from "../components/HomePageContent/HowDoesItWork/HowDoesItWork";
// import WhatYouGet from "../components/HomePageContent/WhatYouGet/WhatYouGet";
// import CourseInformation from "../components/HomePageContent/CourseInformation/CourseInformation";
import HeroComponent from "../components/HomePageContent/HeroComponent/HeroComponent";
import MainTopNav from "../components/MainTopNav/MainTopNav";
import SimpleSlider from "../components/TesterLOL/testLOL";

const HomePage = () => {
	return (
		<div>
			<MainTopNav />
			<HeroComponent />
			{/* <CourseInformation /> */}
			{/* <WhatYouGet /> */}
			<HowDoesItWork />
			{/* <ProfessionalTeachers /> */}
			{/* <WhatDoParentsSay /> */}
			{/* <CourseGallery /> */}
			{/* <AreYouReady /> */}
			<SimpleSlider />
			<MainFooter />
		</div>
	);
};

export default HomePage;
