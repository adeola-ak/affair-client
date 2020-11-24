import React, { useState, useEffect } from "react";
import "./Closet.css";
import DarkMode from "../DarkMode/DarkMode";
import axios from "axios";
import Modal from "../Modal/Modal";
// import ItemForm from "../ItemForm/ItemForm";

const Closet = ({ closet, token, setToken, handleAuth, user }) => {
	const [item, setItem] = useState([]);
	const [click, setClick] = useState(false);
	console.log(item);

	useEffect(() => handleAuth(), [click]);
	console.log(closet);

	const closetItemsStyle = {
		height: "8em",
	};

	const handleCreate = (id) => {
		axios({
			url: `http://localhost:3000/items/${id}`,
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(id),
		});
		handleAuth();
		console.log("item created");
	};

	const handleUpdate = (id) => {
		axios({
			url: `http://localhost:3000/items/${id}`,
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(id),
		});
		handleAuth();
		console.log("item updated");
	};

	const handleDelete = (id) => {
		axios({
			url: `http://localhost:3000/items/${id}`,
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		setClick();
		console.log("item deleted");
	};

	let closetItems = "";
	if (closet) {
		closetItems = closet.map((item, index) => {
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
						<i className="far fa-heart"></i>
					</button>
					<button onClick={() => handleUpdate(item.id)}>
						<i className="far fa-edit"></i>
					</button>
					<button onClick={() => handleDelete(item.id)}>
						<i class="fas fa-trash-alt"></i>
					</button>
				</div>
			);
		});
	}

	return (
		<>
			<DarkMode />
			<Modal
				handleAuth={handleAuth}
				token={token}
				setToken={setToken}
				click={click}
				setClick={setClick}
			/>
			<div>
				<h2>{user.username}'s Closet</h2>
				<div className="item-container">{closetItems}</div>
				{/* <ItemForm
					handleAuth={handleAuth}
					token={token}
					setToken={setToken}
					click={click}
					setClick={setClick}
				/> */}
			</div>
		</>
	);
};

export default Closet;
