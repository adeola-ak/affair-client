import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ handleAuth, handleLogin, userData, setUserData }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then((resp) => resp.json())
			.then((data) => {
				localStorage.setItem("token", data.token);
				console.log(userData);
			})
			.then(() => handleAuth())
			.then(() => console.log(userData));
		setUsername("");
		setPassword("");
	};

	const formDivStyle = {
		margin: "auto",
		padding: "20px",
		width: "80%",
	};

	return (
		<div>
			<div style={formDivStyle}>
				<h1>Log In</h1>
				<form className="ui form" onSubmit={handleSubmit}>
					<div className="field">
						<label>Username</label>
						<input
							value={username}
							onChange={handleUsernameChange}
							type="text"
							placeholder="username"
						/>
					</div>
					<div className="field">
						<label>Password</label>
						<input
							value={password}
							onChange={handlePasswordChange}
							type="password"
							placeholder="password"
						/>
					</div>

					<Link to="/items/:id">
						<button className="ui button" type="submit">
							Submit
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Login;
