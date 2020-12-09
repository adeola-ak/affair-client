import React, { useState } from "react";
import "./AuthedNav.css";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Link } from "react-router-dom";

const AuthedNav = ({ user }) => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<div className="header">
			<div className="logo-nav">
				<div className="logo-container">
					<Link to="/">affair</Link>
				</div>

				<ul className={click ? "nav-options active" : "nav-options"}>
					{/* <li className="option" onClick={closeMobileMenu}>
						<Link to="/about">about</Link>
					</li>
					<li className="option" onClick={closeMobileMenu}>
						<Link to="/contact">contact</Link>
					</li>
					<li className="option" onClick={closeMobileMenu}>
						<Link to="/blog">blog</Link>
					</li> */}

					<li
						className="option mobile-option"
						onClick={closeMobileMenu}
					>
						{/* <Link to="login" className="option-signin-mobile">
							<b>SIGN-IN</b>
						</Link> */}
					</li>

					<li
						className="option mobile-option"
						onClick={closeMobileMenu}
					>
						<Link to="/comingsoon" className="signup-btn">
							{user.name.toUpperCase()}'S PROFILE
						</Link>
					</li>
				</ul>
			</div>
			<ul className="signin-up">
				{/* <li className="sign-in" onClick={closeMobileMenu}>
					<Link to="login">SIGN IN</Link>
				</li> */}
				<li onClick={closeMobileMenu}>
					<Link to="/comingsoon" className="signup-btn">
						{user.name.toUpperCase()}'S PROFILE
					</Link>
				</li>
			</ul>

			<div className="mobile-menu" onClick={handleClick}>
				{click ? (
					<MenuOpenIcon
						className="menu-icon"
						color="inherit"
						fontSize="large"
						color="inherit"
					/>
				) : (
					<MenuIcon
						className="menu-icon"
						color="inherit"
						fontSize="large"
					/>
				)}
			</div>
		</div>
	);
};

export default AuthedNav;
