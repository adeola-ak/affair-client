import React, { useState, useEffect } from "react";

const ItemForm = ({ handleLogin, handleAuth, user, setUser }) => {
	console.log(user);
	const [designer, setDesigner] = useState("");
	const [item_type, setItem_type] = useState("");
	const [subtype, setSubtype] = useState("");
	const [description, setDescription] = useState("");
	const [color, setColor] = useState("");
	const [season, setSeason] = useState("");
	const [url, setUrl] = useState("");
	const [favorite, setFavorite] = useState("");

	const handleDesignerChange = (event) => {
		setDesigner(event.target.value);
	};
	const handleItem_typeChange = (event) => {
		setItem_type(event.target.value);
	};
	const handleSubtypeChange = (event) => {
		setSubtype(event.target.value);
	};
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};
	const handleColorChange = (event) => {
		setColor(event.target.value);
	};
	const handleSeasonChange = (event) => {
		setSeason(event.target.value);
	};
	const handleUrlChange = (event) => {
		setUrl(event.target.value);
	};
	const handleFavoriteChange = (event) => {
		setFavorite(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch("http://localhost:3000/items", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				designer,
				item_type,
				subtype,
				description,
				color,
				season,
				url,
				favorite,
			}),
		})
			.then((resp) => resp.json())
			.then((data) => {
				localStorage.setItem("token", data.token);
				handleLogin(data.user);
				console.log("logged in");
			})
			.then(() => handleAuth())
			.then(() => console.log(user));
		setDesigner("");
		setItem_type("");
		setSubtype("");
		setDescription("");
		setColor("");
		setSeason("");
		setUrl("");
		setFavorite("");
	};
	const formDivStyle = {
		margin: "auto",
		padding: "20px",
		width: "80%",
	};

	return (
		<div style={formDivStyle}>
			<h1>Add An Item To Your Closet</h1>
			<form className="ui form" onSubmit={handleSubmit}>
				<div className="field">
					<label>designer</label>
					<input
						value={designer}
						onChange={handleDesignerChange}
						type="text"
						placeholder="designer"
					/>
				</div>

				<div className="field">
					<label>item type</label>
					<input
						value={item_type}
						onChange={handleItem_typeChange}
						type="text"
						placeholder="item_type"
					/>
				</div>

				<div className="field">
					<label>subtype</label>
					<input
						value={subtype}
						onChange={handleSubtypeChange}
						type="text"
						placeholder="subtype"
					/>
				</div>

				<div className="field">
					<label>description</label>
					<input
						value={description}
						onChange={handleDescriptionChange}
						type="text"
						placeholder="description"
					/>
				</div>

				<div className="field">
					<label>color</label>
					<input
						value={color}
						onChange={handleColorChange}
						type="text"
						placeholder="color"
					/>
				</div>

				<div className="field">
					<label>season</label>
					<input
						value={season}
						onChange={handleSeasonChange}
						type="text"
						placeholder="season"
					/>
				</div>

				<div className="field">
					<label>url</label>
					<input
						value={url}
						onChange={handleUrlChange}
						type="text"
						placeholder="url"
					/>
				</div>

				<div className="field">
					<label>favorite</label>
					<input
						value={favorite}
						onChange={handleFavoriteChange}
						type="checkbox"
						placeholder="favorite"
					/>
				</div>

				<button className="ui button" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ItemForm;
