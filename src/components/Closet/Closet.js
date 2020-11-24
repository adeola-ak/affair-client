import React, { useState, useEffect } from "react";
import "./Closet.css";
import DarkMode from "../DarkMode/DarkMode";
import axios from "axios";
import Modal from "../Modal/Modal";
import EditModal from "../EditModal/EditModal";
import Search from "../Search/Search";
// import ItemForm from "../ItemForm/ItemForm";

const Closet = ({ closet, token, setToken, handleAuth, user }) => {
	const [click, setClick] = useState(false);
	const [favorite, setFavorite] = useState(false);

	useEffect(() => handleAuth(), [click]);
	console.log(closet);

	const closetItemsStyle = {
		height: "8em",
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
		setClick();
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
		// setClick(!click);
		handleAuth();

		console.log("item deleted");
	};

	const faveTrue = (item) => {
		axios({
			url: `http://localhost:3000/items/${item.id}`,
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { favorite: true },
		});
		handleAuth();
		setFavorite(true);
		console.log("item favorited");
	};

	const faveFalse = (item) => {
		axios({
			url: `http://localhost:3000/items/${item.id}`,
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { favorite: false },
		});
		handleAuth();
		setFavorite(false);
		console.log("item un-favorited");
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
					<p>{item.favorite}</p>

					{item.favorite === true ? (
						<button onClick={() => faveFalse(item)}>
							<i class="fas fa-heart"></i>
						</button>
					) : (
						<button onClick={() => faveTrue(item)}>
							<i className="far fa-heart"></i>
						</button>
					)}
					<button>
						<i className="far fa-edit">
							<EditModal
								handleAuth={handleAuth}
								token={token}
								setToken={setToken}
								click={click}
								setClick={setClick}
								onSubmit={() => handleUpdate()}
							/>
						</i>
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
				<di>
					<Search />
				</di>
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
