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

	return closet.length > 0 ? (
		<>
			<div
				className="greeting"
				// {
				// 	mode === themeType.light ? "greeting" : "greeting-dark"
				// }
			>
				<h2>{user.username}'s Closet</h2>
				<div className="icon">
					<DarkMode />
				</div>
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
	) : (
		<p className="loading">loading . . .</p>
	);
};

export default Search;
