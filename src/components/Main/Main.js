import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";
import NewUser from "../NewUser/NewUser";
import Closet from "../Closet/Closet";
import Search from "../Search/Search";

function Main() {
	const [closet, setCloset] = useState("");
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState("");
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			fetch("https://aa-affair.herokuapp.com/auto_login", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((resp) => resp.json())
				.then((data) => {
					setUser(data);
					console.log(data, "user info auto login");
					console.log(token, "user token after login in");
				});
		}
	}, []);

	const handleAuth = () => {
		const token = localStorage.getItem("token");
		fetch("https://aa-affair.herokuapp.com/items", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data, "user data after successful log in");
				setCloset(data);
			});
	};

	const inputTextHandler = (event) => {
		// console.log(event.target.value);
		setSearchInput(event.target.value);
	};

	// const closetSearch = async (searchInput) => {
	// 	const filtered = closet.filter((item) => {
	// 		return item.description.toLowerCase().includes(searchInput.toLowerCase())
	// 	});
	// 	setCloset(closet)

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
				<Home />
			</Route>

			<Route path="/login">
				<Login handleAuth={handleAuth} />
			</Route>

			<Route path="/new-user">
				<NewUser />
			</Route>

			<Route path="/closet">
				<Search
					closet={closet}
					setCloset={setCloset}
					handleInputSubmit={handleInputSubmit}
					searchInput={searchInput}
					inputTextHandler={inputTextHandler}
					user={user}
				/>
				<Closet
					// {...routerprops}
					handleAuth={handleAuth}
					closet={closet}
					setCloset={setCloset}
					token={token}
					setToken={setToken}
					user={user}
					// id={props.match.params.id}
					closet={closet}
					setCloset={setCloset}
					handleInputSubmit={handleInputSubmit}
					searchInput={searchInput}
					inputTextHandler={inputTextHandler}
				/>
			</Route>

			{/* <Route path="/newitem">
				<ItemForm
					handleAuth={handleAuth}
					token={token}
					setToken={setToken}
				/>
			</Route> */}
		</Switch>
	);
}

export default Main;
