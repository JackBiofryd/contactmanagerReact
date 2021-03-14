import React from "react";

function About() {
	return (
		<div>
			<h1 className="display-4">About Contact Manager</h1>
			<p className="lead">Simple app to manage contacts</p>
			<p className="text-secondary">Version 1.0.0</p>
			{/* Get props from url */}
			{/* <h1>{props.match.params.id}</h1> */}
		</div>
	);
}

export default About;
