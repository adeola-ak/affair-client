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
			console.log("logged in");
			console.log(token);
			console.log(data);
		});
	setUsername("");
	setPassword("");
	setName("");
	setGender("");
	setStyle("");
};
