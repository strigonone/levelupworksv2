import React from "react";
import "./HowDoesItWorkStyle.css";

const HowDoesItWorkProp = (props) => {
	return (
		<div className="IconContainer">
			{props.text}
			{props.image}
		</div>
	);
};

export default HowDoesItWorkProp;
