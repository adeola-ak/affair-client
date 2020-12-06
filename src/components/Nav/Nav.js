import React, { useState } from "react";
import "./Nav.css";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Link } from "react-router-dom";

const Nav = () => {
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
					<li className="option" onClick={closeMobileMenu}>
						<Link to="/about">about</Link>
					</li>
					<li className="option" onClick={closeMobileMenu}>
						<Link to="/contact">contact</Link>
					</li>
					<li className="option" onClick={closeMobileMenu}>
						<Link to="/blog">blog</Link>
					</li>

					<li
						className="option mobile-option"
						onClick={closeMobileMenu}
					>
						{/* <a href="/login" className="sign-up">
							SIGN-IN
						</a> */}
						<Link to="login">
							<b>SIGN-IN</b>
						</Link>
					</li>

					<li
						className="option mobile-option"
						onClick={closeMobileMenu}
					>
						{/* <a href="/new-user" className="sign-up">
							SIGN-UP
						</a> */}
						<Link to="new-user" className="signup-btn">
							SIGN-UP
						</Link>
					</li>
				</ul>
			</div>
			<ul className="signin-up">
				<li className="sign-in" onClick={closeMobileMenu}>
					<Link to="login">SIGN IN</Link>
					{/* <a href="/login">SIGN-IN</a> */}
				</li>
				<li onClick={closeMobileMenu}>
					{/* <a href="/new-user" className="signup-btn">
						SIGN-UP
					</a> */}
					<Link to="/new-user" className="signup-btn">
						SIGN-UP
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

export default Nav;
