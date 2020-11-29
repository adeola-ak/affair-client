import React, { useState, useEffect } from "react";
import "./Closet.css";
import axios from "axios";
import Modal from "../Modal/Modal";
// import ItemForm from "../ItemForm/ItemForm";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarsIcon from "@material-ui/icons/Stars";
const Closet = ({ closet, token, setToken, handleAuth }) => {
	const [click, setClick] = useState(false);
	const [favorite, setFavorite] = useState(false);

	useEffect(() => handleAuth(), [click]);
	console.log(closet);

	const closetItemsStyle = {
		height: "8em",
	};

	const handleUpdate = (id) => {
		axios({
			url: `https://aa-affair.herokuapp.com/items/${id}`,
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(id),
		});
		// handleAuth();
		setClick();
		console.log("item updated");
	};

	const handleDelete = (id) => {
		axios({
			url: `https://aa-affair.herokuapp.com/items/${id}`,
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		// handleAuth();
		setClick();
		console.log("item deleted");
	};

	const faveTrue = (item) => {
		axios({
			url: `https://aa-affair.herokuapp.com/items/${item.id}`,
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { favorite: true },
		});
		// handleAuth();
		setFavorite(true);
		console.log("item favorited");
	};

	const faveFalse = (item) => {
		axios({
			url: `https://aa-affair.herokuapp.com/items/${item.id}`,
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { favorite: false },
		});
		// handleAuth();
		setFavorite(false);
		console.log("item un-favorited");
	};

	const useStyles = makeStyles({
		root: {
			Width: 300,
		},
		media: {
			height: 140,
		},
	});

	const classes = useStyles();

	let fullCloset = "";
	if (closet) {
		fullCloset = closet.map((item, index) => {
			return (
				<Card
					className={classes.root}
					style={{ width: "200px", marginBottom: "40px" }}
				>
					<CardActionArea>
						<img
							style={{
								display: "block",
								width: "50%",
								marginLeft: "auto",
								marginRight: "auto",
							}}
							className={classes.media}
							src={item.url}
							title={item.index}
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
							>
								{item.designer}
							</Typography>
							<Typography
								variant="body2"
								color="textSecondary"
								component="p"
							>
								{item.description}
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Date Added: <b>{item.created_at}</b>
								</Typography>
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							<Modal
								handleAuth={handleAuth}
								token={token}
								setToken={setToken}
								click={click}
								setClick={setClick}
								createNew={false}
								id={item.id}
							/>
						</Button>
						<Button
							size="small"
							color="primary"
							onClick={() => handleDelete(item.id)}
						>
							Delete
						</Button>

						{item.favorite === true ? (
							<button
								onClick={() => faveFalse(item)}
								style={{
									border: "none",
									backgroundColor: "none",
									background: "transparent",
								}}
							>
								<i class="fas fa-heart"></i>
							</button>
						) : (
							<button
								onClick={() => faveTrue(item)}
								style={{
									border: "none",
									backgroundColor: "none",
									background: "transparent",
								}}
							>
								<i className="far fa-heart"></i>
							</button>
						)}
					</CardActions>
				</Card>

				// <div className="item-card" key={index}>
				// 	<img
				// 		style={closetItemsStyle}
				// 		src={item.url}
				// 		alt={item.index}
				// 	/>
				// 	<p>{item.designer}</p>
				// 	<p>{item.description}</p>
				// 	{/* <p>{item.color}</p>
				// 	<p>{item.item_type}</p>
				// 	<p>{item.subtype}</p>
				// 	<p>{item.season}</p>
				// 	<p>{item.favorite}</p> */}
				// 	<p>{item.created_at}</p>

				// 	{item.favorite === true ? (
				// 		<button onClick={() => faveFalse(item)}>
				// 			<i class="fas fa-heart"></i>
				// 		</button>
				// 	) : (
				// 		<button onClick={() => faveTrue(item)}>
				// 			<i className="far fa-heart"></i>
				// 		</button>
				// 	)}
				// 	{/* <button>
				// 		<i className="far fa-edit"> */}
				// 	<Modal
				// 		handleAuth={handleAuth}
				// 		token={token}
				// 		setToken={setToken}
				// 		click={click}
				// 		setClick={setClick}
				// 		createNew={false}
				// 		id={item.id}
				// 	/>
				// 	{/* </i>
				// 	</button> */}

				// 	<button onClick={() => handleDelete(item.id)}>
				// 		<i class="fas fa-trash-alt"></i>
				// 	</button>
				// </div>
			);
		});
	}

	//  <Button
	// 		variant="contained"
	// 		color="default"
	// 		className={classes.button}
	// 		startIcon={<CloudUploadIcon />}
	//  >
	// 		<Modal
	// 			handleAuth={handleAuth}
	// 			token={token}
	// 			setToken={setToken}
	// 			click={click}
	// 			setClick={setClick}
	// 			createNew={true}
	// 		/>
	//  </Button>;

	return (
		<>
			<div className="closet">
				<div className="add-an-item">
					{/* <Modal
						handleAuth={handleAuth}
						token={token}
						setToken={setToken}
						click={click}
						setClick={setClick}
						createNew={true}
					/> */}
					<Button
						variant="contained"
						className={classes.button}
						startIcon={<StarsIcon />}
					>
						<Modal
							handleAuth={handleAuth}
							token={token}
							setToken={setToken}
							click={click}
							setClick={setClick}
							createNew={true}
						/>
					</Button>
				</div>

				<div className="clothes-container">{fullCloset}</div>
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
