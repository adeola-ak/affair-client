import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const Modal = ({ token, user, click, setClick, createNew, id }) => {
	console.log(token);
	const [open, setOpen] = React.useState(false);

	const [designer, setDesigner] = useState("");
	const [item_type, setItem_type] = useState("");
	const [subtype, setSubtype] = useState("");
	const [description, setDescription] = useState("");
	const [color, setColor] = useState("");
	const [season, setSeason] = useState("");
	const [year, setYear] = useState();
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
	const handleYearChange = (event) => {
		setYear(event.target.value);
	};
	const handleUrlChange = (event) => {
		setUrl(event.target.value);
	};
	const handleFavoriteChange = (event) => {
		setFavorite(event.target.value);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleUpdate = (event) => {
		event.preventDefault();
		console.log("handling update");
		fetch(`https://aa-affair.herokuapp.com/items/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${token}`,
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
				year,
			}),
		}).then(() => setClick(!click));
		console.log("item updated");
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch("https://aa-affair.herokuapp.com/items", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${token}`,
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
				year,
			}),
		})
			.then(() => {
				console.log("new item added");
			})
			.then(() => setClick(!click));
		setDesigner("");
		setItem_type("");
		setSubtype("");
		setDescription("");
		setColor("");
		setSeason("");
		setYear("");
		setUrl("");
		setFavorite("");
	};

	const useStyles = makeStyles((theme) => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
	}));

	const classes = useStyles();

	return (
		<div>
			{createNew ? (
				<Button size="small" color="primary" onClick={handleClickOpen}>
					Add an Item
				</Button>
			) : (
				<Button size="small" color="primary" onClick={handleClickOpen}>
					Edit
				</Button>
			)}

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				{createNew ? (
					<DialogTitle id="form-dialog-title">
						Add an Item
					</DialogTitle>
				) : (
					<DialogTitle id="form-dialog-title">Edit Item</DialogTitle>
				)}

				<DialogContent>
					{/* <DialogContentText>
						To subscribe to this website, please enter your email
						address here. We will send updates occasionally.
					</DialogContentText> */}

					<form onSubmit={createNew ? handleSubmit : handleUpdate}>
						<label>designer</label>
						<input
							value={designer}
							onChange={handleDesignerChange}
							type="text"
							placeholder="required"
						/>
						<label>item type</label>
						<input
							value={item_type}
							onChange={handleItem_typeChange}
							type="text"
							placeholder="ex: Handbag"
						/>
						<label>subtype</label>
						<input
							value={subtype}
							onChange={handleSubtypeChange}
							type="text"
							placeholder="ex: Crossbody"
						/>
						<label>description</label>
						<input
							value={description}
							onChange={handleDescriptionChange}
							type="text"
							placeholder="required"
						/>{" "}
						<label>color</label>
						<input
							value={color}
							onChange={handleColorChange}
							type="text"
							placeholder="required"
						/>
						<div>
							<FormControl className={classes.formControl}>
								<InputLabel id="demo-simple-select-label">
									season
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={season}
									onChange={handleSeasonChange}
								>
									<MenuItem value="summer">summer</MenuItem>
									<MenuItem value="fall">fall</MenuItem>
									<MenuItem value="winter">winter</MenuItem>
									<MenuItem value="spring">spring</MenuItem>
								</Select>
							</FormControl>
							<FormControl className={classes.formControl}>
								<InputLabel id="demo-simple-select-label">
									year
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={year}
									onChange={handleYearChange}
								>
									<MenuItem value="2020">2020</MenuItem>
									<MenuItem value="2019">2019</MenuItem>
									<MenuItem value="2018">2018</MenuItem>
									<MenuItem value="2017">2017</MenuItem>
									<MenuItem value="2016">2016</MenuItem>
									<MenuItem value="2015">2015</MenuItem>
								</Select>
							</FormControl>{" "}
						</div>{" "}
						<label>image url</label>
						<input
							value={url}
							onChange={handleUrlChange}
							type="text"
							placeholder="url"
						/>
						{/* <input
							value={favorite}
							onChange={handleFavoriteChange}
							// type="checkbox"
							type="text"
							placeholder="favorite"
						/> */}
						<Button
							type="submit"
							variant="outlined"
							onClick={handleClose}
							color="primary"
						>
							Submit
						</Button>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Modal;
