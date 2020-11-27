import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import "./Search.css";
import Button from "@material-ui/core/Button";

const Search = ({
	closet,
	setCloset,
	handleInputSubmit,
	searchInput,
	inputTextHandler,
	user,
}) => {
	console.log(closet);

	return (
		<>
			<div className="greeting">
				<h2>{user.username}'s Closet</h2>
				<DarkMode />
			</div>
			<div className="search">
				<form id="form" onSubmit={handleInputSubmit}>
					<input
						// style={BarStyling}
						value={searchInput}
						its
						placeholder={"search your closet"}
						onChange={inputTextHandler}
					/>
					<Button
						variant="outlined"
						color="primary"
						value="Search"
						type="submit"

						// onClick={handleClickOpen}
					>
						Search
					</Button>

					{/* <input
						// style={BarStyling}
						className=""
						type="submit"
						value="Search"
					/> */}
				</form>
			</div>
		</>
	);
};

export default Search;
