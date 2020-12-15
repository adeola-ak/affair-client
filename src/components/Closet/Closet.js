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
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarsIcon from "@material-ui/icons/Stars";

const Closet = ({ closet, authData, user }) => {
	const [click, setClick] = useState(false);
	const [favorite, setFavorite] = useState(false);
	const [token, setToken] = useState(localStorage.getItem("token"));

	useEffect(() => authData(), [click]);
	// useEffect(() => alert("welcome back `${user.name}`"));
	const closetItemsStyle = {
		height: "8em",
	};

	const handleDelete = (id) => {
		axios({
			url: `https://aa-affair.herokuapp.com/items/${id}`,
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			// handleAuth();
			.then(() => setClick(!click));
	};

	const faveTrue = (item) => {
		axios({
			url: `https://aa-affair.herokuapp.com/items/${item.id}`,
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { favorite: true },
		}).then(() => setClick(!click));
		setFavorite(true);
	};

	const faveFalse = (item) => {
		axios({
			url: `https://aa-affair.herokuapp.com/items/${item.id}`,
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { favorite: false },
		}).then(() => setClick(!click));
		setFavorite(false);
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
					style={{
						width: "200px",
						marginBottom: "40px",
						margin: "7px",
					}}
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
								authData={authData}
								token={token}
								setToken={setToken}
								click={click}
								setClick={setClick}
								createNew={false}
								id={item.id}
								user={user}
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
			);
		});
	}

	return closet.length > 0 ? (
		<>
			<div className="closet">
				<div className="add-an-item">
					<Button
						variant="contained"
						className={classes.button}
						startIcon={<StarsIcon />}
					>
						<Modal
							authData={authData}
							token={token}
							setToken={setToken}
							click={click}
							setClick={setClick}
							createNew={true}
						/>
					</Button>
				</div>

				<div className="clothes-container">{fullCloset}</div>
			</div>
		</>
	) : (
		<div className="clothes-container">{fullCloset}</div>
	);
};

export default Closet;
