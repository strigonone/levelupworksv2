import React from "react";

import LoginButton from "../components/LoginButton/LoginButton";
import MainFooter from "../components/MainFooter/MainFooter";
import SponsorsAndPartners from "../components/HomePageContent/SponsorsAndPartners/SponsorsAndPartners";
import AreYouReady from "../components/HomePageContent/AreYouReady/AreYouReady";

const HomePage = () => {
	return (
		<div>
			<LoginButton />
			<AreYouReady />
			<SponsorsAndPartners />
			<MainFooter />
		</div>
	);
};

export default HomePage;
