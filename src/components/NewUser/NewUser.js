import React, { useState } from "react";

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
		fetch("http://localhost:3000/users", {
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
	const formDivStyle = {
		margin: "auto",
		padding: "20px",
		width: "80%",
	};

	return (
		<div style={formDivStyle}>
			<h1>Sign Up</h1>
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

				<button className="ui button" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default NewUser;
