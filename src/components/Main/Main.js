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
	let [searchInput, setSearchInput] = useState("");
	let [hideButton, setHideButton] = useState("true");

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
		console.log(searchInput);
		event.preventDefault();
		let searchedCloset = [];
		for (let i = 0; i < closet.length; i++) {
			let closetItemDescription = closet[i].description;
			closetItemDescription = closetItemDescription.toLowerCase();
			searchInput = searchInput.toLowerCase();
			if (closetItemDescription.includes(searchInput)) {
				searchedCloset.push(closet[i]);
				setCloset(searchedCloset);
				setHideButton(!hideButton);
			} else {
				console.log("no items matching this description");
			}
		}
	};

	const logout = () => {
		window.localStorage.removeItem("token");
		setUser("logged out");
		setCloset([]);
		console.log("logged out");
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
				<AuthedNav user={user} logout={logout} />
				<Search
					closet={closet}
					handleInputSubmit={handleInputSubmit}
					searchInput={searchInput}
					inputTextHandler={inputTextHandler}
					user={user}
					authData={authData}
					hideButton={hideButton}
					setHideButton={setHideButton}
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
