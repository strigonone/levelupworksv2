import React from "react";
import "./WhatYouGetStyle.css";

const TeachingKidsIcon = (props) => {
	return (
		<div
			className="teachingKidsIconContainer"
			style={{
				backgroundImage: `url(${props.background})`,
				backgroundSize: "Cover",
			}}
		>
			{props.icon}
			{props.text}
		</div>
	);
};

export default TeachingKidsIcon;
