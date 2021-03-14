import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header(props) {
	const { branding } = props;

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-1">
			{/* INLINE STYLING: <h1 style={{color: 'red', fontSize: '50px'}}>{branding}</h1> */}
			{/* VARIABLE INLINE STYLING <h1 style={headingStyle}>{branding}</h1> */}

			<div className="container">
				<Link to="/" className="navbar-brand">
					{branding}
				</Link>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								<i className="fas fa-home"></i> Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact/add" className="nav-link">
								<i className="fas fa-plus"></i> Add
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								<i className="fas fa-question"></i> About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

// Default values for props
Header.defaultProps = {
	branding: "My App"
};

// Default prop types
Header.propTypes = {
	branding: PropTypes.string.isRequired
};

// const headingStyle = {
//     color: 'red',
//      fontSize: '50px'
// }

export default Header;
