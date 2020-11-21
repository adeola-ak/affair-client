import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ handleAuthClick, handleLogin, userData }) => {
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
				handleLogin(data.user);
			})
			.then(() => handleAuthClick())
			.then(() => console.log(userData));
		setUsername("");
		setPassword("");
	};

	const closetItemsStyle = {
		height: "10em",
	};
	let closetItems = "";
	if (userData) {
		closetItems = userData.map((item, index) => {
			return (
				<div key={index}>
					<img
						style={closetItemsStyle}
						src={item.url}
						alt={item.index}
					/>
					<p>{item.designer}</p>
					<p>{item.description}</p>
					<p>{item.color}</p>
					<p>{item.item_type}</p>
					<p>{item.subtype}</p>
					<p>{item.season}</p>
					<button>delete</button>
				</div>
			);
		});
	}

	// const showCloset = () => {
	// 	closetItems.forEach((closetItem) => {});
	// };

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

					{/* <Link to="/items/:id"> */}
					<button className="ui button" type="submit">
						Submit
					</button>
					{/* </Link> */}
				</form>
			</div>
			{closetItems}
		</div>
	);
};

export default LoginForm;
