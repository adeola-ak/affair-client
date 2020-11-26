// import React from "react";
import { Link } from "react-router-dom";
// // import css
// import "./Nav.css";

// function Nav() {
// 	const handleClickBars = () => {
// 		let nav = document.getElementById("linksList");
// 		if (nav.style.display === "flex") {
// 			nav.style.display = "none";
// 		} else {
// 			nav.style.display = "flex";
// 		}
// 	};
// 	const handleClick = () => {
// 		let nav = document.getElementById("linksList");
// 		nav.style.display = "none";
// 	};
// 	return (
// 		<div className="navBar">
// 			<header className="navBar">
// 				<Link className="appTitle" to="/" onClick={handleClick}>
// 					<div>affair</div>
// 				</Link>

// 				<div className="navLinks">
// 					<Link to="/about" onClick={handleClick}>
// 						<p className="link">about</p>
// 					</Link>
// 					<Link to="/contact" onClick={handleClick}>
// 						<p className="link">contact</p>
// 					</Link>
// 				</div>

// 				<div className="navIcon" onClick={handleClickBars}>
// 					<i className="fas fa-bars"></i>
// 				</div>
// 			</header>
// 			<nav id="linksList">
// 				<Link className="navAbout" to="/About" onClick={handleClick}>
// 					About
// 				</Link>
// 			</nav>
// 		</div>
// 	);
// }

// export default Nav;

import React, { useState } from "react";
import "./Nav.css";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

const Nav = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<div className="header">
			<div className="logo-nav">
				<div className="logo-container">
					<a href="/">affair</a>
				</div>

				<ul className={click ? "nav-options active" : "nav-options"}>
					<li className="option" onClick={closeMobileMenu}>
						<a href="/about">about</a>
					</li>
					<li className="option" onClick={closeMobileMenu}>
						<a href="/contact">contact</a>
					</li>
					<li className="option" onClick={closeMobileMenu}>
						<a href="blog">blog</a>
					</li>
					<li
						className="option mobile-option"
						onClick={closeMobileMenu}
					>
						<a href="/about">about</a>
						<a href="/contact">contact</a>
						<a href="/blog">blog</a>
					</li>
					<li
						className="option mobile-option"
						onClick={closeMobileMenu}
					>
						<a href="/new-user" className="sign-up">
							SIGN-UP
						</a>
					</li>
				</ul>
			</div>
			<ul className="signin-up">
				<li className="sign-in" onClick={closeMobileMenu}>
					<a href="/login">SIGN-IN</a>
				</li>
				<li onClick={closeMobileMenu}>
					<a href="/new-user" className="signup-btn">
						SIGN-UP
					</a>
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

export default Nav;
