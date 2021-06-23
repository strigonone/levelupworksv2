import React from "react";
import "./MainFooterStyle.css";

import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const MainFooter = () => {
	return (
		<div className="MainFooterLayout">
			<div className="FooterContainer">
				<div className="ContentContainer">
					<h4>Program</h4>
					<h4>Our Team</h4>
					<h4>Teaching with Us</h4>
					<h4>Support</h4>
					<h4>FAQ</h4>
				</div>

				<div className="ContentContainer">
					{/* <h4>Subscribe</h4> */}
					<TextField
						id="filled-full-width"
						label="Subscribe"
						style={{ margin: 8 }}
						placeholder="Email"
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
						variant="filled"
					/>
				</div>
			</div>
			<Divider style={{ margin: "3%" }} />
			<div className="footerLogos">
				<LinkedInIcon fontSize="inherit" />
				<FacebookIcon fontSize="inherit" />
				<TwitterIcon fontSize="inherit" />
			</div>
			<div className="footerBottomText">
				<h5>© LevelUp Works 2021</h5>
				<h5>Privacy - Terms</h5>
			</div>
		</div>
	);
};

export default MainFooter;
