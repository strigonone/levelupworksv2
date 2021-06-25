import React from "react";
import LevelUpWorksLogo from "../../assets/img/leveluplogo.png";
import LoginButton from "../LoginButton/LoginButton";
import './MainTopNav.css';

const MainTopNav = () => {
	return (
		<div className="top-nav-container">
			<ul>
				<img src={LevelUpWorksLogo} alt="Level Up Works" />
				<li><a href="/">Program</a></li>
				<li><a href="/">Our Team</a></li>
				<li><a href="/">Teaching with Us</a></li>
				<li><a href="/">FAQ</a></li>
				<li><a href="/">Contact Us</a></li>
			</ul>
			<LoginButton />
		</div>
	);
};

export default MainTopNav;
