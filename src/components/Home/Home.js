import React from "react";
import { Link, Router, Switch } from "react-router-dom";
import "./Home.css";

function Home() {
	return (
		<div className="Home">
			<h1 className="app-name">affair</h1>
			<Link to="/login">
				<button className="welcome-buttons">login</button>
			</Link>
			<Link to="/new-user">
				<button className="welcome-buttons">create an account</button>
			</Link>
		</div>
	);
}

export default Home;
