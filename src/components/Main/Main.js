import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";
import NewUser from "../NewUser/NewUser";
import Closet from "../Closet/Closet";

function Main() {
	const [user, setUser] = useState({});
	const [userData, setUserData] = useState("");

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			fetch("http://localhost:3000/auto_login", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((resp) => resp.json())
				.then((data) => {
					setUser(data);
					// console.log(data)
				});
		}
	}, []);

	const handleLogin = (user) => {
		setUser(user);
	};

	const handleAuth = () => {
		const token = localStorage.getItem("token");
		fetch("http://localhost:3000/items", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
				setUserData(data);
			});
	};

	console.log(user);

	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>

			<Route path="/login">
				<Login
					handleLogin={handleLogin}
					handleAuth={handleAuth}
					userData={userData}
					setUserData={setUserData}
				/>
			</Route>

			<Route path="/new-user">
				<NewUser handleLogin={handleLogin} />
			</Route>

			<Route path="/items/:id">
				<Closet
					handleAuth={handleAuth}
					user={user}
					setUser={setUser}
					userItems={userData}
					setUserData={setUserData}
				/>
			</Route>
		</Switch>
	);
}

export default Main;
