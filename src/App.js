import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";

function App() {
	const [user, setUser] = useState({});
	const [userData, setUserData] = useState("");

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			fetch(`http://localhost:3000/auto_login`, {
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

	const handleAuthClick = () => {
		const token = localStorage.getItem("token");
		fetch(`http://localhost:3000/items`, {
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
		<>
			<Nav />
			<Main
				userData={userData}
				setUser={setUser}
				setUserData={setUserData}
				handleAuthClick={handleAuthClick}
			/>
		</>
	);
}

export default App;
