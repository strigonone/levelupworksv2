import React from "react";

import LoginButton from "../components/LoginButton/LoginButton";
import MainFooter from "../components/MainFooter/MainFooter";
import SponsorsAndPartners from "../components/SponsorsAndPartners/SponsorsAndPartners";

const HomePage = () => {
	return (
		<div>
			<LoginButton />
			<SponsorsAndPartners />
			<MainFooter />
		</div>
	);
};

export default HomePage;
