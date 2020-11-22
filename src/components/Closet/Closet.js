import React, { useState, useEffect } from "react";
import "./Closet.css";
import DarkMode from "../DarkMode/DarkMode";

const Closet = ({ user, userData, handleAuth }) => {
	useEffect(() => handleAuth(), []);
	console.log(user);
	console.log(userData);

	const closetItemsStyle = {
		height: "8em",
	};

	let closetItems = "";
	if (userData) {
		closetItems = userData.map((item, index) => {
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
					<button>
						<i className="far fa-trash-alt"></i>
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
				<h2>closet</h2>
				<div className="item-container">{closetItems}</div>
			</div>
		</>
	);
};

export default Closet;
