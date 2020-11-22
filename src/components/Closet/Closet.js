import React, { useState, useEffect } from "react";
import "./Closet.css";
import DarkMode from "../DarkMode/DarkMode";
import axios from "axios";

const Closet = ({ user, userItems, handleAuth }) => {
	const [item, setItem] = useState([]);

	useEffect(() => handleAuth(), []);
	console.log(user);
	console.log(userItems);

	const closetItemsStyle = {
		height: "8em",
	};

	const handleDelete = (userItems) => {
		axios({
			url: `http://localhost:3000/items/${item.id}`,
			method: "DELETE",
		});
		handleAuth();
	};

	let closetItems = "";
	if (userItems) {
		closetItems = userItems.map((item, index) => {
			return (
				<div className="item-card" key={index}>
					<img
						style={closetItemsStyle}
						src={item.url}
						alt={item.index}
					/>
					<p>{item.designer}</p>
					<p>{item.description}</p>
					<p>{item.color}</p>
					<p>{item.item_type}</p>
					<p>{item.subtype}</p>
					<p>{item.season}</p>
					<button>
						<i className="far fa-edit"></i>
					</button>
					<button>
						<i className="far fa-heart"></i>
					</button>

					<button onClick={() => handleDelete(userItems)}>
						<i class="fas fa-trash-alt"></i>
					</button>
				</div>
			);
		});
	}

	return (
		<>
			<DarkMode />

			<div>
				<i className="far fa-plus-square fa-2x"></i>
				<h2>{user.username}'s Closet</h2>
				<div className="item-container">{closetItems}</div>
			</div>
		</>
	);
};

export default Closet;
