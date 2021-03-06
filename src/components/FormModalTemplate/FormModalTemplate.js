// import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

// const FormModal = ({
// 	token,
// 	setToken,
// 	handleAuth,
// 	click,
// 	setClick,
// 	handleUpdate,
// }) => {
// 	console.log(token);
// 	const [open, setOpen] = React.useState(false);

// 	const [designer, setDesigner] = useState("");
// 	const [item_type, setItem_type] = useState("");
// 	const [subtype, setSubtype] = useState("");
// 	const [description, setDescription] = useState("");
// 	const [color, setColor] = useState("");
// 	const [season, setSeason] = useState("");
// 	const [url, setUrl] = useState("");
// 	const [favorite, setFavorite] = useState("");

// 	const handleDesignerChange = (event) => {
// 		setDesigner(event.target.value);
// 	};
// 	const handleItem_typeChange = (event) => {
// 		setItem_type(event.target.value);
// 	};
// 	const handleSubtypeChange = (event) => {
// 		setSubtype(event.target.value);
// 	};
// 	const handleDescriptionChange = (event) => {
// 		setDescription(event.target.value);
// 	};
// 	const handleColorChange = (event) => {
// 		setColor(event.target.value);
// 	};
// 	const handleSeasonChange = (event) => {
// 		setSeason(event.target.value);
// 	};
// 	const handleUrlChange = (event) => {
// 		setUrl(event.target.value);
// 	};
// 	const handleFavoriteChange = (event) => {
// 		setFavorite(event.target.value);
// 	};

// 	const handleClickOpen = () => {
// 		setOpen(true);
// 	};

// 	const handleClose = () => {
// 		setOpen(false);
// 	};

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		fetch("http://localhost:3000/items", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 				Accept: "application/json",
// 				Authorization: `Bearer ${token}`,
// 			},
// 			body: JSON.stringify({
// 				designer,
// 				item_type,
// 				subtype,
// 				description,
// 				color,
// 				season,
// 				url,
// 				favorite,
// 			}),
// 		})
// 			.then(() => {
// 				console.log("new item added");
// 			})
// 			.then(() => setClick(!click));
// 		setDesigner("");
// 		setItem_type("");
// 		setSubtype("");
// 		setDescription("");
// 		setColor("");
// 		setSeason("");
// 		setUrl("");
// 		setFavorite("");
// 	};

// 	return (
// 		<div>
// 			<Button
// 				variant="outlined"
// 				color="primary"
// 				onClick={handleClickOpen}
// 			>
// 				Add Items To Your Closet{" "}
// 			</Button>
// 			<Dialog
// 				// fullScreen={fullScreen}
// 				open={open}
// 				onClose={handleClose}
// 				aria-labelledby="form-dialog-title"
// 				onSubmit={handleSubmit}
// 			>
// 				<DialogTitle id="form-dialog-title">Add an Item</DialogTitle>
// 				<DialogContent>
// 					{/* <DialogContentText>
// 						To subscribe to this website, please enter your email
// 						address here. We will send updates occasionally.
// 					</DialogContentText> */}
// 					<form>
// 						<input
// 							value={designer}
// 							onChange={handleDesignerChange}
// 							type="text"
// 							placeholder="designer"
// 						/>
// 						<input
// 							value={item_type}
// 							onChange={handleItem_typeChange}
// 							type="text"
// 							placeholder="item_type"
// 						/>
// 						<input
// 							value={subtype}
// 							onChange={handleSubtypeChange}
// 							type="text"
// 							placeholder="subtype"
// 						/>
// 						<input
// 							value={description}
// 							onChange={handleDescriptionChange}
// 							type="text"
// 							placeholder="description"
// 						/>
// 						<input
// 							value={color}
// 							onChange={handleColorChange}
// 							type="text"
// 							placeholder="color"
// 						/>
// 						<input
// 							value={season}
// 							onChange={handleSeasonChange}
// 							type="text"
// 							placeholder="season"
// 						/>
// 						<input
// 							value={url}
// 							onChange={handleUrlChange}
// 							type="text"
// 							placeholder="url"
// 						/>
// 						<input
// 							value={favorite}
// 							onChange={handleFavoriteChange}
// 							// type="checkbox"
// 							type="text"
// 							placeholder="favorite"
// 						/>
// 						<button
// 							type="submit"
// 							onSubmit={handleSubmit}
// 							onClick={handleClose}
// 							color="primary"
// 						>
// 							Submit
// 						</button>
// 					</form>
// 				</DialogContent>
// 			</Dialog>
// 		</div>
// 	);
// };

// export default FormModal;
