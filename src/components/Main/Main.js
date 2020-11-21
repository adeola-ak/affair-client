import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";
import NewUser from "../NewUser/NewUser";
import Closet from "../Closet/Closet";

function Main({ setUser, setUserData, handleAuthClick, userData }) {
	const handleLogin = (user) => {
		setUser(user);
	};
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>

			<Route path="/login">
				<Login
					handleLogin={handleLogin}
					handleAuthClick={handleAuthClick}
					setUserData={setUserData}
					userData={userData}
				/>
			</Route>

			<Route path="/new-user">
				<NewUser handleLogin={handleLogin} />
			</Route>

			<Route path="/items/:id">
				<Closet setUser={setUser} setUserData={setUserData} />
			</Route>
		</Switch>
	);
}

export default Main;
