import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./NewUser.css";
import axios from "axios";

const NewUser = ({ authData, makeUserProfile, closet }) => {
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

	const addAffairTee = () => {
		axios({
			url: "https://aa-affair.herokuapp.com/items",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			data: {
				designer: "Affair",
				item_type: "Top",
				subtype: "T-Shirt",
				description: "High Quality Logo Tee",
				color: "Black",
				season: " Fall",
				year: 2020,
				url:
					"https://res.cloudinary.com/dusr8fbuo/image/upload/v1606706232/4ebe50e2495b17a79c31e48a0e54883f_copy_xnxvxn.png",
				favorite: true,
			},
		});
	};

	const handleNewUserSubmit = (event) => {
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
				makeUserProfile(data.user);
				console.log(data);
			})
			.then(() => addAffairTee())
			.then(() => authData());
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
					<Button type="submit">Submit</Button>
					{closet ? (
						<Redirect to="/closet" />
					) : (
						console.log("not redirecting")
					)}
				</form>
			</div>
		</div>
	);
};

export default NewUser;
