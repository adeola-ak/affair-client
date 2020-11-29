import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./NewUser.css";
import axios from "axios";

const NewUser = ({ handleLogin, token, setToken }) => {
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

	console.log("test");
	console.log(token);
	setToken("");
	console.log(token);
	const handleNewUserSubmit = (event) => {
		event.preventDefault();
		console.log("test");
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
		});

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
				console.log(data);
				localStorage.setItem("token", data.token);
				// handleLogin(data.user);
				console.log("logged in");
				console.log("new token", token);
			});
		// setUsername("");
		// setPassword("");
		// setName("");
		// setGender("");
		// setStyle("");

		// eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ
		// 	.oT7kSePnYs7eVIsRIzIi0UEC7XBclsrO3qrnXwic8Zg;

		fetch("https://aa-affair.herokuapp.com/auto_login", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(() => addSample());
	};

	const addSample = () => {
		axios({
			url: "https://aa-affair.herokuapp.com/items",
			method: "POST",
			header: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			data: {
				desginer: "affair",
				item_type: "Top",
				subtype: "Tee Shirt",
				description: "High Quality Cotton Affair T Shirt",
				color: "Black",
				season: "Fall",
				year: 2020,
				url:
					"https://apis.mail.yahoo.com/ws/v3/mailboxes/@.id==VjN-qtXns8c0TtWEQ-Hi-uHgpGZkQHQlXTgvkfVqYPhxuUdAWmeJhSI83VVF10WXcN3MBmBxuc2UTjmHlmQVvjcwMQ/messages/@.id==AGVTp1tGP-bFX8LG9QYqIBYWPwY/content/parts/@.id==2/thumbnail?appId=YMailNorrinLaunch",
				favorite: true,
			},
		});
	};

	return (
		<div className="sign-up-div">
			<div className="formDiv">
				<h3 className="form-title">
					<i>sign up</i>
				</h3>
				<form className="ui form" onSubmit={handleNewUserSubmit}>
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
		</div>
	);
};

export default NewUser;
