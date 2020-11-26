import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./NewUser.css";

function NewUser({ handleLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [style, setStyle] = useState("");

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handleNameChange = (event) => {
		setName(event.target.value);
	};
	const handleGenderChange = (event) => {
		setGender(event.target.value);
	};
	const handleStyleChange = (event) => {
		setStyle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch("https://aa-affair.herokuapp.com/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				username,
				password,
				name,
				gender,
				style,
			}),
		})
			.then((resp) => resp.json())
			.then((data) => {
				localStorage.setItem("token", data.token);
				handleLogin(data.user);
				console.log("logged in");
			});
		setUsername("");
		setPassword("");
		setName("");
		setGender("");
		setStyle("");
	};

	return (
		<div className="formDiv">
			<h3 className="form-title">
				<i>sign up</i>
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
				<div className="field">
					<label>Name</label>
					<input
						value={name}
						onChange={handleNameChange}
						type="text"
						placeholder="name"
					/>
				</div>
				<div className="field">
					<label>Gender</label>
					<input
						value={gender}
						onChange={handleGenderChange}
						type="text"
						placeholder="gender"
					/>
				</div>
				<div className="field">
					<label>Style</label>
					<input
						value={style}
						onChange={handleStyleChange}
						type="text"
						placeholder="style"
					/>
				</div>
				<Link to="/closet">
					<Button type="submit">Submit</Button>
				</Link>
			</form>
		</div>
	);
}

export default NewUser;
