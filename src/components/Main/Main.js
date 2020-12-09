import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "../Nav/Nav";
import AuthedNav from "../AuthedNav/AuthedNav";
import Login from "../Login/Login";
import Home from "../Home/Home";
import NewUser from "../NewUser/NewUser";
import Closet from "../Closet/Closet";
import Search from "../Search/Search";

function Main() {
	const [closet, setCloset] = useState("");
	const [user, setUser] = useState("");
	const [searchInput, setSearchInput] = useState("");

	const authData = () => {
		fetch("https://aa-affair.herokuapp.com/items", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		})
			.then((resp) => resp.json())
			.then((data) => {
				setCloset(data);
				console.log(closet);
			});
	};

	const makeUserProfile = (user) => {
		setUser(user);
	};

	const inputTextHandler = (event) => {
		setSearchInput(event.target.value);
	};

	const handleInputSubmit = (event) => {
		console.log("hello");
		event.preventDefault();
		if (searchInput.length > 0) {
			setCloset(
				closet.filter(
					(item) =>
						item.description.toLowerCase() ===
						searchInput.toLowerCase()
				)
			);
			console.log("submitted");
		} else {
			setCloset(closet);
		}
	};

	return (
		<Switch>
			<Route exact path="/">
				<Nav />
				<Home />
			</Route>

			<Route path="/login">
				<Nav />
				<Login
					authData={authData}
					closet={closet}
					makeUserProfile={makeUserProfile}
				/>
			</Route>

			<Route path="/new-user">
				<Nav />
				<NewUser
					authData={authData}
					closet={closet}
					makeUserProfile={makeUserProfile}
				/>
			</Route>

			<Route path="/closet">
				<AuthedNav user={user} />
				<Search
					closet={closet}
					setCloset={setCloset}
					handleInputSubmit={handleInputSubmit}
					searchInput={searchInput}
					inputTextHandler={inputTextHandler}
					user={user}
				/>
				<Closet
					authData={authData}
					closet={closet}
					setCloset={setCloset}
					user={user}
					handleInputSubmit={handleInputSubmit}
					searchInput={searchInput}
					inputTextHandler={inputTextHandler}
				/>
			</Route>
		</Switch>
	);
}

export default Main;
