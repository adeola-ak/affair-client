import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Login.css";

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
		fetch("https://aa-affair.herokuapp.com/login", {
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

	return (
		<div>
			<div className="formDiv">
				<h3 className="form-title">
					<i>sign in</i>
				</h3>
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

					<Link to="/closet">
						<Button type="submit">Submit</Button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Login;
