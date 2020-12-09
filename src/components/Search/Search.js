import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import "./Search.css";
import Button from "@material-ui/core/Button";

const Search = ({
	closet,
	handleInputSubmit,
	searchInput,
	inputTextHandler,
	user,
	authData,
	hideButton,
	setHideButton,
}) => {
	console.log(closet);

	const displayNone = () => {
		authData();
		setHideButton(true);
	};

	return closet.length > 0 ? (
		<>
			<div className="greeting">
				<h2>
					{user.username}'s {user.style} Closet
				</h2>

				<div className="icon">
					<DarkMode />
				</div>
			</div>
			<div className="search">
				<form id="form" onSubmit={handleInputSubmit}>
					<input
						// style={BarStyling}
						value={searchInput}
						placeholder="search for items by description"
						onChange={inputTextHandler}
					/>
					<Button
						variant="outlined"
						color="primary"
						value="Search"
						type="submit"
					>
						search
					</Button>

					{/* <input
						// style={BarStyling}
						className=""
						type="submit"
						value="Search"
					/> */}
				</form>
			</div>
			{hideButton ? (
				""
			) : (
				<div className="full-closet-button">
					<Button
						variant="outlined"
						color="primary"
						value="Search"
						onClick={displayNone}
						borderColor="#FFFFFF"
					>
						return to full closet
					</Button>
				</div>
			)}
		</>
	) : (
		<p className="loading">loading closet . . .</p>
	);
};

export default Search;
