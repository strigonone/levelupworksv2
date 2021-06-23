import React from "react";
import LevelUpWorksLogo from "../img/logo.png";
import "./MainTopNavStyle.css";
import { Link } from "react-router-dom";
import flagnz from "../img/nzflag.png";
import flagmaori from "../img/maoriflag.png";
import "../TeacherDashboard/MainTemplate.css";
import FormModal from "../LogInSignUp/MissionXModal";

// Top Navigation panel. Can be reused for pages such as the Home Page or Project library pages.

const MainTopNav = () => {
	return (
		<div className="TopNavMainBackground">
			<Link to="/">
				<img src={LevelUpWorksLogo} alt="LevelUp Works Logo" />
			</Link>

			<div className="TopNavigationContainer">
				<div className="TopNavigation">
					<Link to="/">Home</Link>
					<li>Features</li>
					<li>Teachers</li>
				</div>
			</div>

			<div className="TopNavRegistrationContainer">
				<div className="DashboardTopNavFlags">
					LANG
					<img src={flagnz} alt="NZ Flag" />
					<img src={flagmaori} alt="Maori Flag" />
				</div>
				<div className="TopNavRegistrationSection">
				<i className="fa fa-user-circle" /><FormModal loginProp =' | LOG IN' signupProp ='REGISTER' />
				</div>
			</div>
		</div>
	);
};

export default MainTopNav;
